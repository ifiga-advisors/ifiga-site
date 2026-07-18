import { Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import ScrollToTop from "./components/layout/ScrollToTop"
import { routes } from "./data/routes"

/**
 * App shell: fixed navbar + footer around the routed page content.
 * Routes are generated from the single `routes` array (see data/routes.tsx),
 * so adding a page never requires touching this file.
 */
export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
