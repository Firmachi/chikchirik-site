// Сборка сайта для Vercel → dist/
//
// 1. Копирует исходник страницы и файлы сайта в dist/.
// 2. Переносит SEO-теги (title, description, canonical, Open Graph, JSON-LD) из <helmet>
//    прямо в <head>, чтобы их видели боты без JavaScript (Telegram, WhatsApp, Яндекс, ИИ-поисковики).
// 3. Английская версия (/en/): тот же исходник + словарь i18n/en.json.
//    Тексты юридических документов не переводятся (только их названия).
// 4. Пре-рендер: открывает страницы в headless Chrome и кладёт в HTML статическую копию
//    текста (#ssr). Её видят только боты/браузеры без JS — с JS живая страница рисуется как обычно.
//    Если Chrome недоступен, сборка не падает — просто без шага 4.
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
const SITE = 'https://chikchirik.kz';
const hreflang = [
  `<link rel="alternate" hreflang="ru" href="${SITE}/">`,
  `<link rel="alternate" hreflang="en" href="${SITE}/en/">`,
  `<link rel="alternate" hreflang="x-default" href="${SITE}/">`,
];

function hoistHead(html) {
  const hm = /<helmet>([\s\S]*?)<\/helmet>/.exec(html);
  if (!hm) throw new Error('В исходнике не найден <helmet>');
  let helmet = hm[1];
  const seoTag = /<title>[\s\S]*?<\/title>|<meta\b(?=[^>]*\b(?:name|property)=)[^>]*>|<link\b(?=[^>]*\brel="(?:canonical|icon|apple-touch-icon)")[^>]*>|<script type="application\/ld\+json">[\s\S]*?<\/script>/g;
  const hoisted = helmet.match(seoTag) || [];
  helmet = helmet.replace(seoTag, '').replace(/\n\s*\n+/g, '\n');
  html = html.replace(hm[0], `<helmet>${helmet}</helmet>`);
  const headExtra = [
    ...hoisted,
    ...hreflang,
    '<link rel="preconnect" href="https://unpkg.com" crossorigin>',
    '<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>',
    '<link rel="preconnect" href="https://fonts.googleapis.com">',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    '<script>document.documentElement.className+=" js"</script>',
    '<style>x-dc{display:none}.js #ssr{display:none}#ssr{font-family:system-ui,sans-serif;max-width:960px;margin:0 auto;padding:24px 16px;line-height:1.5}#ssr img{max-width:240px;height:auto}</style>',
  ].join('\n');
  return html.replace(/(<meta name="viewport"[^>]*>)/, `$1\n${headExtra}`);
}

// --- 3. Перевод по словарю ---
function translate(html, dict) {
  // Массив DOCS (юридические тексты) не трогаем — переводим в нём только названия документов
  const a = html.indexOf('const DOCS = [');
  const b = html.indexOf('\n];', a) + 3;
  const pairs = Object.entries(dict).sort((x, y) => y[0].length - x[0].length);
  const apply = (text, only) => {
    for (const [ru, en] of pairs) if (!only || only(ru)) text = text.split(ru).join(en);
    return text;
  };
  const out = apply(html.slice(0, a)) + apply(html.slice(a, b), (ru) => ru.startsWith('title: ')) + apply(html.slice(b));
  // Страница лежит в /en/ — относительные пути к файлам делаем абсолютными
  return out.replace(/(["'(])(?:\.\/)?(assets|_ds|support\.js)(?=[\/"'])/g, '$1/$2');
}

function leftoverRussian(html) {
  const a = html.indexOf('const DOCS = [');
  const b = html.indexOf('\n];', a) + 3;
  const rest = (html.slice(0, a) + html.slice(b))
    .replace(/data-props="[^"]*"/, '')
    .replace(/Русский/g, '')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1'); // комментарии в коде
  return [...new Set((rest.match(/[А-Яа-яЁё][А-Яа-яЁё\s,.«»—-]*/g) || []).map((t) => t.trim()).filter(Boolean))];
}

const ruHtml = hoistHead(fs.readFileSync(SRC, 'utf8'));
const dict = JSON.parse(fs.readFileSync(path.join(ROOT, 'i18n', 'en.json'), 'utf8')).strings;
const enHtml = hoistHead(translate(fs.readFileSync(SRC, 'utf8'), dict));
const left = leftoverRussian(enHtml);
if (left.length) console.warn(`⚠️  На английской странице остался русский текст (добавьте в i18n/en.json):\n  ${left.join('\n  ')}`);

const PAGES = [
  { url: '/', file: 'index.html', html: ruHtml },
  { url: '/en/', file: 'en/index.html', html: enHtml },
];
for (const pg of PAGES) {
  fs.mkdirSync(path.dirname(path.join(DIST, pg.file)), { recursive: true });
  fs.writeFileSync(path.join(DIST, pg.file), pg.html);
}
console.log(`Страницы: ${PAGES.map((p) => p.url).join(', ')}`);

// --- 4. Пре-рендер ---
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

async function prerender(browser, port, url) {
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(`http://127.0.0.1:${port}${url}`, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.waitForSelector('#dc-root h1', { timeout: 30000 });
    // Собираем «чистую» семантическую копию: без стилей, скриптов, декоративных элементов и id (чтобы якоря вели на живую страницу)
    return await page.evaluate(() => {
      const root = document.querySelector('#dc-root').cloneNode(true);
      // Заголовки, анимированные по словам, хранят текст в aria-label, а слова — в aria-hidden
      root.querySelectorAll('[aria-label]').forEach((el) => {
        if (/^H[1-6]$/.test(el.tagName) || el.querySelector('[aria-hidden="true"]')) el.textContent = el.getAttribute('aria-label');
      });
      root.querySelectorAll('script,style,svg,canvas,video,iframe,noscript,[aria-hidden="true"]').forEach((n) => n.remove());
      root.querySelectorAll('*').forEach((el) => {
        for (const a of [...el.attributes]) if (!['href', 'src', 'alt'].includes(a.name)) el.removeAttribute(a.name);
        if (el.tagName === 'A' && el.getAttribute('href') === '#docs') el.removeAttribute('href');
      });
      return root.innerHTML.replace(/<(div|span)>\s*<\/\1>/g, '').replace(/\s{2,}/g, ' ');
    });
  }
}

const srv = await serve();
let browser;
try {
  browser = await launch();
  for (const pg of PAGES) {
    const ssr = await prerender(browser, srv.address().port, pg.url);
    fs.writeFileSync(path.join(DIST, pg.file), pg.html.replace(/<body>/, `<body>\n<div id="ssr">${ssr}</div>`));
    console.log(`Пре-рендер ${pg.url}: ${Math.round(ssr.length / 1024)} КБ текста для ботов`);
  }
} catch (e) {
  console.warn('⚠️  Пре-рендер пропущен:', e.message);
} finally {
  if (browser) await browser.close();
  srv.close();
}
