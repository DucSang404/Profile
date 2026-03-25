import './AboutSection.scss'

interface AboutSectionProps {
  paragraphs: string[]
}

function AboutSection({ paragraphs }: AboutSectionProps) {
  return (
    <section className="about-section container section-shell" id="about">
      <div className="section-header">
        <h2>About Me</h2>
        <p>Quick overview of who I am and what I am currently focused on.</p>
      </div>

      <div className="about-section__content">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
