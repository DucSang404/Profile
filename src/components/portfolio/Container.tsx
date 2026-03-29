import type { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
    className?: string
}

function Container({ children, className = '' }: ContainerProps) {
    return <div className={`mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-10 2xl:px-14 ${className}`}>{children}</div>
}

export default Container
