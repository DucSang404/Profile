import avatarImage from '../assets/images/profile-placeholder.svg'
import type { LandingData } from '../types/landing'

export const landingData: LandingData = {
    hero: {
        name: 'Duc Sang',
        subtitle: 'IT Fresher Developer',
        roles: ['Frontend Explorer', 'React Builder', 'UI Motion Lover', 'Code + Design Thinker'],
        ctaPrimaryLabel: 'See Projects',
        ctaSecondaryLabel: 'Let\'s Connect',
    },
    about: {
        title: 'About Me',
        intro:
            'I am an IT student who loves turning fresh ideas into clean, interactive digital experiences.',
        vibeLine:
            'My focus is building products that feel smooth, expressive, and easy for people to enjoy.',
        imageUrl: avatarImage,
        imageAlt: 'Portrait illustration of Duc Sang',
    },
    skills: [
        {
            name: 'React',
            icon: 'react',
            description: 'Component-driven UI with reusable architecture.',
            level: 88,
        },
        {
            name: 'TypeScript',
            icon: 'typescript',
            description: 'Type-safe development for stable and scalable code.',
            level: 82,
        },
        {
            name: 'JavaScript',
            icon: 'javascript',
            description: 'Modern ES patterns and interactive browser experiences.',
            level: 86,
        },
        {
            name: 'SCSS',
            icon: 'sass',
            description: 'Design systems, mixins, and maintainable styling.',
            level: 84,
        },
        {
            name: 'Node.js',
            icon: 'node',
            description: 'Building lightweight APIs for full-stack projects.',
            level: 74,
        },
        {
            name: 'Git',
            icon: 'git',
            description: 'Version control and collaborative workflow habits.',
            level: 80,
        },
        {
            name: 'Figma',
            icon: 'figma',
            description: 'UI concepts, flows, and visual experimentation.',
            level: 72,
        },
        {
            name: 'Database',
            icon: 'database',
            description: 'Working with SQL and NoSQL basics for app data.',
            level: 70,
        },
    ],
    projects: [
        {
            name: 'Campus Pulse',
            summary:
                'A social-style campus board for events and student updates with smooth filtering and quick interactions.',
            stack: ['React', 'TypeScript', 'SCSS'],
            githubUrl: 'https://github.com/ducsang4869/campus-pulse',
            liveUrl: 'https://campus-pulse-demo.vercel.app',
        },
        {
            name: 'Task Orbit',
            summary:
                'A playful productivity app with drag interactions, status transitions, and visual progress cues.',
            stack: ['React', 'Framer Motion', 'Firebase'],
            githubUrl: 'https://github.com/ducsang4869/task-orbit',
        },
        {
            name: 'DevSnaps',
            summary:
                'A mini platform to collect and organize useful snippets, links, and coding notes in one clean dashboard.',
            stack: ['React', 'Node.js', 'MongoDB'],
            githubUrl: 'https://github.com/ducsang4869/devsnaps',
        },
    ],
    socials: [
        {
            label: 'GitHub',
            href: 'https://github.com/ducsang4869',
            icon: 'github',
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ducsang4869/',
            icon: 'linkedin',
        },
        {
            label: 'Email',
            href: 'mailto:ducsang4869@example.com',
            icon: 'mail',
        },
        {
            label: 'Instagram',
            href: 'https://instagram.com/ducsang4869',
            icon: 'instagram',
        },
    ],
    timeline: [
        {
            year: '2022',
            title: 'Started IT Journey',
            subtitle: 'HCMUTE - Information Technology',
            description:
                'Built core foundations in programming, databases, and software engineering mindset.',
            icon: 'education',
        },
        {
            year: '2024',
            title: 'Frontend Specialization',
            subtitle: 'React and TypeScript Focus',
            description:
                'Shifted strongly into frontend product building with component architecture and motion UI.',
            icon: 'career',
        },
        {
            year: '2025',
            title: 'Internship and Team Project',
            subtitle: 'University Lab and Capstone Work',
            description:
                'Collaborated in student teams, delivered internal dashboards, and led mini product execution.',
            icon: 'internship',
        },
        {
            year: '2026',
            title: 'Open for Fresher Role',
            subtitle: 'Developer Branding and Real-world Projects',
            description:
                'Preparing for professional environment with polished portfolio, practical products, and continuous learning.',
            icon: 'leadership',
        },
    ],
    footer: 'Crafted with curiosity, coffee, and endless iterations.',
}
