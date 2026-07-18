import { useState } from "react"
import { Plus } from "lucide-react"
import PageHero from "../components/layout/PageHero"
import Container from "../components/ui/Container"
import { pageHeaders } from "../data/content/labels"
import { faqs } from "../data/content/faq"

export default function FAQ() {
  // Index of the currently open item, or null when all are collapsed.
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index))

  return (
    <>
      <PageHero title={pageHeaders.faq.title} subtitle={pageHeaders.faq.subtitle} />

      <section className="section">
        <Container>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div key={faq.question} className="faq-item">
                  <button
                    className="faq-question"
                    aria-expanded={isOpen}
                    onClick={() => toggle(index)}
                  >
                    {faq.question}
                    <Plus
                      size={22}
                      className={`faq-icon${isOpen ? " faq-icon--open" : ""}`}
                    />
                  </button>
                  <div className={`faq-answer${isOpen ? " faq-answer--open" : ""}`}>
                    <p className="faq-answer__inner">{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
