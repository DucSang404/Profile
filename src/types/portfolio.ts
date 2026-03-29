export interface HeroMetric {
  label: string
  value: string
  description: string
}

export interface SkillCluster {
  title: string
  focus: string
  tools: string[]
}

export interface ProjectLink {
  label: string
  href: string
}

export interface ProjectHighlight {
  title: string
  summary: string
  impact: string
  stack: string[]
  links: ProjectLink[]
  status: string
}

export interface ProjectTimelineItem {
  month: string
  title: string
  summary: string
  href?: string
}

export interface ProjectTimelineYear {
  year: string
  items: ProjectTimelineItem[]
}

export interface ExperienceRole {
  title: string
  employmentType: string
  period: string
  duration: string
  skillsSummary: string
}

export interface ExperienceCompany {
  company: string
  totalDuration: string
  locationType: string
  logoUrl: string
  logoAlt: string
  roles: ExperienceRole[]
}

export interface ContactChannel {
  label: string
  value: string
  href: string
}

export interface PortfolioData {
  identity: {
    name: string
    role: string
    location: string
    availability: string
    introHeadline: string
    introBody: string
    primaryCta: {
      label: string
      href: string
    }
    secondaryCta: {
      label: string
      href: string
    }
    metrics: HeroMetric[]
  }
  about: {
    title: string
    paragraphs: string[]
    imageUrl: string
    imageAlt: string
  }
  skillClusters: SkillCluster[]
  projects: ProjectHighlight[]
  projectTimeline: ProjectTimelineYear[]
  experience: ExperienceCompany[]
  contact: {
    title: string
    body: string
    channels: ContactChannel[]
  }
}
