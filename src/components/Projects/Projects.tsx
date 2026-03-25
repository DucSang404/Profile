import { motion } from 'framer-motion'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import { SiCss, SiFirebase, SiFramer, SiMongodb, SiNodedotjs, SiReact, SiTypescript } from 'react-icons/si'
import type { ProjectItem } from '../../types/landing'
import './Projects.scss'

interface ProjectsProps {
    projects: ProjectItem[]
}

function techIcon(tech: string) {
    const key = tech.toLowerCase()

    if (key.includes('react')) return <SiReact className="projects__tech-icon projects__tech-icon--react" />
    if (key.includes('typescript')) {
        return <SiTypescript className="projects__tech-icon projects__tech-icon--typescript" />
    }
    if (key.includes('scss') || key.includes('css')) {
        return <SiCss className="projects__tech-icon projects__tech-icon--css" />
    }
    if (key.includes('node')) return <SiNodedotjs className="projects__tech-icon projects__tech-icon--node" />
    if (key.includes('mongo')) return <SiMongodb className="projects__tech-icon projects__tech-icon--mongo" />
    if (key.includes('firebase')) {
        return <SiFirebase className="projects__tech-icon projects__tech-icon--firebase" />
    }
    if (key.includes('framer')) return <SiFramer className="projects__tech-icon projects__tech-icon--framer" />

    return <span className="projects__tech-icon projects__tech-icon--dot" aria-hidden="true" />
}

function Projects({ projects }: ProjectsProps) {
    return (
        <section className="projects section" id="projects">
            <div className="container section__inner">
                <div className="section__heading">
                    <p className="section__eyebrow">Build Logs</p>
                    <h2>Featured Projects</h2>
                </div>

                <div className="projects__grid">
                    {projects.map((project, index) => (
                        <motion.article
                            className="projects__card"
                            key={project.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="projects__meta">
                                <span>0{index + 1}</span>
                                <span className="projects__status">online</span>
                            </div>

                            <h3>{project.name}</h3>
                            <p>{project.summary}</p>

                            <ul className="projects__stack" aria-label={`${project.name} technology stack`}>
                                {project.stack.map((tech) => (
                                    <li key={tech}>
                                        {techIcon(tech)}
                                        <span>{tech}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="projects__actions">
                                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                    <FaGithub /> Source
                                </a>
                                {project.liveUrl ? (
                                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                        <FaArrowRight /> Preview
                                    </a>
                                ) : null}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
