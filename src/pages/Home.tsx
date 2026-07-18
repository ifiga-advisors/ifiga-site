import { Leaf, Users, TrendingUp, ShieldCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Container from "../components/ui/Container"
import Button from "../components/ui/Button"
import SectionHeading from "../components/ui/SectionHeading"
import { company } from "../data/site"
import { cta } from "../data/content/labels"

type Pillar = { icon: LucideIcon; title: string; text: string }

const pillars: Pillar[] = [
  { icon: Leaf, title: "Sustainability", text: "Green finance and ESG at the core of every engagement." },
  { icon: Users, title: "Social Impact", text: "Measurable positive outcomes for people and communities." },
  { icon: TrendingUp, title: "Financial Growth", text: "Stronger performance and access to sustainable funding." },
  { icon: ShieldCheck, title: "Trust & Integrity", text: "The highest standards of ethics and accountability." },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <Container className="hero__inner">
          <div>
            <span className="hero__eyebrow">{company.fullName}</span>
            <h1 className="hero__title">{company.tagline}</h1>
            <p className="hero__text">
              A Rwandan advisory firm helping MFIs, cooperatives, SMEs, and
              development partners strengthen governance, embed sustainability,
              and achieve lasting impact.
            </p>
            <div className="hero__actions">
              <Button to="/services" variant="accent">Our Services</Button>
              <Button to="/contact" variant="outline-light">Contact Us</Button>
            </div>
          </div>
          <div className="hero__logo-wrap">
            <div className="hero__logo-card">
              <img src="/logo.png" alt={`${company.name} logo`} className="w-72" />
            </div>
          </div>
        </Container>
      </section>

      {/* Value pillars */}
      <section className="section">
        <Container>
          <SectionHeading eyebrow="Why IFIGA" title="What we stand for" center />
          <div className="feature-grid">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="card card--hover">
                <div className="feature-icon">
                  <pillar.icon size={24} />
                </div>
                <h3 className="card__title">{pillar.title}</h3>
                <p className="card__text">{pillar.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section section--alt">
        <Container>
          <div className="cta-band">
            <h2 className="section-heading">{cta.homeTitle}</h2>
            <p className="lead max-w-xl">{cta.homeText}</p>
            <Button to="/contact" variant="primary">{cta.button}</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
