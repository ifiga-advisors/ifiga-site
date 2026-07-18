import Container from "../ui/Container"

/** Reusable inner-page banner (title + optional subtitle). Styling in `.page-hero*`. */
export default function PageHero({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <section className="page-hero">
      <Container>
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </Container>
    </section>
  )
}
