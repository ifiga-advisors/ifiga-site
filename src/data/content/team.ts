// ---------------------------------------------------------------------------
// Team members. 📝 PLACEHOLDER CONTENT — replace with the real details for each
// person. Add photos to public/team/ and reference them by path. To add a
// member, copy an entry in the array below.
// ---------------------------------------------------------------------------

export type TeamMember = {
  /** First name. */
  firstName: string
  /** Middle name (optional). */
  middleName?: string
  /** Last name. */
  lastName: string
  /** Phone number (optional), e.g. "+250 788 681 816". */
  phone?: string
  /** Photo path under /public (e.g. "/team/nehemie.jpeg"). */
  photo: string
  /** Bold credential lines shown above the bio (certifications, licenses…). */
  credentials: string[]
  /** Bio paragraphs. */
  bio: string[]
}

/** Full name from the name parts (middle name included when present). */
export const fullName = (m: TeamMember) =>
  [m.firstName, m.middleName, m.lastName].filter(Boolean).join(" ")

export const team: TeamMember[] = [
  {
    firstName: "Nehemie",
    middleName: "",
    lastName: "Zimulinda",
    phone: "",
    photo: "/team/nehemie.jpeg",
    credentials: [
      "Independent External Auditor — MFIs, SACCOs & Cooperatives",
      "Expert in Microfinance & Social and Environmental Performance Management (SEPM)",
      "BPR Certified"
    ],
    bio: [
      "Nehemie is a specialist in microfinance and Social and Environmental Performance Management (SEPM), with over 17 years in Rwanda's financial sector. Since 2018 he has served as an independent consultant and external auditor for MFIs, SACCOs, and cooperatives — helping them strengthen governance, internal controls, and financial performance.",
      "He honed his expertise at Banque Populaire du Rwanda (BPR, part of Atlas Mara), holding senior roles including Branches Audit Manager, Headquarters Audit Manager, Branch Manager, and Chief Accountant.",
    ],
  },
]

