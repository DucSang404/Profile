import type { EducationItem } from '../../types/profile'
import './EducationSection.scss'

interface EducationSectionProps {
  educationItems: EducationItem[]
}

function EducationSection({ educationItems }: EducationSectionProps) {
  return (
    <section className="education-section container section-shell" id="education">
      <div className="section-header">
        <h2>Education</h2>
        <p>Academic foundation and milestones that shape my development journey.</p>
      </div>

      <div className="education-section__list">
        {educationItems.map((item) => (
          <article className="education-section__card" key={`${item.institution}-${item.period}`}>
            <h3>{item.institution}</h3>
            <p className="education-section__degree">{item.degree}</p>
            <p className="education-section__period">{item.period}</p>
            {item.gpa && <p className="education-section__gpa">GPA: {item.gpa}</p>}

            {item.achievements && item.achievements.length > 0 && (
              <ul>
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default EducationSection
