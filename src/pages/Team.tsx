import { Phone } from "lucide-react"
import PageHero from "../components/layout/PageHero"
import Container from "../components/ui/Container"
import { pageHeaders } from "../data/content/labels"
import { team, fullName } from "../data/content/team"
import { assest } from "../lib/asset"

export default function Team() {
  return (
    <>
      <PageHero title="Meet Our Team" subtitle={pageHeaders.team.subtitle} />

      <section className="section">
        <Container>
          {team.map((member, index) => {
            const name = fullName(member)
            return (
              <article
                key={name}
                className={`team-member${index % 2 === 1 ? " team-member--photo-left" : ""}`}
              >
                {/* Text */}
                <div>
                  <h2 className="team-member__name">{name}</h2>
                  {member.phone && (
                    <a className="team-member__phone" href={`tel:${member.phone.replace(/\s+/g, "")}`}>
                      <Phone size={16} />
                      {member.phone}
                    </a>
                  )}

                  {member.credentials.length > 0 && (
                    <div className="team-member__creds">
                      {member.credentials.map((cred) => (
                        <p key={cred} className="team-member__cred">
                          {cred}
                        </p>
                      ))}
                    </div>
                  )}

                  <div className="team-member__bio">
                    {member.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Photo */}
                <div className="team-member__photo">
                  <img src={assest(member.photo)} alt={name} loading="lazy" />
                </div>
              </article>
            )
          })}
        </Container>
      </section>
    </>
  )
}

