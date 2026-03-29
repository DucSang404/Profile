import type { ReactNode } from 'react'
import Container from './Container'

interface SectionBlockProps {
    id: string
    label: string
    title: string
    description?: string
    children: ReactNode
    className?: string
}

function SectionBlock({ id, label, title, description, children, className = '' }: SectionBlockProps) {
    return (
        <section id={id} className={`scroll-mt-28 py-20 md:py-24 ${className}`}>
            <Container>
                <div className="mb-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                    <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300/90">{label}</p>
                    <h2 className="font-display text-3xl leading-tight text-slate-100 md:text-4xl lg:text-5xl">{title}</h2>
                    {description ? (
                        <p className="max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg lg:col-start-2">{description}</p>
                    ) : null}
                </div>
                {children}
            </Container>
        </section>
    )
}

export default SectionBlock
