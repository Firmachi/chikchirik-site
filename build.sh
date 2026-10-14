#!/bin/sh
# Собирает сайт для Vercel в папку dist/.
# Исходник страницы — "ChikChirik Site -standalone src-.dc.html" (его правим, он становится index.html).
set -e
rm -rf dist
mkdir -p dist
cp "ChikChirik Site -standalone src-.dc.html" dist/index.html
cp support.js dist/
cp -R assets _ds dist/
cp deploy-root/robots.txt deploy-root/sitemap.xml deploy-root/favicon.ico \
   deploy-root/favicon.png deploy-root/apple-touch-icon.png deploy-root/og.jpg dist/
echo "Готово: dist/"
