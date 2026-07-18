import PageHero from "../components/layout/PageHero"
import Container from "../components/ui/Container"
import SectionHeading from "../components/ui/SectionHeading"
import { pageHeaders, sectionLabels } from "../data/content/labels"
import {
  overview,
  vision,
  mission,
  coreValues,
  targetClients,
} from "../data/content/company"

export default function About() {
  return (
    <>
      <PageHero title={pageHeaders.about.title} subtitle={pageHeaders.about.subtitle} />

      {/* Company overview */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow={sectionLabels.overview.eyebrow}
            title={sectionLabels.overview.title}
          />
          <p className="lead mt-6 max-w-3xl">{overview}</p>
        </Container>
      </section>

      {/* Vision & mission */}
      <section className="section section--alt">
        <Container>
          <SectionHeading
            eyebrow={sectionLabels.visionMission.eyebrow}
            title={sectionLabels.visionMission.title}
          />
          <div className="vm-grid">
            <div className="vm-card">
              <span className="vm-card__label">Vision</span>
              <p className="vm-card__text">{vision}</p>
            </div>
            <div className="vm-card">
              <span className="vm-card__label">Mission</span>
              <p className="vm-card__text">{mission}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core values */}
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow={sectionLabels.coreValues.eyebrow}
            title={sectionLabels.coreValues.title}
          />
          <div className="values-grid">
            {coreValues.map((value) => (
              <div key={value.title} className="card">
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__text">{value.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Target clients */}
      <section className="section section--alt">
        <Container>
          <SectionHeading
            eyebrow={sectionLabels.targetClients.eyebrow}
            title={sectionLabels.targetClients.title}
          />
          <div className="client-list">
            {targetClients.map((client) => (
              <div key={client.title} className="card">
                <h3 className="value-card__title">{client.title}</h3>
                <p className="value-card__text">{client.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
