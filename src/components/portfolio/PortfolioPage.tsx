import {
    FaAws,
    FaEnvelope,
    FaFacebookF,
    FaFileAlt,
    FaLayerGroup,
    FaFolderOpen,
    FaGithub,
    FaJava,
    FaLinkedin,
    FaMapMarkerAlt,
    FaRegGem,
    FaServer,
} from 'react-icons/fa'
import { FiArrowRight, FiArrowUpRight, FiFileText, FiSend, FiZap } from 'react-icons/fi'
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion'
import { SiDocker, SiGraphql, SiNodedotjs, SiPython, SiReact } from 'react-icons/si'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { portfolioData } from '../../data/portfolioData'
import Container from './Container'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import type { IconType } from 'react-icons'

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Work', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

const socialIconMap = {
    email: FaEnvelope,
    github: FaGithub,
    linkedin: FaLinkedin,
    facebook: FaFacebookF,
    resume: FaFileAlt,
}

const skillIconMap: Record<string, { Icon: IconType; color: string; glow: string }> = {
    react: { Icon: SiReact, color: '#61DAFB', glow: 'hover:shadow-[0_0_28px_rgba(97,218,251,0.35)]' },
    'node.js': { Icon: SiNodedotjs, color: '#5FA04E', glow: 'hover:shadow-[0_0_28px_rgba(95,160,78,0.35)]' },
    python: { Icon: SiPython, color: '#3776AB', glow: 'hover:shadow-[0_0_28px_rgba(55,118,171,0.35)]' },
    java: { Icon: FaJava, color: '#F89820', glow: 'hover:shadow-[0_0_28px_rgba(248,152,32,0.35)]' },
    graphql: { Icon: SiGraphql, color: '#E10098', glow: 'hover:shadow-[0_0_28px_rgba(225,0,152,0.35)]' },
    docker: { Icon: SiDocker, color: '#2496ED', glow: 'hover:shadow-[0_0_28px_rgba(36,150,237,0.35)]' },
    aws: { Icon: FaAws, color: '#FF9900', glow: 'hover:shadow-[0_0_28px_rgba(255,153,0,0.35)]' },
    'ci/cd': { Icon: FaServer, color: '#CB3737', glow: 'hover:shadow-[0_0_28px_rgba(203,55,55,0.35)]' },
    'rest api': { Icon: FaServer, color: '#14B8A6', glow: 'hover:shadow-[0_0_28px_rgba(20,184,166,0.35)]' },
    grpc: { Icon: FaServer, color: '#38BDF8', glow: 'hover:shadow-[0_0_28px_rgba(56,189,248,0.35)]' },
    microservices: { Icon: FaServer, color: '#A78BFA', glow: 'hover:shadow-[0_0_28px_rgba(167,139,250,0.35)]' },
}

function getSocialIcon(label: string) {
    const normalized = label.trim().toLowerCase()
    const Icon = socialIconMap[normalized as keyof typeof socialIconMap] ?? FaEnvelope
    return Icon
}

function getSkillVisual(skill: string) {
    const normalized = skill.trim().toLowerCase()
    return (
        skillIconMap[normalized] ?? {
            Icon: FaServer,
            color: '#93C5FD',
            glow: 'hover:shadow-[0_0_24px_rgba(147,197,253,0.28)]',
        }
    )
}

function PortfolioPage() {
    const { scrollYProgress } = useScroll()
    const progressScale = useSpring(scrollYProgress, {
        stiffness: 140,
        damping: 24,
        mass: 0.25,
    })
    const ambientY = useTransform(scrollYProgress, [0, 1], [0, -120])
    const gridOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.34, 0.24, 0.14])

    const highlightTools = Array.from(
        new Set(portfolioData.skillClusters.flatMap((cluster) => cluster.tools)),
    ).slice(0, 10)

    const [mailForm, setMailForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [showScrollTop, setShowScrollTop] = useState(false)

    const directEmail =
        portfolioData.contact.channels.find((channel) => channel.href.startsWith('mailto:'))?.href.replace('mailto:', '') ??
        'ducsang4869@example.com'

    const handleMailSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const subject = encodeURIComponent(`Portfolio contact from ${mailForm.name || 'Visitor'}`)
        const body = encodeURIComponent(
            `Name: ${mailForm.name}\nEmail: ${mailForm.email}\n\nMessage:\n${mailForm.message}`,
        )
        window.location.href = `mailto:${directEmail}?subject=${subject}&body=${body}`
    }

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        setShowScrollTop(latest > 0.12)
    })

    return (
        <main className="relative overflow-x-clip bg-transparent text-slate-100">
            <motion.div
                aria-hidden="true"
                className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200"
                style={{ scaleX: progressScale }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_9%_15%,rgba(23,179,255,0.23),transparent_34%),radial-gradient(circle_at_88%_7%,rgba(44,124,255,0.15),transparent_35%),linear-gradient(155deg,#041020_0%,#041a32_56%,#031327_100%)]"
            />
            <motion.div
                aria-hidden="true"
                className="pointer-events-none fixed -right-24 top-24 -z-10 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl"
                style={{ y: ambientY }}
                animate={{ x: [0, 10, 0], opacity: [0.22, 0.35, 0.22] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                aria-hidden="true"
                className="pointer-events-none fixed -left-20 bottom-24 -z-10 h-52 w-52 rounded-full bg-blue-300/10 blur-3xl"
                style={{ y: ambientY }}
                animate={{ x: [0, -12, 0], opacity: [0.15, 0.28, 0.15] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            />
            <motion.div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.09)_1px,transparent_1px)] [background-size:60px_60px]"
                style={{ opacity: gridOpacity }}
            />

            <header className="sticky top-0 z-50 border-b border-slate-400/10 bg-[#051a34]/78 backdrop-blur-xl">
                <Container className="flex items-center justify-between py-4">
                    <p className="font-mono-accent hidden text-xs uppercase tracking-[0.28em] text-slate-500 md:block">
                        {portfolioData.identity.role}
                    </p>
                    <nav aria-label="Primary" className="ml-auto flex flex-wrap items-center gap-1 sm:gap-2">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="group rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-300"
                            >
                                <span>{item.label}</span>
                            </a>
                        ))}
                    </nav>
                </Container>
            </header>

            <section id="intro" className="pb-20 pt-14 md:pt-20">
                <Container>
                    <Reveal className="max-w-6xl">
                        <motion.div
                            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 shadow-[0_10px_30px_rgba(8,145,178,0.16)] backdrop-blur"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <FiZap className="text-cyan-300" />
                            {portfolioData.identity.availability}
                        </motion.div>
                        <motion.p
                            className="mt-6 font-mono-accent text-lg tracking-wide text-cyan-200"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Hi, i'm Duc Sang
                        </motion.p>
                        <motion.h1
                            className="mt-4 max-w-4xl text-balance font-display text-5xl leading-[1] text-white sm:text-6xl lg:text-5xl"
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.04 }}
                        >
                            {portfolioData.identity.name}.
                        </motion.h1>
                        <motion.h2
                            className="mt-4 max-w-4xl text-balance font-display text-4xl leading-[1.04] text-slate-300 sm:text-5xl lg:text-5xl"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.08 }}
                        >
                            {portfolioData.identity.introHeadline}
                        </motion.h2>
                        <motion.p
                            className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300"
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.18 }}
                        >
                            {portfolioData.identity.introBody}
                        </motion.p>

                        <motion.div
                            className="mt-10 flex flex-wrap gap-3.5"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                        >
                            <a
                                href={portfolioData.identity.primaryCta.href}
                                className="inline-flex items-center gap-2 rounded-md border border-cyan-300/80 bg-cyan-300/12 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-[0_12px_40px_rgba(34,211,238,0.14)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-300/18"
                            >
                                {portfolioData.identity.primaryCta.label}
                                <FiArrowRight />
                            </a>
                            <a
                                href={portfolioData.identity.secondaryCta.href}
                                className="inline-flex items-center gap-2 rounded-md border border-slate-400/35 bg-slate-950/25 px-5 py-3 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:text-cyan-200"
                            >
                                {portfolioData.identity.secondaryCta.label}
                                <FiSend />
                            </a>
                            {portfolioData.contact.channels.map((channel) => {
                                const Icon = getSocialIcon(channel.label)
                                return (
                                    <a
                                        key={channel.label}
                                        href={channel.href}
                                        target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                                        rel={channel.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                                        className="inline-flex items-center gap-2 rounded-md border border-slate-400/35 bg-slate-950/25 px-4 py-2 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:text-cyan-200"
                                    >
                                        <Icon className="text-sm" />
                                        {channel.label}
                                    </a>
                                )
                            })}
                        </motion.div>

                        <motion.div
                            className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_0.9fr]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.32 }}
                        >
                            <div className="grid gap-4 md:grid-cols-3">
                                {portfolioData.identity.metrics.map((metric, index) => (
                                    <motion.div
                                        key={metric.label}
                                        className="group relative overflow-hidden rounded-2xl border border-slate-400/15 bg-slate-950/30 p-5 shadow-[0_20px_60px_rgba(2,12,27,0.24)] backdrop-blur-sm transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/40"
                                        initial={{ opacity: 0, y: 18 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.55, delay: 0.38 + index * 0.08 }}
                                        whileHover={{ scale: 1.01 }}
                                    >
                                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent opacity-70" />
                                        <p className="font-mono-accent text-xs uppercase tracking-[0.24em] text-slate-500">
                                            {metric.label}
                                        </p>
                                        <p className="mt-4 text-2xl font-semibold text-white">{metric.value}</p>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-300">{metric.description}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-[linear-gradient(145deg,rgba(7,27,46,0.95),rgba(4,20,39,0.88))] p-6 shadow-[0_25px_80px_rgba(2,12,27,0.35)]"
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute -right-14 top-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl" />
                                <p className="font-mono-accent text-xs uppercase tracking-[0.26em] text-cyan-200/80">
                                    Current Direction
                                </p>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                        <div>
                                            <p className="text-sm text-slate-400">Role focus</p>
                                            <p className="text-base font-semibold text-white">{portfolioData.identity.role}</p>
                                        </div>
                                        <FaLayerGroup className="text-xl text-cyan-300" />
                                    </div>
                                    <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                        <div>
                                            <p className="text-sm text-slate-400">Location</p>
                                            <p className="text-base font-semibold text-white">{portfolioData.identity.location}</p>
                                        </div>
                                        <FaMapMarkerAlt className="text-lg text-cyan-300" />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </Reveal>
                </Container>
            </section>

            <section id="about" className="scroll-mt-28 py-20 md:py-24">
                <Container>
                    <Reveal>
                        <SectionHeading index="01" title="About Me" />
                    </Reveal>

                    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                        <Reveal className="space-y-5">
                            <div className="flex flex-wrap gap-3">
                                {portfolioData.skillClusters.map((cluster, index) => (
                                    <motion.div
                                        key={cluster.title}
                                        className="rounded-full border border-slate-400/20 bg-slate-950/35 px-4 py-2 text-sm text-slate-200"
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.4 }}
                                        transition={{ duration: 0.45, delay: index * 0.06 }}
                                    >
                                        {cluster.title}
                                    </motion.div>
                                ))}
                            </div>
                            {portfolioData.about.paragraphs.map((paragraph) => (
                                <p key={paragraph} className="text-lg leading-relaxed text-slate-300">
                                    {paragraph}
                                </p>
                            ))}
                            <div className="pt-4">
                                <p className="font-mono-accent text-base tracking-wide text-slate-300">
                                    Core technologies I have been working with recently:
                                </p>
                                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                                    {highlightTools.map((tool) => {
                                        const { Icon, color, glow } = getSkillVisual(tool)

                                        return (
                                            <li
                                                key={tool}
                                                className={`group flex items-center gap-3 rounded-xl border border-slate-400/20 bg-slate-950/25 px-3 py-2.5 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 ${glow}`}
                                            >
                                                <span
                                                    className="grid h-8 w-8 place-items-center rounded-lg bg-slate-900/70 ring-1 ring-white/10 transition duration-300 group-hover:scale-110"
                                                    style={{ color }}
                                                >
                                                    <Icon className="text-base" />
                                                </span>
                                                <span className="font-medium group-hover:text-cyan-100">{tool}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal delay={0.08} className="mx-auto w-full max-w-sm lg:max-w-md">
                            <motion.div
                                className="relative rounded-[1.75rem] border border-cyan-300/40 bg-slate-950/25 p-2 shadow-[0_0_0_1px_rgba(56,189,248,0.2),0_20px_60px_rgba(4,25,52,0.45)]"
                                whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                                transition={{ duration: 0.35 }}
                            >
                                <div className="absolute -left-5 top-10 rounded-full border border-cyan-300/25 bg-slate-950/80 px-3 py-2 text-xs text-cyan-100 shadow-[0_20px_40px_rgba(6,182,212,0.15)] backdrop-blur">
                                    Backend Systems
                                </div>
                                <div className="absolute -right-4 bottom-14 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs text-slate-100 backdrop-blur">
                                    UI Motion + Product Thinking
                                </div>
                                <img
                                    src={portfolioData.about.imageUrl}
                                    alt={portfolioData.about.imageAlt}
                                    className="aspect-[4/5] w-full rounded-[1.2rem] object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(2,6,23,0.84),rgba(8,47,73,0.55))] p-4 backdrop-blur">
                                    <p className="font-mono-accent text-xs uppercase tracking-[0.24em] text-cyan-200">Profile Snapshot</p>
                                    <div className="mt-3 flex items-center justify-between gap-3">
                                        <div>
                                            <p className="text-lg font-semibold text-white">{portfolioData.identity.name}</p>
                                            <p className="text-sm text-slate-300">{portfolioData.identity.role}</p>
                                        </div>
                                        <div className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                                            Open to collaborate
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Reveal>
                    </div>
                </Container>
            </section>

            <section id="experience" className="scroll-mt-28 py-20 md:py-24">
                <Container>
                    <Reveal>
                        <SectionHeading index="02" title="What I've Done" />
                    </Reveal>
                    <div className="space-y-7">
                        {portfolioData.experience.map((company, index) => (
                            <Reveal
                                key={`${company.company}-${company.totalDuration}`}
                                delay={index * 0.06}
                                className="group relative overflow-hidden rounded-3xl border border-slate-400/15 bg-slate-950/25 p-6 transition duration-300 hover:border-cyan-300/40"
                            >
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent opacity-70" />
                                <div className="absolute -right-16 top-8 h-32 w-32 rounded-full bg-cyan-300/8 blur-3xl transition duration-300 group-hover:bg-cyan-300/14" />
                                <div className="flex items-start gap-4">
                                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-white/15 bg-slate-900/60">
                                        <img
                                            src={company.logoUrl}
                                            alt={company.logoAlt}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-2xl font-semibold text-slate-100">{company.company}</h3>
                                        <p className="font-mono-accent text-sm text-slate-400">
                                            {company.totalDuration} • {company.locationType}
                                        </p>
                                    </div>
                                    <div className="ml-auto hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 sm:block">
                                        {company.roles.length} role{company.roles.length > 1 ? 's' : ''}
                                    </div>
                                </div>

                                <div className="relative ml-7 mt-5 space-y-6 border-l border-slate-500/35 pl-6">
                                    {company.roles.map((role, roleIndex) => (
                                        <div key={`${company.company}-${role.title}-${role.period}`} className="relative">
                                            <span
                                                aria-hidden="true"
                                                className="absolute -left-[1.82rem] top-1.5 h-2.5 w-2.5 rounded-full border border-cyan-200/70 bg-cyan-300"
                                            />
                                            <h4 className="text-2xl font-semibold text-slate-100">{role.title}</h4>
                                            <p className="text-base text-slate-300">Availability</p>
                                            <p className="font-mono-accent mt-1 text-sm text-slate-400">
                                                {role.period} • {role.duration}
                                            </p>
                                            <p className="mt-3 flex items-center gap-2 text-base text-slate-200">
                                                <FaRegGem className="text-cyan-300" />
                                                {role.skillsSummary}
                                            </p>
                                            <div className="mt-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                                                {role.employmentType}
                                            </div>
                                            {roleIndex < company.roles.length - 1 ? (
                                                <div className="mt-4 border-b border-slate-500/20" />
                                            ) : null}
                                        </div>
                                    ))}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>

            <section id="projects" className="scroll-mt-28 py-20 md:py-24">
                <Container>
                    <Reveal>
                        <SectionHeading index="03" title="Featured Projects" />
                    </Reveal>
                    <Reveal className="rounded-2xl border border-slate-400/20 bg-slate-950/30 p-5 md:p-7">
                        <div className="space-y-7">
                            {portfolioData.projectTimeline.map((yearGroup, yearIndex) => (
                                <div key={yearGroup.year}>
                                    <h3 className="mb-3 flex items-center gap-2 text-2xl font-semibold text-cyan-200">
                                        <FaFolderOpen className="text-cyan-300" />
                                        {yearGroup.year}
                                    </h3>

                                    <ul className="ml-2 space-y-3 border-l border-slate-500/35 pl-5">
                                        {yearGroup.items.map((item) => (
                                            <li key={`${yearGroup.year}-${item.month}-${item.title}`} className="relative">
                                                <span
                                                    aria-hidden="true"
                                                    className="absolute -left-[1.43rem] top-2 h-2 w-2 rounded-full border border-cyan-200/70 bg-cyan-300"
                                                />
                                                <div className="rounded-xl border border-slate-400/20 bg-slate-900/35 p-3.5 transition duration-300 hover:border-cyan-300/45">
                                                    <p className="font-mono-accent text-xs uppercase tracking-[0.2em] text-slate-400">
                                                        {item.month}
                                                    </p>
                                                    <div className="mt-1 flex items-center gap-2">
                                                        <FiFileText className="text-cyan-300" />
                                                        <p className="text-lg font-semibold text-slate-100">{item.title}</p>
                                                        {item.href ? (
                                                            <a
                                                                href={item.href}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                aria-label={`View ${item.title} on GitHub`}
                                                                className="ml-1 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100"
                                                            >
                                                                <FaGithub className="text-base" />
                                                                <span>GitHub</span>
                                                            </a>
                                                        ) : null}
                                                    </div>
                                                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.summary}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                    {yearIndex < portfolioData.projectTimeline.length - 1 ? (
                                        <div className="mt-5 border-b border-slate-500/20" />
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </Container>
            </section>

            <section id="contact" className="scroll-mt-28 pb-20 pt-20 md:pt-24">
                <Container>
                    <Reveal className="mx-auto max-w-3xl text-center">
                        <p className="text-3xl text-cyan-300">04. Contact Me</p>
                        <h2 className="mt-4 font-display text-6xl leading-none text-white md:text-7xl">Get in touch.</h2>
                        <p className="mx-auto mt-8 max-w-2xl text-2xl leading-relaxed text-slate-300">
                            {portfolioData.contact.body}
                        </p>

                        <form
                            onSubmit={handleMailSubmit}
                            className="mx-auto mt-10 grid max-w-2xl gap-3 rounded-3xl border border-slate-400/20 bg-slate-950/35 p-5 text-left shadow-[0_24px_60px_rgba(2,12,27,0.24)]"
                        >
                            <div className="grid gap-3 md:grid-cols-2">
                                <label className="text-sm text-slate-300">
                                    Name
                                    <input
                                        required
                                        type="text"
                                        value={mailForm.name}
                                        onChange={(event) => setMailForm((prev) => ({ ...prev, name: event.target.value }))}
                                        className="mt-1.5 w-full rounded-md border border-slate-500/40 bg-slate-900/70 px-3 py-2 text-slate-100 outline-none transition duration-300 focus:border-cyan-300/80"
                                        placeholder="Your name"
                                    />
                                </label>
                                <label className="text-sm text-slate-300">
                                    Email
                                    <input
                                        required
                                        type="email"
                                        value={mailForm.email}
                                        onChange={(event) => setMailForm((prev) => ({ ...prev, email: event.target.value }))}
                                        className="mt-1.5 w-full rounded-md border border-slate-500/40 bg-slate-900/70 px-3 py-2 text-slate-100 outline-none transition duration-300 focus:border-cyan-300/80"
                                        placeholder="you@example.com"
                                    />
                                </label>
                            </div>

                            <label className="text-sm text-slate-300">
                                Message
                                <textarea
                                    required
                                    rows={5}
                                    value={mailForm.message}
                                    onChange={(event) => setMailForm((prev) => ({ ...prev, message: event.target.value }))}
                                    className="mt-1.5 w-full resize-y rounded-md border border-slate-500/40 bg-slate-900/70 px-3 py-2 text-slate-100 outline-none transition duration-300 focus:border-cyan-300/80"
                                    placeholder="Tell me about your project or opportunity"
                                />
                            </label>

                            <button
                                type="submit"
                                className="inline-flex w-fit items-center gap-2 rounded-md border border-cyan-300/80 bg-cyan-300/10 px-4 py-2 font-semibold text-cyan-200 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/20"
                            >
                                Send email
                                <FiArrowUpRight />
                            </button>
                        </form>
                    </Reveal>
                </Container>
            </section>

            <footer className="border-t border-slate-400/10 py-10">
                <Container className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
                    <p>
                        <FaMapMarkerAlt className="mr-2 inline" />
                        {portfolioData.identity.location}
                    </p>
                    <a
                        href="#intro"
                        className="inline-flex items-center gap-2 rounded-md border border-slate-500/35 px-3 py-1.5 text-slate-300 transition duration-300 hover:border-cyan-300/70 hover:text-cyan-200"
                    >
                        Back to top
                        <FiArrowUpRight />
                    </a>
                </Container>
            </footer>

            <motion.a
                href="#intro"
                aria-label="Back to top"
                className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/35 bg-[#071a30]/80 text-cyan-200 shadow-[0_16px_40px_rgba(2,12,27,0.4)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:bg-cyan-300/12 hover:text-cyan-100"
                initial={{ opacity: 0, scale: 0.85, y: 16 }}
                animate={showScrollTop ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: 16 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
            >
                <FiArrowUpRight className="-rotate-45 text-lg" />
            </motion.a>
        </main>
    )
}

export default PortfolioPage
