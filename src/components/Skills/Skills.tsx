import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import {
    FaDatabase,
    FaJava,
    FaFigma,
    FaGitAlt,
    FaNetworkWired,
    FaNodeJs,
    FaPlug,
    FaReact,
    FaRobot,
    FaSass,
    FaServer,
} from 'react-icons/fa'
import { SiDocker, SiGraphql, SiJavascript, SiMysql, SiTypescript } from 'react-icons/si'
import type { SkillIcon, SkillItem } from '../../types/landing'
import './Skills.scss'

interface SkillsProps {
    skills: SkillItem[]
}

const skillColorClassMap: Record<SkillIcon, string> = {
    react: 'skills__icon--react',
    typescript: 'skills__icon--typescript',
    javascript: 'skills__icon--javascript',
    sass: 'skills__icon--sass',
    node: 'skills__icon--node',
    git: 'skills__icon--git',
    figma: 'skills__icon--figma',
    database: 'skills__icon--database',
    server: 'skills__icon--server',
    api: 'skills__icon--api',
    graphql: 'skills__icon--graphql',
    grpc: 'skills__icon--grpc',
    mysql: 'skills__icon--mysql',
    ai: 'skills__icon--ai',
    java: 'skills__icon--java',
    docker: 'skills__icon--docker',
}

const iconMap: Record<SkillIcon, ReactNode> = {
    react: <FaReact />,
    typescript: <SiTypescript />,
    javascript: <SiJavascript />,
    sass: <FaSass />,
    node: <FaNodeJs />,
    git: <FaGitAlt />,
    figma: <FaFigma />,
    database: <FaDatabase />,
    server: <FaServer />,
    api: <FaPlug />,
    graphql: <SiGraphql />,
    grpc: <FaNetworkWired />,
    mysql: <SiMysql />,
    ai: <FaRobot />,
    java: <FaJava />,
    docker: <SiDocker />,
}

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
}

function Skills({ skills }: SkillsProps) {
    const skillNames = skills.map((skill) => skill.name).join('  //  ')

    return (
        <section className="skills section" id="skills">
            <div className="container section__inner">
                <div className="section__heading">
                    <p className="section__eyebrow">Toolchain</p>
                    <h2>My Build Stack</h2>
                </div>

                <motion.div
                    className="skills__ticker"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <span>{skillNames}</span>
                    <span aria-hidden="true">{skillNames}</span>
                </motion.div>

                <motion.div
                    className="skills__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {skills.map((skill) => (
                        <motion.article
                            className="skills__card"
                            key={skill.name}
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.02, rotate: -0.4 }}
                            transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                        >
                            <div className={`skills__icon ${skillColorClassMap[skill.icon]}`}>{iconMap[skill.icon]}</div>
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
