import avatarImage from '../assets/images/avatar.png'
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
            name: 'Node.js',
            icon: 'node',
            description: 'Building scalable backend services and microservice architecture.',
        },
        {
            name: 'Microservices',
            icon: 'server',
            description: 'Service decomposition, inter-service communication, and scalability.',
        },
        {
            name: 'REST API',
            icon: 'api',
            description: 'Designing clean and maintainable RESTful APIs.',
        },
        {
            name: 'gRPC',
            icon: 'grpc',
            description: 'High-performance service-to-service communication.',
        },
        {
            name: 'GraphQL',
            icon: 'graphql',
            description: 'Flexible query-based APIs for modern applications.',
        },
        {
            name: 'MySQL',
            icon: 'mysql',
            description: 'Relational database design and query optimization.',
        },
        {
            name: 'NoSQL',
            icon: 'database',
            description: 'Working with MongoDB/Redis for scalable data storage.',
        },
        {
            name: 'AI Agent',
            icon: 'ai',
            description: 'Building AI-assisted workflows and agent-based automation.',
        },
        {
            name: 'Java',
            icon: 'java',
            description: 'Backend services and integration support.',
        },
        {
            name: 'TypeScript',
            icon: 'typescript',
            description: 'Type-safe backend and full-stack development.',
        },
        {
            name: 'Docker',
            icon: 'docker',
            description: 'Containerizing services for microservice deployment.',
        },
        {
            name: 'Git',
            icon: 'git',
            description: 'Version control and collaborative workflow.',
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
