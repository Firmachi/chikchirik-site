// Сборка сайта для Vercel → dist/
//
// 1. Копирует исходник страницы и файлы сайта в dist/.
// 2. Переносит SEO-теги (title, description, canonical, Open Graph, JSON-LD) из <helmet>
//    прямо в <head>, чтобы их видели боты без JavaScript (Telegram, WhatsApp, Яндекс, ИИ-поисковики).
// 3. Пре-рендер: открывает страницу в headless Chrome и кладёт в HTML статическую копию
//    текста (#ssr). Её видят только боты/браузеры без JS — с JS живая страница рисуется как обычно.
//    Если Chrome недоступен, сборка не падает — просто без шага 3.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import http from 'node:http';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'ChikChirik Site -standalone src-.dc.html');
const DIST = path.join(ROOT, 'dist');
const ROOT_FILES = ['robots.txt', 'sitemap.xml', 'llms.txt', 'favicon.ico', 'favicon.png', 'apple-touch-icon.png', 'og.jpg'];

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });
fs.cpSync(path.join(ROOT, 'assets'), path.join(DIST, 'assets'), {
  recursive: true,
  filter: (p) => !/\.png$/.test(p) || !fs.existsSync(p.replace(/\.png$/, '.webp')), // PNG с WebP-заменой не нужны
});
fs.cpSync(path.join(ROOT, '_ds'), path.join(DIST, '_ds'), { recursive: true });
fs.copyFileSync(path.join(ROOT, 'support.js'), path.join(DIST, 'support.js'));
// файлы подтверждения прав (Google Search Console, Яндекс Вебмастер)
ROOT_FILES.push(...fs.readdirSync(path.join(ROOT, 'deploy-root')).filter((f) => /^(google[0-9a-f]+|yandex_[0-9a-f]+)\.html$/.test(f)));
for (const f of ROOT_FILES) {
  const p = path.join(ROOT, 'deploy-root', f);
  if (fs.existsSync(p)) fs.copyFileSync(p, path.join(DIST, f));
}

// --- 2. SEO-теги из <helmet> → <head> ---
let html = fs.readFileSync(SRC, 'utf8');
const hm = /<helmet>([\s\S]*?)<\/helmet>/.exec(html);
if (!hm) throw new Error('В исходнике не найден <helmet>');
let helmet = hm[1];
const seoTag = /<title>[\s\S]*?<\/title>|<meta\b(?=[^>]*\b(?:name|property)=)[^>]*>|<link\b(?=[^>]*\brel="(?:canonical|icon|apple-touch-icon)")[^>]*>|<script type="application\/ld\+json">[\s\S]*?<\/script>/g;
const hoisted = helmet.match(seoTag) || [];
helmet = helmet.replace(seoTag, '').replace(/\n\s*\n+/g, '\n');
html = html.replace(hm[0], `<helmet>${helmet}</helmet>`);

const headExtra = [
  ...hoisted,
  '<link rel="preconnect" href="https://unpkg.com" crossorigin>',
  '<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>',
  '<link rel="preconnect" href="https://fonts.googleapis.com">',
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  '<script>document.documentElement.className+=" js"</script>',
  '<style>x-dc{display:none}.js #ssr{display:none}#ssr{font-family:system-ui,sans-serif;max-width:960px;margin:0 auto;padding:24px 16px;line-height:1.5}#ssr img{max-width:240px;height:auto}</style>',
].join('\n');
html = html.replace(/(<meta name="viewport"[^>]*>)/, `$1\n${headExtra}`);
fs.writeFileSync(path.join(DIST, 'index.html'), html);
console.log(`SEO-теги перенесены в <head>: ${hoisted.length}`);

// --- 3. Пре-рендер ---
async function launch() {
  const puppeteer = (await import('puppeteer-core')).default;
  if (process.platform === 'linux') {
    const chromium = (await import('@sparticuz/chromium')).default;
    return puppeteer.launch({ args: chromium.args, executablePath: await chromium.executablePath(), headless: true });
  }
  const mac = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  return puppeteer.launch({ executablePath: process.env.CHROME_PATH || mac, headless: true });
}

const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg' };
function serve() {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p.endsWith('/')) p += 'index.html';
      const file = path.join(DIST, p);
      if (!file.startsWith(DIST) || !fs.existsSync(file)) { res.writeHead(404); return res.end(); }
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
    });
    srv.listen(0, '127.0.0.1', () => resolve(srv));
  });
}

async function prerender() {
  const srv = await serve();
  const browser = await launch();
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(`http://127.0.0.1:${srv.address().port}/`, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.waitForSelector('#dc-root h1', { timeout: 30000 });
    // Собираем «чистую» семантическую копию: без стилей, скриптов и декоративных элементов
    return await page.evaluate(() => {
      const root = document.querySelector('#dc-root').cloneNode(true);
      // Заголовки, анимированные по словам, хранят текст в aria-label, а слова — в aria-hidden
      root.querySelectorAll('[aria-label]').forEach((el) => {
        if (/^H[1-6]$/.test(el.tagName) || el.querySelector('[aria-hidden="true"]')) el.textContent = el.getAttribute('aria-label');
      });
      root.querySelectorAll('script,style,svg,canvas,video,iframe,noscript,[aria-hidden="true"]').forEach((n) => n.remove());
      root.querySelectorAll('*').forEach((el) => {
        for (const a of [...el.attributes]) if (!['href', 'src', 'alt', 'id'].includes(a.name)) el.removeAttribute(a.name);
        if (el.tagName === 'A' && el.getAttribute('href') === '#docs') el.removeAttribute('href');
      });
      return root.innerHTML.replace(/<(div|span)>\s*<\/\1>/g, '').replace(/\s{2,}/g, ' ');
    });
  } finally {
    await browser.close();
    srv.close();
  }
}

try {
  const ssr = await prerender();
  const out = html.replace(/<body>/, `<body>\n<div id="ssr">${ssr}</div>`);
  fs.writeFileSync(path.join(DIST, 'index.html'), out);
  console.log(`Пре-рендер готов: ${Math.round(ssr.length / 1024)} КБ текста для ботов`);
} catch (e) {
  console.warn('⚠️  Пре-рендер пропущен:', e.message);
}
