import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { FaBriefcase, FaBullseye, FaCodeBranch, FaGraduationCap } from 'react-icons/fa'
import type { TimelineIcon, TimelineItem } from '../../types/landing'
import './Timeline.scss'

interface TimelineProps {
    items: TimelineItem[]
}

const iconMap: Record<TimelineIcon, ReactNode> = {
    education: <FaGraduationCap />,
    internship: <FaBriefcase />,
    leadership: <FaBullseye />,
    career: <FaCodeBranch />,
}

function Timeline({ items }: TimelineProps) {
    return (
        <section className="timeline section" id="timeline">
            <div className="container section__inner timeline__inner">
                <div className="section__heading">
                    <p className="section__eyebrow">Journey</p>
                    <h2>Timeline</h2>
                </div>

                <div className="timeline__track">
                    <motion.div
                        className="timeline__line"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 1.1, ease: 'easeOut' }}
                    />

                    <div className="timeline__items">
                        {items.map((item, index) => (
                            <motion.article
                                key={`${item.year}-${item.title}`}
                                className="timeline__item"
                                initial={{ opacity: 0, y: 34 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.12 }}
                            >
                                <div className="timeline__year">{item.year}</div>
                                <div className={`timeline__dot timeline__dot--${item.icon}`}>
                                    {iconMap[item.icon]}
                                </div>
                                <div className="timeline__card">
                                    <p className="timeline__subtitle">{item.subtitle}</p>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline
