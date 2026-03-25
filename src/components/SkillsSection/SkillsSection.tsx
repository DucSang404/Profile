import type { SkillCategory } from '../../types/profile'
import './SkillsSection.scss'

interface SkillsSectionProps {
  categories: SkillCategory[]
}

function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <section className="skills-section container section-shell" id="skills">
      <div className="section-header">
        <h2>Technical Skills</h2>
        <p>Current toolkit across frontend, backend, database, and engineering workflow.</p>
      </div>

      <div className="skills-section__grid">
        {categories.map((category) => (
          <article className="skills-section__card" key={category.category}>
            <h3>{category.category}</h3>
            <div className="skills-section__chips">
              {category.skills.map((skill) => (
                <span className="pill skills-section__chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
