# SEO-правки для chikchirik.kz — что нужно сделать на сервере

## 1. Пересобрать сайт из исходника
В `ChikChirik Site.dc.html` и `ChikChirik Site -standalone src-.dc.html` добавлено:
- в `<helmet>`: title, meta description, canonical, Open Graph / Twitter, favicon, apple-touch-icon, `apple-itunes-app`, JSON-LD (Organization, WebSite, MobileApplication, FAQPage);
- FAQ: все ответы теперь всегда в DOM (закрытые скрыты через `display:none`), чтобы поисковики их видели;
- alt у трёх фото.

Нужно пересобрать и выложить страницу тем же способом, что и раньше. После деплоя в исходном HTML (`curl https://chikchirik.kz/`) должны быть `meta name="description"`, `link rel="canonical"` и `application/ld+json`.

## 2. Отдавать файлы из этой папки из корня сайта
`robots.txt`, `sitemap.xml`, `favicon.ico`, `favicon.png`, `apple-touch-icon.png`, `og.jpg` — по адресам `https://chikchirik.kz/<имя файла>`.
Сейчас `/robots.txt` и `/sitemap.xml` отвечают 404 от Express (`Cannot GET /site/robots.txt`).

## 3. nginx (см. `nginx-seo.conf`)
- 301 с `www.chikchirik.kz` (http и https) на `https://chikchirik.kz` (сейчас https://www отдаёт 200 — дубль);
- 301 с `/index.html` на `/`;
- `Cache-Control: public, max-age=31536000, immutable` для `/media/*` (сейчас `max-age=0`);
- заголовки HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`; скрыть `X-Powered-By`.

## 4. Проверка после деплоя
```bash
curl -sI https://www.chikchirik.kz/ | grep -i location
curl -s https://chikchirik.kz/robots.txt
curl -s https://chikchirik.kz/ | grep -c 'application/ld+json'
```
Валидация разметки: https://search.google.com/test/rich-results
