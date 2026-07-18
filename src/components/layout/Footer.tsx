import { Phone, Mail, MapPin } from "lucide-react"
import { company } from "../../data/site"
import { socialLinks } from "../../data/socialLinks"
import { ctaRoute } from "../../data/routes"
import { cta } from "../../data/content/labels"
import Container from "../ui/Container"
import Button from "../ui/Button"

/**
 * Editorial footer: a large CTA line + pill button, hairline dividers, stacked
 * underlined contact links, a short info block, and inline social icons.
 * All content is data-driven; styling lives in the `.footer*` classes.
 */
export default function Footer() {
  const telHref = `tel:${company.phone.replace(/\s+/g, "")}`
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    company.address,
  )}`

  return (
    <footer className="site-footer">
      {/* Call to action */}
      <Container>
        <div className="footer-cta">
          <h2 className="footer-cta__title">{cta.footerTitle}</h2>
          {ctaRoute && (
            <Button to={ctaRoute.path} variant="outline-light" pill>
              {ctaRoute.label}
            </Button>
          )}
        </div>
      </Container>

      <div className="footer-divider" />

      {/* Contact · info · socials */}
      <Container>
        <div className="footer-main">
          <div className="footer-contact">
            <a className="footer-contact-item" href={telHref}>
              <span className="footer-contact-badge footer-contact-badge--navy">
                <Phone size={18} />
              </span>
              <span>{company.phone}</span>
            </a>
            <a className="footer-contact-item" href={`mailto:${company.email}`}>
              <span className="footer-contact-badge footer-contact-badge--green">
                <Mail size={18} />
              </span>
              <span>{company.email}</span>
            </a>
            <a
              className="footer-contact-item"
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="footer-contact-badge footer-contact-badge--navy">
                <MapPin size={18} />
              </span>
              <span>{company.address}</span>
            </a>
          </div>

          <div>
            <p className="footer-info__title">{company.fullName}</p>
            <p className="footer-info__text">
              Registered in {company.country} · Company Code/TIN: {company.tin}
            </p>
            <p className="footer-info__hours">
              We respond to all inquiries within 24 hours.
            </p>
            <p className="footer-info__hours">
              Open Monday – Friday 8:00am – 5:00pm
            </p>
          </div>

          <div className="footer-socials">
            {socialLinks.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                className="footer-social-link"
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="footer-divider" />

      {/* Legal / copyright */}
      <Container>
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="footer-legal">
            IFIGA Ltd. provides consultancy and advisory services in sustainable
            finance, Environmental, Social and Governance (ESG) reporting, and
            social and environmental performance management.
          </p>
        </div>
      </Container>
    </footer>
  )
}
