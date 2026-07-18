// ---------------------------------------------------------------------------
// Site-wide constants: company info, contact details, social links.
// This is the SINGLE place to edit these values — every component reads from
// here, so one change propagates across the whole site.
//
// Navigation tabs & routes live in `routes.tsx` (one array drives both the
// router and the navbar). Social link rendering config lives in `socialLinks.ts`.
// ---------------------------------------------------------------------------

/** Legal identity and primary contact details. */
export const company = {
  name: "IFIGA Ltd.",
  fullName: "Iveris Finance and Governance Advisors (IFIGA) Ltd.",
  tagline: "Driving Sustainable Finance. Creating Lasting Impact.",
  tin: "156282612",
  country: "Rwanda",
  email: "ifiga.advisors@gmail.com",
  phone: "+25078681816",
  address: "Kimironko - Gasabo - Kigali - Rwanda",
}

/**
 * Social / messaging handles. Use "#" as a placeholder until a real URL is
 * known. WhatsApp uses the raw international number (digits only, no "+" or
 * spaces) so it can be turned into a wa.me deep link.
 */
export const socials = {
  instagram: "#", // 📝 e.g. https://instagram.com/ifiga
  linkedin:
    "https://www.linkedin.com/company/iveris-finance-and-governance-advisors-ifiga-ltd",
  whatsappNumber: "250788681816",
}

/** Prebuilt WhatsApp deep link (opens a chat with the number above). */
export const whatsappUrl = `https://wa.me/${socials.whatsappNumber}`

/**
 * Short list of headline services shown in the footer. The full catalogue
 * lives on the Services page; add/remove entries here to change the footer.
 */
export const footerServiceHighlights: string[] = [
  "Strategic & business planning",
  "Governance & policy support",
  "SEPM audits",
  "ESG assessments & reporting",
  "Sustainable finance advisory",
]
