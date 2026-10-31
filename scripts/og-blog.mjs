// Renders 1200x630 OG images for one blog post in the style of assets/og/*-blog-*.jpg.
// Usage (from the site root): node scripts/og-blog.mjs <slug> <image> "<ru title>" "<en title>" "<kk title>"
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { createRequire } from 'node:module';

const ROOT = process.cwd();
const require = createRequire(path.join(ROOT, 'package.json'));
const puppeteer = require('puppeteer-core');
const [slug, img, ru, en, kk] = process.argv.slice(2);
const LANGS = [['ru', 'БЛОГ', ru], ['en', 'BLOG', en], ['kk', 'БЛОГ', kk]];

const srv = http.createServer((req, res) => {
  const f = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]));
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); }
  const type = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.woff2': 'font/woff2', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg' }[path.extname(f)] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': type });
  fs.createReadStream(f).pipe(res);
}).listen(0, '127.0.0.1');
await new Promise((r) => srv.once('listening', r));
const base = `http://127.0.0.1:${srv.address().port}`;

const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630 });

const bg = '#0057FF';
console.log('browser ready');

for (const [lang, label, title] of LANGS) {
  const html = `<!doctype html><html><head><meta charset="utf-8"><base href="${base}/"><link rel="stylesheet" href="${base}/assets/fonts/fonts.css"><style>
    *{margin:0;box-sizing:border-box} body{width:1200px;height:630px;background:${bg};font-family:'Golos Text',sans-serif;color:#fff;position:relative;overflow:hidden}
    .logo{position:absolute;left:72px;top:72px;height:44px}
    .pill{position:absolute;left:72px;top:140px;background:#fff;color:${bg};font-weight:700;font-size:22px;letter-spacing:.06em;padding:10px 18px;border-radius:999px}
    h1{position:absolute;left:72px;bottom:70px;width:580px;font-size:56px;line-height:1.08;font-weight:700;letter-spacing:-.01em}
    .ph{position:absolute;right:40px;top:40px;width:420px;height:550px;border-radius:28px;object-fit:cover}
  </style></head><body>
    <img class="logo" src="${base}/assets/logo-wordmark-white.png">
    <div class="pill">${label}</div>
    <h1>${title}</h1>
    <img class="ph" src="${base}/${img}">
  </body></html>`;
  await page.setContent(html, { waitUntil: 'load', timeout: 30000 });
  await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map((i) => i.decode().catch(() => {}))); });
  // Shrink the title until it fits under the label.
  await page.evaluate(() => { const h = document.querySelector('h1'); let s = 56; while (h.getBoundingClientRect().top < 210 && s > 30) { s -= 2; h.style.fontSize = s + 'px'; } });
  const out = path.join(ROOT, 'assets', 'og', `${lang}-blog-${slug}.jpg`);
  await page.screenshot({ path: out, type: 'jpeg', quality: 88 });
  console.log('wrote', out);
}
await browser.close();
srv.close();
