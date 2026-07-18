import PageHero from "../components/layout/PageHero"
import Container from "../components/ui/Container"
import SectionHeading from "../components/ui/SectionHeading"
import { pageHeaders, sectionLabels } from "../data/content/labels"
import { services } from "../data/content/services"
import { valueProposition } from "../data/content/company"

export default function Services() {
  return (
    <>
      <PageHero
        title={pageHeaders.services.title}
        subtitle={pageHeaders.services.subtitle}
      />

      {/* Core services */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow={sectionLabels.services.eyebrow}
            title={sectionLabels.services.title}
          />
          <div className="services-grid">
            {services.map((service, index) => (
              <article key={service.title} className="service-card">
                <span className="service-card__num">{index + 1}</span>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__text">{service.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Value proposition */}
      <section className="section section--alt">
        <Container>
          <SectionHeading
            eyebrow={sectionLabels.valueProposition.eyebrow}
            title={sectionLabels.valueProposition.title}
          />
          <div className="values-grid">
            {valueProposition.map((pillar) => (
              <div key={pillar.title} className="card">
                <h3 className="value-card__title">{pillar.title}</h3>
                <p className="value-card__text">{pillar.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
