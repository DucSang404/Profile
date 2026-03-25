import type { Project } from '../../types/profile'
import './ProjectsSection.scss'

interface ProjectsSectionProps {
  projects: Project[]
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="projects-section container section-shell" id="projects">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p>Hands-on projects focused on practical functionality and clean engineering practices.</p>
      </div>

      <div className="projects-section__grid">
        {projects.map((project) => (
          <article className="projects-section__card" key={project.name}>
            <h3>{project.name}</h3>
            <p className="projects-section__description">{project.description}</p>

            <ul className="projects-section__stack" aria-label={`${project.name} technology stack`}>
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <div className="projects-section__actions">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="projects-section__link">
                  GitHub
                </a>
              )}
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="projects-section__link projects-section__link--demo">
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
