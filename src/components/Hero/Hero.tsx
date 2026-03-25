import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { FaCode, FaCube, FaServer } from 'react-icons/fa'
import type { HeroContent } from '../../types/landing'
import './Hero.scss'

interface HeroProps {
    content: HeroContent
}

function Hero({ content }: HeroProps) {
    const roles = useMemo(() => content.roles, [content.roles])
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentRole = roles[roleIndex]
        const isTypingComplete = displayText === currentRole
        const isDeletingComplete = displayText.length === 0

        const timeout = window.setTimeout(
            () => {
                if (!isDeleting && !isTypingComplete) {
                    setDisplayText(currentRole.slice(0, displayText.length + 1))
                    return
                }

                if (!isDeleting && isTypingComplete) {
                    setIsDeleting(true)
                    return
                }

                if (isDeleting && !isDeletingComplete) {
                    setDisplayText(currentRole.slice(0, displayText.length - 1))
                    return
                }

                setIsDeleting(false)
                setRoleIndex((prev) => (prev + 1) % roles.length)
            },
            isTypingComplete && !isDeleting ? 1200 : isDeleting ? 55 : 95,
        )

        return () => window.clearTimeout(timeout)
    }, [displayText, isDeleting, roleIndex, roles])

    return (
        <section className="hero" id="home">
            <div className="hero__aurora" aria-hidden="true" />
            <div className="hero__grid" aria-hidden="true" />

            <div className="hero__floating" aria-hidden="true">
                <span className="hero__shape hero__shape--one" />
                <span className="hero__shape hero__shape--two" />
                <span className="hero__shape hero__shape--three" />
                <span className="hero__shape hero__shape--four" />
            </div>

            <div className="container hero__inner">
                <motion.div
                    className="hero__copy"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="hero__badge">Creative Tech Intro</p>

                    <h1 className="hero__title">
                        Hi, I&apos;m <span>{content.name}</span>
                    </h1>

                    <p className="hero__subtitle">{content.subtitle}</p>

                    <p className="hero__typing" aria-label="Current role">
                        {displayText}
                        <span className="hero__cursor">|</span>
                    </p>

                    <div className="hero__actions">
                        <a className="hero__button hero__button--primary" href="#projects">
                            {content.ctaPrimaryLabel}
                        </a>
                        <a className="hero__button hero__button--ghost" href="#contact">
                            {content.ctaSecondaryLabel}
                        </a>
                    </div>

                    <div className="hero__chips">
                        <span>
                            <FaCode /> Frontend
                        </span>
                        <span>
                            <FaServer /> Backend Basics
                        </span>
                        <span>
                            <FaCube /> Product Mindset
                        </span>
                    </div>
                </motion.div>

                <motion.aside
                    className="hero__terminal"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                >
                    <header>
                        <span className="hero__dot hero__dot--red" />
                        <span className="hero__dot hero__dot--yellow" />
                        <span className="hero__dot hero__dot--green" />
                        <p>terminal://ducsang</p>
                    </header>
                    <div className="hero__terminal-body">
                        <p>
                            <span>$</span> whoami
                        </p>
                        <p className="hero__output">{content.name} / IT fresher / builder</p>
                        <p>
                            <span>$</span> stack --focus
                        </p>
                        <p className="hero__output">React • TypeScript • SCSS • Motion UI</p>
                        <p>
                            <span>$</span> status
                        </p>
                        <p className="hero__output">Open for internships and collaboration</p>
                    </div>
                </motion.aside>
            </div>

            <a className="hero__scroll" href="#about" aria-label="Scroll to about section">
                <span />
            </a>
        </section>
    )
}

export default Hero
