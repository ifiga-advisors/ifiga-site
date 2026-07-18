import type { ReactElement } from "react"
import Home from "../pages/Home"
import About from "../pages/About"
import Team from "../pages/Team"
import Services from "../pages/Services"
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"
import FAQ from "../pages/FAQ"

// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for navigation + routing.
//
// We use React Router v7. This one array feeds BOTH:
//   • the <Routes> table in App.tsx, and
//   • the links rendered by the Navbar and Footer.
//
// To add a new tab/page:
//   1. Create the page component in src/pages/.
//   2. Add ONE entry to the array below with its path, label, element and
//      where it should appear (`nav`).
// Nothing else needs to change.
// ---------------------------------------------------------------------------

/** Where a route surfaces in the UI. */
export type NavPlacement =
  | "main" // shown as a main navbar link (and footer quick link)
  | "cta" // shown as the highlighted "Contact Us" button
  | "none" // routable, but not linked in the nav

export type AppRoute = {
  /** URL path, e.g. "/about". Use "/" for the home page. */
  path: string
  /** Human-readable label used for nav links. */
  label: string
  /** The page component to render for this path. */
  element: ReactElement
  /** Controls where (if anywhere) this route appears in the nav. */
  nav: NavPlacement
}

export const routes: AppRoute[] = [
  { path: "/", label: "Home", element: <Home />, nav: "main" },
  { path: "/about", label: "About", element: <About />, nav: "main" },
  { path: "/team", label: "Our Team", element: <Team />, nav: "main" },
  { path: "/services", label: "Services", element: <Services />, nav: "main" },
  { path: "/blog", label: "Blog", element: <Blog />, nav: "main" },
  { path: "/faq", label: "FAQ", element: <FAQ />, nav: "main" },
  { path: "/contact", label: "Contact Us", element: <Contact />, nav: "cta" },
]

/** Routes shown as main navbar links / footer quick links. */
export const mainNavRoutes = routes.filter((r) => r.nav === "main")

/** The single call-to-action route (the "Contact Us" button). */
export const ctaRoute = routes.find((r) => r.nav === "cta")
