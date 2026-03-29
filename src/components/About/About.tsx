import { motion, useScroll, useTransform } from 'framer-motion'
import { FaBolt, FaCode } from 'react-icons/fa'
import { useRef } from 'react'
import type { AboutContent } from '../../types/landing'
import './About.scss'

interface AboutProps {
    content: AboutContent
}

function About({ content }: AboutProps) {
    const sectionRef = useRef<HTMLElement | null>(null)
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
    const yFloat = useTransform(scrollYProgress, [0, 1], [18, -18])

    return (
        <section className="about section" id="about" ref={sectionRef}>
            <motion.div className="about__bg about__bg--one" style={{ y: yFloat }} aria-hidden="true" />
            <motion.div className="about__bg about__bg--two" style={{ y: yFloat }} aria-hidden="true" />

            <div className="container section__inner about__inner">
                <motion.div
                    className="about__profile"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ y: -6 }}
                >
                    <div className="about__image-wrap">
                        <img className="about__image" src={content.imageUrl} alt={content.imageAlt} />
                    </div>

                    <div className="about__tags">
                        <span className="about__tag about__tag--blue">
                            <FaCode /> Fullstack Engineer
                        </span>
                        <span className="about__tag about__tag--mint">
                            <FaBolt /> AI Agent
                        </span>
                    </div>

                    <div className="about__meta">
                        <p>Runtime</p>
                        <strong>Learning Mode: ON</strong>
                        <small>Focus: AI-powered workflow + New technologies</small>
                    </div>
                </motion.div>

                <motion.div
                    className="about__terminal"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    whileHover={{ y: -4 }}
                >
                    <p className="section__eyebrow">Who I Am</p>
                    <h2>{content.title}</h2>

                    <div className="about__code">
                        <p>
                            <span>01</span> const intro = "{content.intro}";
                        </p>
                        <p>
                            <span>02</span> const mindset = "{content.vibeLine}";
                        </p>
                        <p>
                            <span>03</span> const mission = "Build meaningful, smooth digital experiences";
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
