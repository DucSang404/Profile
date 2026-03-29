import {
    FaAws,
    FaEnvelope,
    FaFacebookF,
    FaFileAlt,
    FaFolderOpen,
    FaGithub,
    FaJava,
    FaLinkedin,
    FaMapMarkerAlt,
    FaRegGem,
    FaServer,
} from 'react-icons/fa'
import { FiArrowUpRight, FiFileText } from 'react-icons/fi'
import { motion, useScroll, useSpring } from 'framer-motion'
import { SiDocker, SiGraphql, SiNodedotjs, SiPython, SiReact } from 'react-icons/si'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { portfolioData } from '../../data/portfolioData'
import Container from './Container'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import type { IconType } from 'react-icons'

const navItems = [
    { index: '01', label: 'About', href: '#about' },
    { index: '02', label: 'Experience', href: '#experience' },
    { index: '03', label: 'Work', href: '#projects' },
    { index: '04', label: 'Contact', href: '#contact' },
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

    const highlightTools = Array.from(
        new Set(portfolioData.skillClusters.flatMap((cluster) => cluster.tools)),
    ).slice(0, 10)

    const [mailForm, setMailForm] = useState({
        name: '',
        email: '',
        message: '',
    })

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
                animate={{ y: [0, -18, 0], x: [0, 10, 0], opacity: [0.22, 0.35, 0.22] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                aria-hidden="true"
                className="pointer-events-none fixed -left-20 bottom-24 -z-10 h-52 w-52 rounded-full bg-blue-300/10 blur-3xl"
                animate={{ y: [0, 16, 0], x: [0, -12, 0], opacity: [0.15, 0.28, 0.15] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.09)_1px,transparent_1px)] [background-size:60px_60px]"
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
                                <span className="font-mono-accent text-xs text-slate-400 transition duration-300 group-hover:text-cyan-300">
                                    {item.index}.
                                </span>{' '}
                                <span>{item.label}</span>
                            </a>
                        ))}
                    </nav>
                </Container>
            </header>

            <section id="intro" className="pb-20 pt-14 md:pt-20">
                <Container>
                    <Reveal className="max-w-5xl">
                        <motion.p
                            className="font-mono-accent text-lg tracking-wide text-cyan-200"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Hi, i'm Duc Sang
                        </motion.p>
                        <motion.h1
                            className="mt-4 max-w-4xl text-balance font-display text-5xl leading-[1] text-white sm:text-6xl lg:text-7xl"
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
                            className="mt-10 max-w-3xl text-lg leading-relaxed text-slate-300"
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
                            <div className="relative rounded-xl border border-cyan-300/60 p-2 shadow-[0_0_0_1px_rgba(56,189,248,0.3),0_20px_60px_rgba(4,25,52,0.45)]">
                                <img
                                    src={portfolioData.about.imageUrl}
                                    alt={portfolioData.about.imageAlt}
                                    className="aspect-[4/5] w-full rounded-lg object-cover"
                                    loading="lazy"
                                />
                            </div>
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
                                className="rounded-2xl border border-slate-400/15 bg-slate-950/25 p-6 transition duration-300 hover:border-cyan-300/40"
                            >
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
                                </div>

                                <div className="relative ml-7 mt-5 space-y-6 border-l border-slate-500/35 pl-6">
                                    {company.roles.map((role, roleIndex) => (
                                        <div key={`${company.company}-${role.title}-${role.period}`} className="relative">
                                            <span
                                                aria-hidden="true"
                                                className="absolute -left-[1.82rem] top-1.5 h-2.5 w-2.5 rounded-full border border-cyan-200/70 bg-cyan-300"
                                            />
                                            <h4 className="text-2xl font-semibold text-slate-100">{role.title}</h4>
                                            <p className="text-base text-slate-300">{role.employmentType}</p>
                                            <p className="font-mono-accent mt-1 text-sm text-slate-400">
                                                {role.period} • {role.duration}
                                            </p>
                                            <p className="mt-3 flex items-center gap-2 text-base text-slate-200">
                                                <FaRegGem className="text-cyan-300" />
                                                {role.skillsSummary}
                                            </p>
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
                        <SectionHeading index="03" title="Some Noteworthy Projects" />
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
                                                        Month {item.month}
                                                    </p>
                                                    <div className="mt-1 flex items-center gap-2">
                                                        <FiFileText className="text-cyan-300" />
                                                        <p className="text-lg font-semibold text-slate-100">{item.title}</p>
                                                        {item.href ? (
                                                            <a
                                                                href={item.href}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                aria-label={`${item.title} link`}
                                                                className="ml-1 rounded p-1 text-slate-300 transition duration-300 hover:text-cyan-200"
                                                            >
                                                                <FiArrowUpRight />
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
                            className="mx-auto mt-10 grid max-w-2xl gap-3 rounded-2xl border border-slate-400/20 bg-slate-950/35 p-5 text-left"
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
        </main>
    )
}

export default PortfolioPage
