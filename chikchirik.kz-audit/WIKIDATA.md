# Запись ChikChirik в Wikidata

Подготовлено 20.10.2026. Все Q- и P-идентификаторы проверены через API Wikidata. Записи «ChikChirik» в Wikidata пока нет.

## Перед созданием: требования Wikidata
Wikidata принимает объект, если его можно описать по **серьёзным и общедоступным источникам** (критерий значимости №2). Карточки в App Store и Google Play и официальный сайт подтверждают сам факт существования приложения — этого обычно хватает для записи о приложении, но записи без независимых источников иногда удаляют. Как только появится публикация о ChikChirik в СМИ или каталоге (Astana Hub, профильные медиа), добавьте её как источник — запись станет устойчивой.

## Что будет в записи

| Поле | Значение |
|---|---|
| Метка (ru / en / kk) | ChikChirik |
| Описание (ru) | казахстанское мобильное приложение-маркетплейс для поиска креативных специалистов |
| Описание (en) | Kazakhstan mobile marketplace app for hiring creative professionals |
| Описание (kk) | креативті мамандарды табуға арналған қазақстандық мобильді маркетплейс-қосымша |
| Также известен как | не заполняем (бренд пишется только «ChikChirik») |
| P31 это частный случай | Q620615 мобильное приложение; Q5412217 фриланс-маркетплейс |
| P495 страна происхождения | Q232 Казахстан |
| P306 операционная система | Q48493 iOS; Q94 Android |
| P407 язык | Q7737 русский |
| P856 официальный сайт | https://chikchirik.kz/ |
| P3861 App Store app ID | 6802269556 |
| P3418 Google Play ID | com.chikchirik.chikchirikApp |
| P2003 Instagram | chikchirik |
| P3789 Telegram | chikchirik |
| P571 дата создания | **заполнить**: дата выхода приложения (видна в App Store Connect / Google Play Console) |

Разработчик (P178) не указываем: для студии Firmachi записи в Wikidata нет, а создавать её без независимых источников рискованно.

## Как создать — быстрый способ (QuickStatements, ~5 минут)
1. Зарегистрируйтесь или войдите на wikidata.org (это ваш аккаунт; пароль никому не передавайте).
2. Откройте https://quickstatements.toolforge.org/ → «Log in» (вход через Wikidata) → «New batch».
3. Вставьте блок ниже целиком, нажмите «Import V1 commands», затем «Run».

```
CREATE
LAST	Lru	"ChikChirik"
LAST	Len	"ChikChirik"
LAST	Lkk	"ChikChirik"
LAST	Dru	"казахстанское мобильное приложение-маркетплейс для поиска креативных специалистов"
LAST	Den	"Kazakhstan mobile marketplace app for hiring creative professionals"
LAST	Dkk	"креативті мамандарды табуға арналған қазақстандық мобильді маркетплейс-қосымша"
LAST	P31	Q620615	S854	"https://chikchirik.kz/"
LAST	P31	Q5412217	S854	"https://chikchirik.kz/"
LAST	P495	Q232	S854	"https://chikchirik.kz/"
LAST	P306	Q48493	S854	"https://apps.apple.com/kz/app/chik-chirik/id6802269556"
LAST	P306	Q94	S854	"https://play.google.com/store/apps/details?id=com.chikchirik.chikchirikApp"
LAST	P407	Q7737	S854	"https://chikchirik.kz/"
LAST	P856	"https://chikchirik.kz/"
LAST	P3861	"6802269556"
LAST	P3418	"com.chikchirik.chikchirikApp"
LAST	P2003	"chikchirik"
LAST	P3789	"chikchirik"
```
Колонки разделены табуляцией — копируйте блок как есть.

4. QuickStatements покажет номер новой записи вида **Q1234567**. Пришлите его — я добавлю ссылку `https://www.wikidata.org/wiki/Q…` в разметку сайта (`sameAs`), это и связывает сайт с записью.
5. Добавьте дату создания (P571) вручную на странице записи: «+ добавить утверждение» → «дата создания».

## Как создать — вручную
wikidata.org → слева «Создать новый элемент» → метка «ChikChirik», описание (см. таблицу) → «Создать» → по одному добавить утверждения из таблицы. Метки и описания на других языках — в блоке «Во всех языках».

## После создания
- Ссылка на запись → в `sameAs` организации на chikchirik.kz (сделаю я).
- Когда появится независимая публикация о ChikChirik — добавить её как источник (S854) к утверждению P31.
- Название в App Store сейчас «Chik-chirik». Редакторы Wikidata иногда добавляют название из стора как синоним; если появится — это не ошибка записи, а повод выровнять название в App Store Connect.
