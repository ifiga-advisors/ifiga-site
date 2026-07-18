/** Section eyebrow + heading with a gold underline. Styling in `.section-heading*`. */
export default function SectionHeading({
  eyebrow,
  title,
  center = false,
}: {
  eyebrow?: string
  title: string
  center?: boolean
}) {
  return (
    <div className={center ? "section-heading--center" : ""}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-heading">{title}</h2>
      <div className="section-heading__rule" />
    </div>
  )
}
