import type { ReactNode } from "react"

/** Centered max-width page wrapper. Styling lives in `.site-container`. */
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`site-container ${className}`}>{children}</div>
}
