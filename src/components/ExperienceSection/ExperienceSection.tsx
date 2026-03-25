import type { ExperienceActivity } from '../../types/profile'
import './ExperienceSection.scss'

interface ExperienceSectionProps {
  activities: ExperienceActivity[]
}

function ExperienceSection({ activities }: ExperienceSectionProps) {
  return (
    <section className="experience-section container section-shell" id="experience">
      <div className="section-header">
        <h2>Experience & Activities</h2>
        <p>Internships, team projects, and practical activities relevant to a fresher profile.</p>
      </div>

      <div className="experience-section__timeline">
        {activities.map((activity) => (
          <article className="experience-section__item" key={`${activity.role}-${activity.period}`}>
            <div className="experience-section__meta">
              <h3>{activity.role}</h3>
              <p>{activity.organization}</p>
              <span>{activity.period}</span>
            </div>

            <div className="experience-section__content">
              <p>{activity.description}</p>
              <ul>
                {activity.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
