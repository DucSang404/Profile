export interface HeroContent {
    name: string
    subtitle: string
    roles: string[]
    ctaPrimaryLabel: string
    ctaSecondaryLabel: string
}

export interface AboutContent {
    title: string
    intro: string
    vibeLine: string
    imageUrl: string
    imageAlt: string
}

export type SkillIcon =
    | 'react'
    | 'typescript'
    | 'javascript'
    | 'sass'
    | 'node'
    | 'git'
    | 'figma'
    | 'database'
    | 'server'
    | 'api'
    | 'graphql'
    | 'grpc'
    | 'mysql'
    | 'ai'
    | 'java'
    | 'docker'

export interface SkillItem {
    name: string
    icon: SkillIcon
    description: string
}

export interface ProjectItem {
    name: string
    summary: string
    stack: string[]
    githubUrl: string
    liveUrl?: string
}

export type SocialIcon = 'github' | 'linkedin' | 'mail' | 'instagram'

export interface SocialLink {
    label: string
    href: string
    icon: SocialIcon
}

export type TimelineIcon = 'education' | 'internship' | 'leadership' | 'career'

export interface TimelineItem {
    year: string
    title: string
    subtitle: string
    description: string
    icon: TimelineIcon
}

export interface LandingData {
    hero: HeroContent
    about: AboutContent
    skills: SkillItem[]
    projects: ProjectItem[]
    socials: SocialLink[]
    timeline: TimelineItem[]
    footer: string
}
