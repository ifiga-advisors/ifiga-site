import type { ComponentType, SVGProps } from "react"
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from "../components/icons"
import { socials, whatsappUrl } from "./site"

// ---------------------------------------------------------------------------
// Config for the social icon row (used in the footer).
// To add a social channel: add its handle to `socials` in site.ts, then add
// one entry here with the matching icon and hover colour.
// ---------------------------------------------------------------------------

export type SocialLink = {
  /** Accessible label, e.g. "IFIGA on LinkedIn". */
  label: string
  /** Destination URL. */
  href: string
  /** Icon component (from src/components/icons). */
  Icon: ComponentType<{ size?: number } & SVGProps<SVGSVGElement>>
  /** Tailwind hover classes for the icon button. */
  hoverClass: string
  /** Whether to open in a new tab. */
  external?: boolean
}

export const socialLinks: SocialLink[] = [
  {
    label: "IFIGA on Instagram",
    href: socials.instagram,
    Icon: InstagramIcon,
    hoverClass: "hover:bg-gold hover:text-navy",
  },
  {
    label: "IFIGA on LinkedIn",
    href: socials.linkedin,
    Icon: LinkedinIcon,
    hoverClass: "hover:bg-gold hover:text-navy",
    external: true,
  },
  {
    label: "Chat with IFIGA on WhatsApp",
    href: whatsappUrl,
    Icon: WhatsappIcon,
    hoverClass: "hover:bg-green hover:text-white",
    external: true,
  },
]
