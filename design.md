# IFIGA Ltd. — Engineering Guide

Marketing site for Iveris Finance and Governance Advisors (IFIGA) Ltd. Seven routes:
Home, About, Our Team, Services, Blog, FAQ, Contact. Responsive, light/dark, static SPA.

## Stack

Vite · React 19 · TypeScript · Tailwind CSS v4 · React Router v7 · lucide-react.
Font: Source Sans Pro (Google Fonts, family name "Source Sans 3").

```bash
npm install
npm run dev       # dev server (~localhost:5173)
npm run build     # tsc + vite build -> dist/
npm run preview   # serve dist/
npm run lint      # oxlint
```

Adding a new `@import`ed CSS file requires a dev-server restart (Vite won't hot-reload it).

## Architecture

Strict separation of concerns:

- **Components** (`src/components`, `src/pages`) — markup + class names only. No copy, no config, no inline styles.
- **Content/config** — `src/data/`.
- **Styling** — `src/styles/components.css` (semantic classes) + `src/index.css` (tokens/base).

## Directory map

```
public/                logos, stamp, team photos (served at /)
src/
  main.tsx             entry; <App> in <BrowserRouter>
  App.tsx              layout shell; maps data/routes.tsx -> <Route>s
  index.css            @import tailwind + components.css; @theme tokens; base; dark-mode variant
  styles/components.css all component styles (@layer components + @apply)
  components/
    layout/            Navbar, Footer, PageHero, ScrollToTop
    ui/                Button, Container, SectionHeading, ThemeToggle
    icons/             InstagramIcon, LinkedinIcon, WhatsappIcon (+ index.ts barrel)
  data/
    site.ts            company info, contact, socials, whatsappUrl, footerServiceHighlights
    routes.tsx         single source for tabs + router
    socialLinks.ts     footer social row config
    content/
      company.ts       overview, vision, mission, coreValues, targetClients, valueProposition
      services.ts      9 core services
      faq.ts           questions + answers
      team.ts          team members + fullName() helper
      labels.ts        pageHeaders, sectionLabels, cta strings
  pages/               Home, About, Team, Services, Blog, Contact, FAQ
```

## Data layer

| File | Exports |
|------|---------|
| `data/site.ts` | `company`, `socials`, `whatsappUrl`, `footerServiceHighlights` |
| `data/routes.tsx` | `routes`, `mainNavRoutes`, `ctaRoute`, types `AppRoute`/`NavPlacement` |
| `data/socialLinks.ts` | `socialLinks` (`{label, href, Icon, hoverClass, external}`) |
| `data/content/company.ts` | `overview`, `vision`, `mission`, `coreValues`, `targetClients`, `valueProposition` |
| `data/content/services.ts` | `services` (`{title, description}`) |
| `data/content/faq.ts` | `faqs` (`{question, answer}`) |
| `data/content/team.ts` | `team`, `fullName()`, type `TeamMember` |
| `data/content/labels.ts` | `pageHeaders`, `sectionLabels`, `cta` |

## Routing

`data/routes.tsx` is the single source of truth. One `routes` array feeds both `App.tsx`
(the `<Route>` table) and the nav (Navbar + Footer).

```ts
{ path: "/careers", label: "Careers", element: <Careers />, nav: "main" }
```

`nav`: `"main"` = navbar + footer link · `"cta"` = the Contact Us button · `"none"` = routable, unlinked.
Derived: `mainNavRoutes` (nav === "main"), `ctaRoute` (nav === "cta").

## Styling

Tailwind v4, but no inline utility soup and no `style={{}}`. Component styles are named
classes in `src/styles/components.css` under `@layer components`, built with `@apply`
(e.g. `.btn`, `.card`, `.section`, `.faq-item`, `.footer-cta`, `.team-member`, `.navbar`,
`.form-input`). JSX references the class names. `components.css` is imported at the top of
`index.css`, immediately after `@import "tailwindcss"`, so `@apply` resolves the theme.

`src/index.css`:
- `@theme { ... }` — color + font + shadow tokens (become utilities: `bg-navy`, `text-gold`, ...).
- `@custom-variant dark (&:where(.dark, .dark *))` — class-based dark mode.
- `@layer base { ... }` — body/heading defaults + dark overrides. Kept in `@layer base` so
  Tailwind utilities (e.g. `text-white`) override element rules like `h1 { color: navy }`.

Layout width: `.site-container` = centered, `max-w-[1200px]`, responsive padding. Single knob.

Dark mode: `ui/ThemeToggle.tsx` toggles `.dark` on `<html>`, persists to `localStorage`,
respects OS preference. `index.html` has a pre-paint script to avoid a flash.

### Tokens

| Token | Hex | Role |
|-------|-----|------|
| `navy` | `#16305F` | primary |
| `navy-deep` | `#112B5C` | hover / dark surfaces / footer |
| `green` | `#3C8034` | sustainability accent |
| `green-soft` | `#EAF3E8` | soft bg |
| `gold` | `#C6A24A` | premium accent |
| `gold-soft` | `#F5EEDA` | soft bg |
| `ink` | `#1A2233` | body text |
| `slate` | `#5B6472` | secondary text |
| `mist` | `#F4F6FA` | alt section bg |
| `brand-border` | `#E3E7EE` | borders/dividers |

Font: Source Sans Pro for headings and body (`--font-heading`, `--font-body`).

## Components

`layout/`
- **Navbar** — sticky; emblem (`logo-mark.png`) + wordmark (`logo-wordmark.png`) lockup; links from `mainNavRoutes`; CTA from `ctaRoute`; theme toggle; mobile drawer. Dark mode wraps the logo in a white pill.
- **Footer** — CTA line + pill button; hairline dividers; contact items with colored circular icon badges (navy phone/location, green email); company info + response/hours lines; social icons; copyright/legal.
- **PageHero** — inner-page banner; navy gradient, `h1` + subtitle.
- **ScrollToTop** — scroll reset on route change.

`ui/`
- **Button** — Link / anchor / button by props. `variant`: primary | accent | outline | outline-light | ghost. Options: `size`, `pill`, `block`, `external`.
- **Container** — `.site-container` wrapper.
- **SectionHeading** — eyebrow + heading + gold rule; `center` option.
- **ThemeToggle** — light/dark switch.

`icons/` — brand marks lucide no longer ships; `{size}` + SVG props, color via `currentColor`.

## Pages

| Page | Content | Notes |
|------|---------|-------|
| Home | inline pillars + `labels.cta` | hero, 4 value pillars, CTA band |
| About | `company.ts`, `labels.ts` | overview, vision/mission, core values, target clients |
| Team | `content/team.ts` | large `h1`, alternating photo, credentials, bio, hairline between members |
| Services | `services.ts`, `company.valueProposition` | 9 numbered cards + value proposition |
| FAQ | `content/faq.ts` | accordion, +/x toggle, hairline dividers |
| Contact | `site.ts`, `labels.ts` | WhatsApp/email quick actions; form -> prefilled mailto (no backend); Google Map embed |
| Blog | — | placeholder |

## Assets (`public/`)

| File | Use |
|------|-----|
| `logo-mark.png` | header emblem |
| `logo-wordmark.png` | header wordmark |
| `logo.png` | full logo (footer) |
| `stamp.png` | official seal |
| `team/*` | team photos |

## Common tasks

| Task | Edit |
|------|------|
| Add/reorder tab or page | `data/routes.tsx` (+ new file in `pages/`) |
| Company/contact/TIN | `data/site.ts` |
| Social/WhatsApp links | `data/site.ts`, `data/socialLinks.ts` |
| About/Services/FAQ copy | `data/content/` |
| Team member (+ photo in `public/team/`) | `data/content/team.ts` |
| Section titles / page headings | `data/content/labels.ts` |
| Styling | `styles/components.css` |
| Colors / fonts | `index.css` (`@theme`) |
| Layout width | `styles/components.css` -> `.site-container` |

`TeamMember` shape: `firstName`, `middleName?`, `lastName`, `phone?`, `photo`,
`credentials: string[]`, `bio: string[]`. Empty `middleName`/`phone`/`credentials` are
hidden. Name renders `firstName [middleName] lastName`; members alternate photo side.

## Conventions

- One `h1` per page (PageHero or page hero); member names are `h2`.
- All images have `alt`; decorative logo mark uses empty `alt`.
- External links: `target="_blank" rel="noopener noreferrer"`.
- Every change must pass `npm run build` (type-check + build).

## Open items

- Contact form: currently `mailto:`. For inbox delivery, wire a Formspree endpoint in `Contact.tsx`.
- `socials.instagram` is a placeholder (`#`).
- Team: add remaining members/photos in `content/team.ts`.
- Blog: no content model yet.
- Map: uses text address; can switch to exact coordinates.
