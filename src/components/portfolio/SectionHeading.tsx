interface SectionHeadingProps {
    index: string
    title: string
}

function SectionHeading({ index, title }: SectionHeadingProps) {
    return (
        <div className="mb-10 flex items-center gap-4 md:mb-12">
            <h2 className="font-display text-2xl text-slate-100 md:text-[2rem]">
                <span className="mr-1 text-cyan-300">{index}.</span>
                {title}
            </h2>
            <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-slate-500/45 to-transparent" />
        </div>
    )
}

export default SectionHeading
