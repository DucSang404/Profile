import avatarImage from '../assets/images/avt.png'
import appsCycloneLogo from '../assets/images/apps-cyclone-logo.png'
import itrLogo from '../assets/images/itrvn.png'
import hcmute from '../assets/images/hcmute.png';
import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  identity: {
    name: 'Duc Sang',
    role: 'Backend-Focused Software Developer',
    location: 'Ho Chi Minh City, Vietnam',
    availability: 'Open to internship and fresher opportunities',
    introHeadline: 'I build scalable backend systems and thoughtful web products.',
    introBody:
      'I specialize in backend architecture with Node.js and modern service patterns, while still delivering clean, user-focused interfaces. My goal is to build products that are fast, reliable, and easy to evolve.',
    primaryCta: {
      label: 'Explore Selected Work',
      href: '#projects',
    },
    secondaryCta: {
      label: 'Start a Conversation',
      href: '#contact',
    },
    metrics: [
      {
        label: 'Projects Built',
        value: '12+',
        description: 'Academic and personal products shipped with modern stacks.',
      },
      {
        label: 'Core Focus',
        value: 'React + TypeScript',
        description: 'Component systems, interaction design, and robust frontend architecture.',
      },
      {
        label: 'Engineering Interest',
        value: 'Backend Systems',
        description: 'Node.js services, APIs, and practical cloud-friendly deployment flows.',
      },
    ],
  },
  about: {
    title: 'About Me',
    paragraphs: [
      'I am an Information Technology student at HCMUTE who enjoys shaping clean interfaces and reliable product flows from the ground up.',
      'My favorite work lives at the intersection of visual design, component architecture, and practical engineering. I care about readability, maintainability, and a clear user journey.',
      'I am currently strengthening backend and system design skills while continuing to ship modern frontend experiences.',
    ],
    imageUrl: avatarImage,
    imageAlt: 'Portrait illustration of Duc Sang',
  },
  skillClusters: [
    {
      title: 'Product Frontend',
      focus: 'Design systems, responsive UI, and interaction polish.',
      tools: ['React'],
    },
    {
      title: 'API and Services',
      focus: 'Clean contracts, reliability, and scalable architecture.',
      tools: ['Node.js', 'Python', 'Java', 'REST API', 'GraphQL', 'gRPC', 'Microservices'],
    },
    {
      title: 'Data and Delivery',
      focus: 'Data modeling, deployment consistency, and collaboration.',
      tools: ['Docker', 'CI/CD', 'AWS'],
    },
  ],
  projects: [
    {
      title: 'Campus Pulse',
      summary:
        'A social-style campus platform for events and student updates with fast filtering and intuitive interaction loops.',
      impact:
        'Improved event discovery flow and reduced information friction with structured cards and contextual actions.',
      stack: ['React', 'TypeScript', 'Tailwind', 'Vite'],
      status: 'Live Concept',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/ducsang4869/campus-pulse',
        },
        {
          label: 'Live Demo',
          href: 'https://campus-pulse-demo.vercel.app',
        },
      ],
    },
    {
      title: 'Task Orbit',
      summary:
        'A productivity workspace with drag-first interactions, visual progress markers, and dynamic state transitions.',
      impact:
        'Made task progression clearer with motion-guided hierarchy and a stronger information architecture.',
      stack: ['React', 'Framer Motion', 'Firebase', 'TypeScript'],
      status: 'Case Study',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/ducsang4869/task-orbit',
        },
      ],
    },
    {
      title: 'DevSnaps',
      summary:
        'A lightweight developer knowledge board to collect snippets, references, and reusable coding patterns.',
      impact:
        'Centralized learning artifacts into one searchable workspace for faster team and personal reuse.',
      stack: ['React', 'Node.js', 'MongoDB'],
      status: 'In Progress',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com/ducsang4869/devsnaps',
        },
      ],
    },
  ],
  projectTimeline: [
    {
      year: '2025',
      items: [
        {
          month: '09',
          title: 'BitSport Booking API',
          summary: 'Built booking APIs and integrated Redis + Socket.IO for real-time status updates.',
          href: 'https://github.com/ducsang4869',
        },
        {
          month: '12',
          title: 'Internal Workflow Service',
          summary: 'Implemented NestJS service modules for internal product workflows and deployment automation.',
        },
      ],
    },
    {
      year: '2026',
      items: [
        {
          month: '02',
          title: 'Portfolio Rebuild System',
          summary: 'Redesigned portfolio architecture with data-driven sections, reusable components, and motion UX.',
          href: 'https://github.com/ducsang4869/profile-repo',
        },
        {
          month: '03',
          title: 'DevSnaps v2',
          summary: 'Expanded snippet platform with better search flow, cleaner dashboard structure, and MongoDB refinements.',
          href: 'https://github.com/ducsang4869/devsnaps',
        },
      ],
    },
  ],
  experience: [
    {
      company: 'ITR VN',
      totalDuration: '7 mos',
      locationType: 'On-site',
      logoUrl: itrLogo,
      logoAlt: 'ITR VN logo',
      roles: [
        {
          title: 'Full Stack Engineer',
          employmentType: 'Part-time',
          period: 'Dec 2025 - Present',
          duration: '4 mos',
          skillsSummary: 'GraphQL, Neo4j and +1 skill',
        },
        {
          title: 'Intern Fullstack',
          employmentType: 'Full-time',
          period: 'Sep 2025 - Dec 2025',
          duration: '4 mos',
          skillsSummary: 'Socket.io, Apollo GraphQL and +5 skills',
        },
      ],
    },
    {
      company: 'Apps Cyclone',
      totalDuration: '3 mos',
      locationType: 'Part-time',
      logoUrl: appsCycloneLogo,
      logoAlt: 'Apps Cyclone logo',
      roles: [
        {
          title: 'Intern Backend',
          employmentType: 'Part-time',
          period: 'Jun 2025 - Aug 2025',
          duration: '3 mos',
          skillsSummary: 'Node.js, PostgreSQL, REST API',
        },
      ],
    },
    {
      company: 'HCMUTE',
      totalDuration: '2022 - Present',
      locationType: 'Education',
      logoUrl: hcmute,
      logoAlt: 'HCMUTE experience placeholder',
      roles: [
        {
          title: 'Software Technology Student',
          employmentType: 'Academic',
          period: '2022 - Present',
          duration: 'Ongoing',
          skillsSummary: 'Algorithms, Databases, Team Projects',
        },
      ],
    },
  ],
  contact: {
    title: 'Get in touch.',
    body:
      'I am always open to hearing about new projects and opportunities. Whether you have a question or just want to say hi, I will try my best to get back to you.',
    channels: [
      {
        label: 'Email',
        value: 'ducsang4869@example.com',
        href: 'mailto:ducsang4869@example.com',
      },
      {
        label: 'GitHub',
        value: 'github.com/ducsang4869',
        href: 'https://github.com/ducsang4869',
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/ducsang4869',
        href: 'https://www.linkedin.com/in/ducsang4869/',
      },
      {
        label: 'Facebook',
        value: 'facebook.com/ducsang4869',
        href: 'https://facebook.com/ducsang4869',
      },
      {
        label: 'Resume',
        value: 'Download CV',
        href: '#',
      },
    ],
  },
}
