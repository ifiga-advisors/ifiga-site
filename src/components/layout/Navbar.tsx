import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { company } from "../../data/site"
import { mainNavRoutes, ctaRoute } from "../../data/routes"
import Container from "../ui/Container"
import Button from "../ui/Button"
import ThemeToggle from "../ui/ThemeToggle"

/**
 * Sticky top navigation. Links are generated from the shared `routes` array,
 * so tabs stay in sync with the router automatically. Styling lives in the
 * `.navbar*` / `.nav*` classes.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add a subtle shadow once the page is scrolled past the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // NavLink adds `is-active` for the current route.
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link${isActive ? " is-active" : ""}`

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <Container className="navbar__inner">
        <Link to="/" className="navbar__brand" aria-label={`${company.name} — home`}>
          <img src="/logo-mark.png" alt="" className="navbar__logo-mark" />
          <img src="/logo-wordmark.png" alt={`${company.name} logo`} className="navbar__logo-wordmark" />
        </Link>

        {/* Desktop navigation */}
        <nav className="nav">
          {mainNavRoutes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={navLinkClass}
              end={route.path === "/"}
            >
              {route.label}
            </NavLink>
          ))}
          <ThemeToggle />
          {ctaRoute && (
            <Button to={ctaRoute.path} variant="outline" size="sm" pill>
              {ctaRoute.label}
            </Button>
          )}
        </nav>

        {/* Mobile: theme toggle + menu button */}
        <div className="navbar__mobile">
          <ThemeToggle />
          <button
            className="icon-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile navigation drawer */}
      {menuOpen && (
        <nav className="mobile-menu">
          <Container className="mobile-menu__inner">
            {mainNavRoutes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                end={route.path === "/"}
                onClick={() => setMenuOpen(false)}
                className="mobile-link"
              >
                {route.label}
              </NavLink>
            ))}
            {ctaRoute && (
              <Button to={ctaRoute.path} variant="primary" size="sm" block className="mt-2">
                {ctaRoute.label}
              </Button>
            )}
          </Container>
        </nav>
      )}
    </header>
  )
}
