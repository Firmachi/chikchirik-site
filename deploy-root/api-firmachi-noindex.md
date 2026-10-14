# Закрыть api.firmachi.kz от индексации

Google проиндексировал две страницы ChikChirik под доменом студии Firmachi:
- https://api.firmachi.kz/site/privacy.html — «Политика конфиденциальности | ChikChirik»
- https://api.firmachi.kz/site/payment.html — «Оплата и возврат | ChikChirik»

(короткие адреса `/privacy` и `/payment` редиректят на них 302). Те же страницы уже есть на `chikchirik.kz/site/…`.

api.firmachi.kz — тот же сервер, что chikchirik.kz (95.217.146.56, nginx → Express).

## Что сделать в nginx (server_name api.firmachi.kz)

```nginx
# API и служебные страницы не должны быть в поиске
add_header X-Robots-Tag "noindex, nofollow" always;
```

`always` — чтобы заголовок отдавался и на 3xx/4xx. После `nginx -t && systemctl reload nginx` проверить:

```bash
curl -sI https://api.firmachi.kz/site/privacy.html | grep -i x-robots-tag
```

Ожидается: `x-robots-tag: noindex, nofollow`.

## Чего НЕ делать
- **Не закрывать через robots.txt `Disallow: /`.** Тогда Google перестанет заходить на страницы, не увидит noindex, и они останутся в выдаче.
- **Не удалять сами страницы и короткие ссылки.** `/privacy` и `/payment` могут быть указаны в App Store / Google Play / у платёжного провайдера — они должны продолжать открываться. noindex на это не влияет.

## По желанию (лучше)
Перенаправить эти адреса на домен ChikChirik, чтобы ссылки из сторов вели на правильный бренд:

```nginx
location = /privacy            { return 301 https://chikchirik.kz/site/privacy.html; }
location = /payment            { return 301 https://chikchirik.kz/site/payment.html; }
location ^~ /site/             { return 301 https://chikchirik.kz$request_uri; }
```
Перед этим убедиться, что API-клиенты (приложение) не ходят на `/site/…` за чем-то ещё.

## Ускорить удаление из Google
После того как домен firmachi.kz подтверждён в Google Search Console (проверка через DNS покрывает поддомены): «Удаления» → «Новый запрос» → префикс `https://api.firmachi.kz/`. Скроет из выдачи за сутки на 6 месяцев; за это время Google увидит noindex и удалит страницы насовсем.
