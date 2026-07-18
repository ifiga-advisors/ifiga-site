// ---------------------------------------------------------------------------
// FAQ content. Questions follow the plan in design.md; answers are drawn from
// the official company overview so nothing here is invented. Edit freely.
// ---------------------------------------------------------------------------

export type Faq = { question: string; answer: string }

export const faqs: Faq[] = [
  {
    question: "What services does IFIGA Ltd. offer?",
    answer:
      "IFIGA offers an integrated portfolio of advisory services: strategic and business planning, governance and policy support, independent Social and Environmental Performance Management (SEPM) audits, ESG assessments and reporting, sustainable finance advisory, training and capacity building, accounting and tax advisory, and research and analytical studies.",
  },
  {
    question: "Who are your typical clients?",
    answer:
      "We work with MFIs, SACCOs and cooperatives; small and medium-sized enterprises (SMEs); development partners, donor-funded programs and NGOs; and impact investors and funds seeking reliable local partners for due diligence and impact verification.",
  },
  {
    question: "What is an SEPM audit?",
    answer:
      "A Social and Environmental Performance Management (SEPM) audit is a rigorous, independent assessment of how an institution manages its social and environmental performance — including client protection, governance practices, and institutional impact. It provides credible, objective insights to improve performance and meet investor, donor, and regulatory expectations.",
  },
  {
    question: "Do you work outside Rwanda?",
    answer:
      "Yes. While IFIGA Ltd. is a Rwandan-registered company with deep local expertise, our vision is to build resilient, responsible, and sustainable institutions in Rwanda and beyond, applying internationally recognized standards.",
  },
  {
    question: "Do you provide training and capacity building?",
    answer:
      "Yes. We deliver tailored, practical training covering ESG standards (e.g., Cerise + SPTF, IFC), governance, financial management, credit operations, risk management, and institutional performance improvement.",
  },
  {
    question: "How do we start an engagement?",
    answer:
      "Reach out through our Contact page or WhatsApp. We begin by understanding your institution's needs, capacity, and strategic objectives, then tailor a practical, implementable scope of work.",
  },
]
