# ChikChirik — Design System

**Chik-chirik (ChikChirik)** is a mobile app for finding creative talent fast — editors, graphic designers, motion artists, photographers, SMM and AI creators — in Kazakhstan (Almaty / Astana, Russian-language UI). Clients post a brief, performers respond, work is agreed in chat. Positioning line from the campaign posters: **«находи своих через ChikChirik»** — find your people.

## Sources given
Seven reference images, uploaded by the user (originals in `uploads/`, working copies in `assets/`):

| Reference | Copied to | What it gave us |
|---|---|---|
| App icon, blue squircle | `assets/app-icon-blue.png` | Icon treatment, brand blue gradient |
| App icon on a keycap render | `assets/app-icon-key.png` | 3D-object render style |
| Logo lockup (bird + wordmark) | `assets/logo-lockup.png` | Logo, exact blue **#0057FF** |
| iOS Home screen | `assets/screen-home-reference.png` | Layout, spacing, tab bar, cards, category rail |
| Poster — crowd on white | `assets/poster-crowd-light.png` | Poster typography, campaign copy |
| Poster — crowd on blue | `assets/poster-crowd-blue.png` | Blue-field treatment, wordmark in white |
| Social set (3 cards) | `assets/social-set.png` | Editorial post formats, chips over photos |

**No codebase, Figma file or font binaries were supplied.** Everything here is derived from those images plus programmatic colour sampling. Values marked *substitution* below need confirmation.

## Index
- `styles.css` — the single entry point consumers link. Imports only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`
- `guidelines/` — 16 specimen cards (colour, type, spacing, radius, elevation, gradients, motion, imagery, logo clear space)
- `components/` — see below
- `ui_kits/mobile-app/` — click-through recreation of the app (`index.html`)
- `assets/` — logo files, posters, product imagery, category renders
- `SKILL.md` — Agent-Skills entry point

## Components
Grouped by concern; each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, and one `@dsCard` HTML per directory.

- **core/** — `Button`, `IconButton`, `Chip`, `Badge`
- **cards/** — `Card`, `HeroBanner`, `ActionRow`, `TileButton`, `CategoryCard`
- **navigation/** — `TabBar`, `ScreenHeader`
- **forms/** — `SearchField`, `TextField`
- **data/** — `Avatar`, `ListRow`
- **brand/** — `Logo`

### Intentional additions
The only concrete source (one Home screenshot) defines Button, Card, HeroBanner, ActionRow, TileButton, CategoryCard, TabBar, ScreenHeader, Chip. These were added because the flows the product obviously needs cannot be built without them:
- `SearchField`, `TextField` — catalogue search and brief creation.
- `Avatar`, `ListRow` — chats and profiles (the "Чаты" tab exists in the reference).
- `Badge`, `IconButton` — statuses and header/media controls.
- `Logo` — wrapper so nobody redraws the mark.

## CONTENT FUNDAMENTALS
**Language.** Russian UI with Kazakh proper nouns (Qyzqaras, Astana) and Latin brand words left untranslated (SHOW LAB 2.0, product design, service). The brand name is always Latin: **ChikChirik**, never «Чик Чирик».

**Address.** Informal second person, «ты» — imperative and short: «Пригласи друзей», «Получи 1000 бонусов в свой профиль», «Оставь заявку в телеграм-боте», «Откликнуться». Never «Вы», never corporate «мы предлагаем».

**Casing.** Sentence case everywhere; no ALL-CAPS UI, no Title Case In Russian. Tags and skill lists are lowercase, comma-separated, and unglamorous: «дизайн, анимация, продакшн, видео, моушн, иллюстрации, съемка, фото, сценарий, smm-контент, таргетинг». Latin words inside Russian sentences stay lowercase (smm-контент).

**Length.** Card titles ≤ 4 words; sub-lines are one clause that states the payoff, not the mechanism («Получи 1000 бонусов в свой профиль», not «Реферальная программа»). Poster headlines break across lines by meaning, ragged, never justified.

**Tone.** Confident, streetwear-adjacent, zero corporate hedging; no exclamation marks, no hype adjectives («лучший», «уникальный»). It talks like a producer in a group chat: «находи своих», «блиц опросы креативных специалистов Казахстана», «полезные инструменты».

**Emoji.** None. Not in UI, not in posters, not in social. Personality comes from photography, the dotted bird and the serif wordmark.

**Numbers.** Money in tenge with a thin space and the ₸ sign («250 000 ₸»); bonuses in plain numerals («1000 бонусов»).

## VISUAL FOUNDATIONS
**Colour.** One saturated electric blue against white and grey — nothing else. `#0057FF` is the logo/primary; `#003CD3` is the deep poster field; `#0B3DA9` is the in-app accent used for active tab glyphs; `#E0E9FF` is the only tint (active tab pill, avatars, soft badges). Neutrals: white page, `#F5F5F5` card fill, `#EAEAEA` hairlines, near-black `#000`/`#292A2E` text, `#8E8E93` for sub-lines. Semantic green/amber/red exist for statuses only and never appear as fills larger than a badge. Max one blue fill per screen.

**Type.** Two families. A chunky soft serif (Cooper Black/Windsor character) carries the Latin wordmark and small editorial labels — «ChikChirik», «product design», «Instruments». A neutral grotesk carries every Cyrillic word, bold and tightly tracked for headlines, regular for body. *Substitution:* no font files were supplied, so `fonts.css` loads **Bitter 900** for display and **Golos Text** for the grotesk (Cyrillic-complete). Please send the real files.

**Spacing & layout.** 16px screen gutters, 12px between sibling cards, 16px card padding (20px for larger content cards). Horizontal rails bleed to the screen edge and crop the last card mid-way, signalling scroll. The tab bar floats: 16px inset from three edges, pill-shaped, white, hairline border plus a soft shadow. Content scrolls under it with ~120px bottom padding.

**Corners.** 6 / 10 / 16 / 20 / 28px. 16px is the default card. 28px for the hero carousel. Anything tappable that is not a card is a full pill. The app icon is a superellipse squircle (~22%).

**Backgrounds.** Flat white in the app; flat paper-white `#F2F1EF` or flat blue on posters. No gradients as decoration — the only gradients are (a) the bottom protection scrim under text on photography, (b) the radial blue glow behind 3D renders, (c) the subtle icon-surface gradient in the app-icon artwork. No textures, no patterns, no hand-drawn illustration.

**Imagery.** Studio-lit group portraits of real young creatives on seamless white or blue, full-length, styled streetwear — neutral-to-cool colour, natural contrast, no filters, no grain. Secondary imagery: photoreal 3D object renders (bird, mailbox, keycap, director's chair) in blue-and-white glassy plastic. Category art is either such a render or the real tool logo (Figma). Never stock-photo cliché, never illustration.

**Depth.** Essentially flat. Surfaces separate by tone. Shadow appears only on floating chrome (`--shadow-float`), bottom sheets (`--shadow-sheet`) and around 3D brand renders (`--shadow-brand-glow`). Cards have no border and no shadow; white-on-white cards get a 1px `#EAEAEA` hairline instead.

**Transparency & blur.** Rare. Chips over photography use `rgba(0,0,0,.55)` plus `--blur-chrome`; the modal scrim is 48% black. Never blur inside the content area.

**Motion.** Quick and unfussy: 140ms for state changes, 220ms for screen transitions and tab-pill movement, 360ms for sheets, all on `cubic-bezier(.2,.8,.2,1)`. Fades and slides only — no bounce, no spring overshoot, no parallax.

**States.** Hover (web surfaces only) darkens a fill one step (`--blue-500` → `--blue-600`) or moves grey `#F5F5F5` → `#EAEAEA`; text links go `--blue-600` → `--blue-700` with underline. Press is a 0.97 scale, no colour flash and no shadow change. Disabled is 40% opacity with no colour change. Focus is a 2px `--blue-500` ring. Selected chips and tabs invert to a solid or soft blue fill — selection is a fill, never a border.

## ICONOGRAPHY
The references contain no icon-font, sprite or SVG source, so the glyphs in the Home screenshot were read and matched by shape. Everything in this system uses **Lucide** (CDN, `stroke-width: 2`) as an explicit *substitution* — flagged for replacement once the real set is supplied.

Observed rules, preserved here:
- Simple geometric glyphs, no detail, no colour, no gradients; black in content, `--blue-700` when a tab is active.
- Tab-bar glyphs are **filled** silhouettes (house, chats, person); content glyphs are stroked outlines (folder, plus, arrow-up-right, chevron-right, sliders).
- Sizes: 16px inline, 20px default, 24px in cards and tab bar. Tap targets never smaller than 44px.
- Emoji are never used as icons; unicode symbols are never used as icons. The only decorative "icons" are photoreal 3D renders and real third-party logos (Figma, Telegram) which are kept in their own brand colours.
- Assets in `assets/`: `logo-bird.png` (+ white), `logo-wordmark.png` (+ blue, white), `logo-lockup.png`, `app-icon-blue.png`, `app-icon-key.png`, `cat-editor.png`, `cat-figma.png`, `cat-smm.png`, `hero-qyzqaras.png`, posters and the social set.

## Logo
The dotted-pixel bird flying up-right, and the serif «ChikChirik» wordmark under it. Bird alone for app icon, avatars, apparel and loading states; wordmark alone in the app header; the lockup for covers. Clear space ≥ half the bird's width. Colourways: blue on white, white on blue, white on photography. Never recolour, rotate, outline, add effects to, or redraw the bird — always use the files in `assets/`.

## Known gaps
- No font binaries (Bitter + Golos Text substituted).
- No icon source (Lucide substituted).
- Only one product screen supplied; Работа / Чаты / Профиль in the UI kit are extrapolations.
- No web/marketing surface supplied, so no website UI kit was built.
