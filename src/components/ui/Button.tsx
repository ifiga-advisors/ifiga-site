import { Link } from "react-router-dom"
import type { ReactNode } from "react"

type Variant = "primary" | "accent" | "outline" | "outline-light" | "ghost"
type Size = "sm" | "md"

/** Maps a variant/size to the CSS classes defined in styles/components.css. */
const variantClass: Record<Variant, string> = {
  primary: "btn--primary",
  accent: "btn--accent",
  outline: "btn--outline",
  "outline-light": "btn--outline-light",
  ghost: "btn--ghost",
}

type Props = {
  children: ReactNode
  /** Internal route (renders a react-router Link). */
  to?: string
  /** External URL (renders an anchor). */
  href?: string
  variant?: Variant
  size?: Size
  /** Render as a fully rounded pill. */
  pill?: boolean
  block?: boolean
  external?: boolean
  className?: string
  type?: "button" | "submit"
}

/**
 * Shared button. Renders as a Link, an anchor, or a <button> depending on the
 * props passed. Visual styling comes entirely from the `.btn*` classes.
 */
export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  pill = false,
  block = false,
  external = false,
  className = "",
  type = "button",
}: Props) {
  const classes = [
    "btn",
    variantClass[variant],
    size === "sm" ? "btn--sm" : "",
    pill ? "btn--pill" : "",
    block ? "btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={classes}>
      {children}
    </button>
  )
}
