import PageHero from "../components/layout/PageHero"
import Container from "../components/ui/Container"
import { pageHeaders } from "../data/content/labels"

export default function Blog() {
  return (
    <>
      <PageHero title={pageHeaders.blog.title} subtitle={pageHeaders.blog.subtitle} />
      <section className="section">
        <Container>
          <p className="lead">This section is coming soon — we'll build it out next.</p>
        </Container>
      </section>
    </>
  )
}
