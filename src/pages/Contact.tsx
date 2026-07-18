import { useState } from "react"
import type { FormEvent } from "react"
import { Mail } from "lucide-react"
import PageHero from "../components/layout/PageHero"
import Container from "../components/ui/Container"
import SectionHeading from "../components/ui/SectionHeading"
import Button from "../components/ui/Button"
import { WhatsappIcon } from "../components/icons"
import { company, whatsappUrl } from "../data/site"
import { pageHeaders } from "../data/content/labels"

const initialForm = {
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  phone: "",
  message: "",
}

// Google Maps embed for the office address (no API key required).
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  company.address,
)}&output=embed`

export default function Contact() {
  const [form, setForm] = useState(initialForm)

  const update = (field: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  // No backend: compose a prefilled email to the company address on submit.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = `Website enquiry from ${form.firstName} ${form.lastName}`.trim()
    const body = [
      `Name: ${form.firstName} ${form.lastName}`,
      `Company: ${form.companyName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      form.message,
    ].join("\n")
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <PageHero title={pageHeaders.contact.title} subtitle={pageHeaders.contact.subtitle} />

      {/* Intro + quick actions */}
      <section className="section">
        <Container>
          <p className="contact-intro">
            Interested in strengthening your institution's governance,
            sustainability, or financial performance? Have a question about our
            advisory services, or ready to start an engagement? Reach out — we
            respond promptly.
          </p>

          <div className="contact-quick">
            <a
              className="quick-action"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="quick-action__icon quick-action__icon--wa">
                <WhatsappIcon size={22} />
              </span>
              <span>
                <span className="quick-action__label">Chat on WhatsApp</span>
                <span className="quick-action__value">{company.phone}</span>
              </span>
            </a>

            <a className="quick-action" href={`mailto:${company.email}`}>
              <span className="quick-action__icon quick-action__icon--email">
                <Mail size={20} />
              </span>
              <span>
                <span className="quick-action__label">Email us</span>
                <span className="quick-action__value">{company.email}</span>
              </span>
            </a>
          </div>
        </Container>
      </section>

      {/* Form + map */}
      <section className="section section--alt">
        <Container>
          <div className="contact-grid">
            {/* Form */}
            <div>
              <SectionHeading title="Got a question?" />
              <p className="lead mt-4">
                Let us know if you have any questions and we will get back to you
                promptly.
              </p>

              <form className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label" htmlFor="firstName">
                      First Name <span className="form-required">(required)</span>
                    </label>
                    <input
                      id="firstName"
                      className="form-input"
                      required
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="lastName">
                      Last Name <span className="form-required">(required)</span>
                    </label>
                    <input
                      id="lastName"
                      className="form-input"
                      required
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="companyName">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    className="form-input"
                    value={form.companyName}
                    onChange={(e) => update("companyName", e.target.value)}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="email">
                    Email <span className="form-required">(required)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="phone">
                    Phone <span className="form-required">(required)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="form-input"
                    required
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="message">
                    Message <span className="form-required">(required)</span>
                  </label>
                  <textarea
                    id="message"
                    className="form-textarea"
                    required
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                  />
                </div>

                <Button type="submit" variant="primary" pill className="self-start">
                  Submit
                </Button>
              </form>
            </div>

            {/* Find us */}
            <div>
              <SectionHeading title="Find Us" />
              <address className="find-us__address">
                {company.address}
                <br />
                Registered in {company.country} · TIN: {company.tin}
              </address>
              <div className="map-embed">
                <iframe
                  title={`Map to ${company.name}`}
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
