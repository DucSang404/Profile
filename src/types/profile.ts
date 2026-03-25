export interface ProfileInfo {
  fullName: string
  title: string
  tagline: string
  introduction: string
  location: string
  avatarUrl: string
  avatarAlt: string
  ctaProjectsLabel: string
  ctaContactLabel: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
  gpa?: string
  achievements?: string[]
}

export interface ExperienceActivity {
  role: string
  organization: string
  period: string
  description: string
  highlights: string[]
}

export interface ContactLink {
  label: string
  value: string
  href: string
}

export interface FooterInfo {
  copyright: string
  closingLine: string
}

export interface ProfileData {
  profile: ProfileInfo
  about: string[]
  skills: SkillCategory[]
  projects: Project[]
  education: EducationItem[]
  activities: ExperienceActivity[]
  contacts: ContactLink[]
  footer: FooterInfo
}
