# IFIGA Ltd. — Website

Marketing website for **Iveris Finance and Governance Advisors (IFIGA) Ltd.**, a
Rwandan finance, governance, and ESG advisory firm.

_Driving Sustainable Finance. Creating Lasting Impact._

## Tech stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** with semantic CSS classes (styling lives in `src/styles/components.css`, not inline)
- **React Router v7** for routing
- **lucide-react** for UI icons
- Font: **Source Sans Pro** (Google Fonts)

## Getting started

```bash
npm install
npm run dev        # start the dev server (usually http://localhost:5173)
```

> If you add a new `@import`ed CSS file, restart `npm run dev` — Vite doesn't always
> hot-reload a newly added import.

Other scripts:

```bash
npm run build      # type-check (tsc) + production build → dist/
npm run preview    # preview the production build
npm run lint       # oxlint
```

## Project structure (quick map)

```
public/            static assets (logos, stamp, team photos)
src/
├── main.tsx       entry (wraps <App> in <BrowserRouter>)
├── App.tsx        layout shell + routes (generated from data/routes.tsx)
├── index.css      Tailwind import, brand tokens (@theme), base styles, dark mode
├── styles/        components.css — ALL component styling (semantic classes)
├── components/    layout/ · ui/ · icons/
├── data/          content & config (edit here, not in components)
│   ├── site.ts        company info, contact, socials
│   ├── routes.tsx     single source of truth for tabs + router
│   ├── socialLinks.ts footer social row
│   └── content/       company, services, faq, team, labels
└── pages/         Home, About, Team, Services, Blog, Contact, FAQ
```

## Where to make changes

| I want to… | Edit |
|------------|------|
| Add / reorder a nav tab or page | `src/data/routes.tsx` |
| Change company name, contact, TIN | `src/data/site.ts` |
| Update social / WhatsApp links | `src/data/site.ts` + `src/data/socialLinks.ts` |
| Edit About / Services / FAQ copy | `src/data/content/` |
| Add / update a team member | `src/data/content/team.ts` (+ photo in `public/team/`) |
| Change section titles / page headings | `src/data/content/labels.ts` |
| Adjust styling | `src/styles/components.css` |
| Change brand colors / fonts | `src/index.css` (`@theme`) |

**Convention:** components hold markup + class names only. Copy/links live in `src/data/`,
styling lives in `src/styles/components.css`.

## Full documentation

See [`design.md`](./design.md) for the complete design system, brand guidelines,
component reference, and rationale behind key decisions.

## Deployment

Static build (`npm run build` → `dist/`). Deploy to **Vercel** or **Netlify** by
connecting the repo; no server required.
