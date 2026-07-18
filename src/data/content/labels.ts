// ---------------------------------------------------------------------------
// UI text constants: page titles, section eyebrows/headings, and shared labels.
// Centralized so wording stays consistent and is easy to change in one place.
// (Navigation tab labels live in data/routes.tsx.)
// ---------------------------------------------------------------------------

/** Inner-page hero titles + subtitles. */
export const pageHeaders = {
  about: {
    title: "About IFIGA",
    subtitle: "Who we are, our vision, mission, and the values that guide us.",
  },
  team: {
    title: "Our Team",
    subtitle: "The people behind IFIGA's advisory expertise.",
  },
  services: {
    title: "Our Services",
    subtitle:
      "An integrated portfolio of finance, governance, and sustainability advisory.",
  },
  blog: {
    title: "Blog & Insights",
    subtitle: "Perspectives on sustainable finance, ESG, and governance.",
  },
  contact: {
    title: "Contact Us",
    subtitle: "Let's talk about your institution's goals.",
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Answers to common questions about our services.",
  },
} as const

/** Reusable section eyebrow + heading labels. */
export const sectionLabels = {
  overview: { eyebrow: "Who we are", title: "Company overview" },
  visionMission: { eyebrow: "Our direction", title: "Vision & mission" },
  coreValues: { eyebrow: "What guides us", title: "Core values" },
  targetClients: { eyebrow: "Who we serve", title: "Target clients" },
  services: { eyebrow: "What we do", title: "Core services" },
  valueProposition: { eyebrow: "Why IFIGA", title: "Our value proposition" },
} as const

/** Shared call-to-action wording. */
export const cta = {
  homeTitle: "Ready to strengthen your institution?",
  homeText:
    "Let's talk about how sustainable finance and strong governance can drive your growth.",
  button: "Get in touch",
  footerTitle: "Let's build resilient, sustainable institutions together.",
} as const
