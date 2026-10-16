// Сборка сайта для Vercel → dist/
//
// Исходник один: "ChikChirik Site -standalone src-.dc.html" (русский). Из него собираются
// страницы на трёх языках (ru: /, kk: /kz/, en: /en/), и для каждого языка:
//   главная, юридические документы (/terms, /privacy, /consent, /offer)
//   и страницы категорий (/videographers, /video-editors, /smm — список берётся из CATS в исходнике).
//
// 1. Копирует файлы сайта в dist/.
// 2. Перевод: словари i18n/<код>.json (строки), i18n/<код>-cats.json (категории),
//    i18n/<код>-docs.json (документы; если файла нет — тексты документов остаются на русском).
// 3. Для каждой страницы: SEO-теги из <helmet> переносятся в <head>, подставляются свои title,
//    description, canonical, hreflang и JSON-LD (тексты для документов — i18n/meta.json).
// 4. Пре-рендер: страницы открываются в headless Chrome, в HTML кладётся статическая копия текста
//    (#ssr) — её видят только боты без JS. Если Chrome недоступен, сборка не падает.
// 5. sitemap.xml генерируется из списка страниц.
//
// Новая категория/документ → добавьте id в rewrites в vercel.json (сборка предупредит).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import http from 'node:http';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'ChikChirik Site -standalone src-.dc.html');
const DIST = path.join(ROOT, 'dist');
const SITE = 'https://chikchirik.kz';
const TODAY = new Date().toISOString().slice(0, 10);
// Яндекс Метрика (счётчик на всех страницах; при пре-рендере запросы к ней блокируются)
const METRIKA_ID = 113654864;
const ROOT_FILES = ['robots.txt', 'llms.txt', 'favicon.ico', 'favicon.png', 'apple-touch-icon.png', 'og.jpg'];

const LANGS = [
  { code: 'ru', dir: '', ogLocale: 'ru_RU' },
  { code: 'kk', dir: 'kz', ogLocale: 'kk_KZ', dict: 'kk.json', docs: 'kk-docs.json', cats: 'kk-cats.json' },
  { code: 'en', dir: 'en', ogLocale: 'en_US', dict: 'en.json', cats: 'en-cats.json' },
];

// --- 1. Файлы ---
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });
fs.cpSync(path.join(ROOT, 'assets'), path.join(DIST, 'assets'), {
  recursive: true,
  filter: (p) => !/\.png$/.test(p) || !fs.existsSync(p.replace(/\.png$/, '.webp')), // PNG с WebP-заменой не нужны
});
fs.cpSync(path.join(ROOT, '_ds'), path.join(DIST, '_ds'), { recursive: true });

// Скорость: библиотеки с собственного домена (те же файлы, что раньше грузились с unpkg/cdnjs —
// поэтому SRI-хеши в support.js продолжают совпадать), один CSS вместо девяти, шрифты одной ссылкой.
const VENDOR = {
  'react-18.3.1.min.js': 'node_modules/react/umd/react.production.min.js',
  'react-dom-18.3.1.min.js': 'node_modules/react-dom/umd/react-dom.production.min.js',
  'gsap-3.12.5.min.js': 'node_modules/gsap/dist/gsap.min.js',
  'scrolltrigger-3.12.5.min.js': 'node_modules/gsap/dist/ScrollTrigger.min.js',
  'lenis-1.1.13.min.js': 'node_modules/lenis/dist/lenis.min.js',
};
fs.mkdirSync(path.join(DIST, 'vendor'), { recursive: true });
for (const [name, from] of Object.entries(VENDOR)) fs.copyFileSync(path.join(ROOT, from), path.join(DIST, 'vendor', name));
fs.writeFileSync(path.join(DIST, 'support.js'), fs.readFileSync(path.join(ROOT, 'support.js'), 'utf8')
  .replace('https://unpkg.com/react@18.3.1/umd/react.production.min.js', '/vendor/react-18.3.1.min.js')
  .replace('https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js', '/vendor/react-dom-18.3.1.min.js'));
const DS = fs.readdirSync(path.join(ROOT, '_ds'))[0];
const FONTS_URL = 'https://fonts.googleapis.com/css2?family=Bitter:wght@900&family=Golos+Text:wght@400;500;600;700;800&display=swap';
const siteCss = ['fonts', 'colors', 'typography', 'spacing', 'radius', 'elevation', 'motion', 'base']
  .map((t) => fs.readFileSync(path.join(ROOT, '_ds', DS, 'tokens', `${t}.css`), 'utf8').replace(/@import url\([^)]*\);?/g, ''))
  .join('\n').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\n\s*\n+/g, '\n');
fs.writeFileSync(path.join(DIST, 'assets', 'site.css'), siteCss);
// файлы подтверждения прав (Google Search Console, Яндекс Вебмастер)
ROOT_FILES.push(...fs.readdirSync(path.join(ROOT, 'deploy-root')).filter((f) => /^(google[0-9a-f]+|yandex_[0-9a-f]+)\.html$/.test(f)));
for (const f of ROOT_FILES) {
  const p = path.join(ROOT, 'deploy-root', f);
  if (fs.existsSync(p)) fs.copyFileSync(p, path.join(DIST, f));
}

// --- Исходник и данные ---
const src = fs.readFileSync(SRC, 'utf8');
const readJson = (f) => JSON.parse(fs.readFileSync(path.join(ROOT, 'i18n', f), 'utf8'));
const block = (html, start, end) => {
  const a = html.indexOf(start);
  const b = html.indexOf(end, a) + end.length;
  if (a < 0 || b < end.length) throw new Error(`В исходнике не найден блок ${start}`);
  return [a, b];
};
const DOCS_START = 'const DOCS = [', DOCS_END = '\n];';
const CATS_START = '/*CATS*/', CATS_END = '/*END CATS*/';
const ruDocs = (() => { const [a, b] = block(src, DOCS_START, DOCS_END); return Function(`return ${src.slice(a + DOCS_START.length - 1, b - 1)}`)(); })();
const ruCats = (() => { const [a, b] = block(src, CATS_START, CATS_END); return JSON.parse(src.slice(a + CATS_START.length, b - CATS_END.length)); })();
const meta = readJson('meta.json');

const ROUTES = [
  { id: '', type: 'home' },
  ...ruDocs.map((d) => ({ id: d.id, type: 'doc' })),
  ...ruCats.cats.map((c) => ({ id: c.id, type: 'cat' })),
];
const urlOf = (lang, id) => `/${lang.dir ? lang.dir + '/' : ''}${id}`;

// --- 2. Перевод ---
function translate(html, lang) {
  if (!lang.dict) return html;
  const dict = readJson(lang.dict).strings;
  const pairs = Object.entries(dict).sort((x, y) => y[0].length - x[0].length);
  const apply = (text, only) => {
    for (const [from, to] of pairs) if (!only || only(from)) text = text.split(from).join(to);
    return text;
  };
  // Категории — целиком из i18n/<код>-cats.json
  const cats = readJson(lang.cats);
  delete cats._comment;
  let [a, b] = block(html, CATS_START, CATS_END);
  html = html.slice(0, a) + CATS_START + JSON.stringify(cats) + CATS_END + html.slice(b);
  // Документы — переведённые целиком, если есть файл, иначе только названия
  const docs = lang.docs ? readJson(lang.docs).docs : null;
  [a, b] = block(html, DOCS_START, DOCS_END);
  if (docs) html = html.slice(0, a) + `const DOCS = ${JSON.stringify(docs)};` + html.slice(b);
  [a, b] = block(html, DOCS_START, docs ? '];' : DOCS_END);
  const [c, d] = block(html, CATS_START, CATS_END);
  // Словарь применяется ко всему, кроме данных документов и категорий
  return apply(html.slice(0, a))
    + (docs ? html.slice(a, b) : apply(html.slice(a, b), (s) => s.startsWith('title: ')))
    + apply(html.slice(b, c)) + html.slice(c, d) + apply(html.slice(d));
}

// Пути к файлам — абсолютные (страницы лежат во вложенных папках)
const absolutize = (html) => html.replace(/(["'(]|, )(?:\.\/)?(assets|_ds|support\.js)(?=[\/"'])/g, '$1/$2');

function leftoverRussian(html) {
  const [a, b] = block(html, DOCS_START, '];');
  const rest = (html.slice(0, a) + html.slice(b))
    .replace(/data-props="[^"]*"/, '')
    .replace(/Русский|Қазақша/g, '')
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1'); // комментарии в коде
  return [...new Set((rest.match(/[А-Яа-яЁё][А-Яа-яЁё\s,.«»—-]*/g) || []).map((t) => t.trim()).filter(Boolean))];
}

// --- 3. <head> для конкретной страницы ---
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function hoistHead(html) {
  const hm = /<helmet>([\s\S]*?)<\/helmet>/.exec(html);
  if (!hm) throw new Error('В исходнике не найден <helmet>');
  const seoTag = /<title>[\s\S]*?<\/title>|<meta\b(?=[^>]*\b(?:name|property)=)[^>]*>|<link\b(?=[^>]*\brel="(?:canonical|icon|apple-touch-icon)")[^>]*>|<script type="application\/ld\+json">[\s\S]*?<\/script>/g;
  const hoisted = hm[1].match(seoTag) || [];
  // Из <helmet> (его подключает скрипт после старта) убираем стили дизайн-системы, неиспользуемый
  // _ds_bundle.js и библиотеки анимации — они подключаются ниже прямо в <head>
  const inlineStyles = hm[1].match(/<style>[\s\S]*?<\/style>/g) || [];
  const rest = hm[1].replace(seoTag, '')
    .replace(/<style>[\s\S]*?<\/style>/g, '')
    .replace(/<link rel="stylesheet" href="[^"]*_ds\/[^"]*">/g, '')
    .replace(/<script src="[^"]*(?:_ds_bundle\.js|gsap\.min\.js|ScrollTrigger\.min\.js|lenis\.min\.js)"><\/script>/g, '')
    .replace(/\n\s*\n+/g, '\n');
  html = html.replace(hm[0], `<helmet>${rest}</helmet>`);
  const headExtra = [
    ...hoisted,
    '<!--hreflang-->',
    '<link rel="preconnect" href="https://fonts.googleapis.com">',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    '<link rel="preload" as="script" href="/vendor/react-18.3.1.min.js" crossorigin="anonymous" integrity="sha384-DGyLxAyjq0f9SPpVevD6IgztCFlnMF6oW/XQGmfe+IsZ8TqEiDrcHkMLKI6fiB/Z">',
    '<link rel="preload" as="script" href="/vendor/react-dom-18.3.1.min.js" crossorigin="anonymous" integrity="sha384-gTGxhz21lVGYNMcdJOyq01Edg0jhn/c22nsx0kyqP0TxaV5WVdsSH1fSDUf5YJj1">',
    `<link rel="stylesheet" href="${FONTS_URL}">`,
    '<link rel="stylesheet" href="/assets/site.css">',
    ...inlineStyles,
    '<script async src="/vendor/gsap-3.12.5.min.js"></script>',
    '<script async src="/vendor/scrolltrigger-3.12.5.min.js"></script>',
    '<script async src="/vendor/lenis-1.1.13.min.js"></script>',
    '<script>document.documentElement.className+=" js"</script>',
    `<script>(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}','ym');ym(${METRIKA_ID},'init',{ssr:true,clickmap:true,trackLinks:true,accurateTrackBounce:true});</script>`,
    '<style>x-dc{display:none}.js #ssr{display:none}#ssr{font-family:system-ui,sans-serif;max-width:960px;margin:0 auto;padding:24px 16px;line-height:1.5}#ssr img{max-width:240px;height:auto}</style>',
  ].join('\n');
  html = html.replace(/<body>/, `<body>\n<noscript><div><img src="https://mc.yandex.ru/watch/${METRIKA_ID}" style="position:absolute;left:-9999px" alt=""></div></noscript>`);
  return html.replace(/(<meta name="viewport"[^>]*>)/, `$1\n${headExtra}`);
}

function pageHead(html, lang, route, data) {
  const url = SITE + urlOf(lang, route.id);
  const alternates = [
    ...LANGS.map((l) => `<link rel="alternate" hreflang="${l.code}" href="${SITE}${urlOf(l, route.id)}">`),
    `<link rel="alternate" hreflang="x-default" href="${SITE}${urlOf(LANGS[0], route.id)}">`,
  ].join('\n');
  html = html.replace('<!--hreflang-->', alternates)
    .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`)
    .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`);
  if (route.type === 'home') return html;

  const { title, desc, name, faq } = data;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(desc)}">`)
    .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(title)}">`)
    .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(desc)}">`);
  // JSON-LD: своя WebPage, хлебные крошки, FAQ категории (у документов FAQ главной убираем)
  return html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/, (m, open, json, close) => {
    const ld = JSON.parse(json);
    const home = SITE + urlOf(lang, '');
    ld['@graph'] = ld['@graph'].flatMap((n) => {
      if (n['@type'] === 'WebPage') return [{ ...n, '@id': url + '#webpage', url, name: title, description: desc, breadcrumb: { '@id': url + '#breadcrumb' } }];
      if (n['@type'] === 'FAQPage') return faq ? [{ '@type': 'FAQPage', mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }] : [];
      return [n];
    });
    ld['@graph'].push({
      '@type': 'BreadcrumbList', '@id': url + '#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: data.homeName, item: home },
        { '@type': 'ListItem', position: 2, name, item: url },
      ],
    });
    return open + JSON.stringify(ld) + close;
  });
}

// --- Сборка страниц ---
const PAGES = [];
for (const lang of LANGS) {
  if (lang.dict) {
    const missing = Object.keys(readJson('en.json').strings).filter((k) => !(k in readJson(lang.dict).strings));
    if (missing.length) console.warn(`⚠️  В i18n/${lang.dict} нет переводов для:\n  ${missing.join('\n  ')}`);
  }
  const html = hoistHead(absolutize(translate(src, lang)));
  if (lang.code === 'en') {
    const left = leftoverRussian(html);
    if (left.length) console.warn(`⚠️  На английской странице остался русский текст (добавьте в i18n/en.json и i18n/kk.json):\n  ${left.join('\n  ')}`);
  }
  const cats = lang.cats ? readJson(lang.cats) : ruCats;
  for (const route of ROUTES) {
    let data = {};
    if (route.type === 'doc') {
      const m = meta[lang.code][route.id];
      data = { title: m.title, desc: m.desc, name: m.title.replace(/ — ChikChirik$/, ''), homeName: cats.ui.home };
    } else if (route.type === 'cat') {
      const c = cats.cats.find((x) => x.id === route.id);
      data = { title: c.metaTitle, desc: c.metaDesc, name: c.name, faq: c.faq, homeName: cats.ui.home };
      if (c.metaTitle.length > 65 || c.metaDesc.length > 165) console.warn(`⚠️  Длинные title/description: ${lang.code}/${route.id} (${c.metaTitle.length}/${c.metaDesc.length})`);
    }
    const url = urlOf(lang, route.id);
    PAGES.push({ url, file: path.join(lang.dir, route.id, 'index.html'), html: pageHead(html, lang, route, data) });
  }
}
for (const pg of PAGES) {
  fs.mkdirSync(path.dirname(path.join(DIST, pg.file)), { recursive: true });
  fs.writeFileSync(path.join(DIST, pg.file), pg.html);
}
console.log(`Страниц: ${PAGES.length}`);

// Проверка: все адреса документов и категорий есть в rewrites vercel.json
const vercel = fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf8');
const notRouted = ROUTES.filter((r) => r.id && !vercel.includes(r.id)).map((r) => r.id);
if (notRouted.length) console.warn(`⚠️  Добавьте в rewrites vercel.json: ${notRouted.join(', ')}`);

// --- 5. sitemap.xml ---
const sitemap = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'];
for (const route of ROUTES) {
  const alts = [
    ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${SITE}${urlOf(l, route.id)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${urlOf(LANGS[0], route.id)}"/>`,
  ];
  for (const lang of LANGS) sitemap.push('  <url>', `    <loc>${SITE}${urlOf(lang, route.id)}</loc>`, `    <lastmod>${TODAY}</lastmod>`, ...alts, '  </url>');
}
sitemap.push('</urlset>', '');
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap.join('\n'));

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
      let file = path.join(DIST, decodeURIComponent(req.url.split('?')[0]));
      if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
      if (!file.startsWith(DIST) || !fs.existsSync(file)) { res.writeHead(404); return res.end(); }
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
    });
    srv.listen(0, '127.0.0.1', () => resolve(srv));
  });
}

async function prerender(browser, port, url) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 900 });
    // Не засчитывать визиты сборки в Метрику
    await page.setRequestInterception(true);
    page.on('request', (req) => (/mc\.yandex\.(ru|com|kz)/.test(req.url()) ? req.abort() : req.continue()));
    await page.goto(`http://127.0.0.1:${port}${url}`, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.waitForSelector('#dc-root h1', { timeout: 30000 });
    // «Чистая» семантическая копия: без стилей, скриптов, декоративных элементов и id (чтобы якоря вели на живую страницу)
    return await page.evaluate(() => {
      const root = document.querySelector('#dc-root').cloneNode(true);
      // Заголовки, анимированные по словам, хранят текст в aria-label, а слова — в aria-hidden
      root.querySelectorAll('[aria-label]').forEach((el) => {
        if (/^H[1-6]$/.test(el.tagName) || el.querySelector('[aria-hidden="true"]')) el.textContent = el.getAttribute('aria-label');
      });
      root.querySelectorAll('script,style,svg,canvas,video,iframe,noscript,[aria-hidden="true"]').forEach((n) => n.remove());
      root.querySelectorAll('*').forEach((el) => {
        for (const a of [...el.attributes]) if (!['href', 'src', 'alt'].includes(a.name)) el.removeAttribute(a.name);
      });
      return root.innerHTML.replace(/<(div|span)>\s*<\/\1>/g, '').replace(/\s{2,}/g, ' ');
    });
  } finally {
    await page.close();
  }
}

const srv = await serve();
let browser;
try {
  browser = await launch();
  const queue = [...PAGES];
  let done = 0;
  await Promise.all(Array.from({ length: 4 }, async () => {
    for (let pg; (pg = queue.shift());) {
      const ssr = await prerender(browser, srv.address().port, pg.url);
      fs.writeFileSync(path.join(DIST, pg.file), pg.html.replace(/<body>\n/, `<body>\n<div id="ssr">${ssr}</div>\n`));
      done++;
    }
  }));
  console.log(`Пре-рендер: ${done} из ${PAGES.length} страниц`);
} catch (e) {
  console.warn('⚠️  Пре-рендер пропущен:', e.message);
} finally {
  if (browser) await browser.close();
  srv.close();
}
