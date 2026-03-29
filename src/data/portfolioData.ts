import avatarImage from '../assets/images/avt.png'
import appsCycloneLogo from '../assets/images/apps-cyclone-logo.png'
import itrLogo from '../assets/images/itrvn.png'
import hcmute from '../assets/images/hcmute.png';
import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  identity: {
    name: 'Creator of ShawnSpace',
    role: 'Fullstack Engineering',
    location: 'Ho Chi Minh City, Vietnam',
    availability: 'Open to freelance opportunities',
    introHeadline: 'Building scalable backends and web products.',
    introBody:
      'I develop scalable services and fullstack applications with a focus on performance and reliability. From system design to deployment, I build products that are efficient, maintainable, and ready for real-world usage.',
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
        value: '10+',
        description: 'Academic and personal products shipped with modern stacks.',
      },
      {
        label: 'Core Focus',
        value: 'NodeJS, React',
        description: 'Component systems, interaction design, and robust frontend architecture.',
      },
      {
        label: 'Expertise',
        value: 'Backend Systems',
        description: 'Node.js services, APIs, and practical cloud-friendly deployment flows.',
      },
    ],
  },
  about: {
    title: 'About Me',
    paragraphs: [
      'I am an Information Technology student at HCMUTE passionate about building reliable and scalable web systems.',
      'I work across fullstack development, with a strong focus on backend architecture, API design, and containerized deployments.',
      'Currently, I am strengthening my system design and cloud deployment skills while delivering modern, maintainable web applications.',
    ],
    imageUrl: avatarImage,
    imageAlt: 'Portrait illustration of Duc Sang',
  },
  skillClusters: [
    {
      title: 'Backend & APIs',
      focus: 'Design systems, responsive UI, and interaction polish.',
      tools: ['React'],
    },
    {
      title: 'Frontend Systems',
      focus: 'Clean contracts, reliability, and scalable architecture.',
      tools: ['Node.js', 'Python', 'Java', 'Microservices'],
    },
    {
      title: 'Infrastructure & DevOps',
      focus: 'Data modeling, deployment consistency, and collaboration.',
      tools: ['Docker', 'CI/CD', 'AWS'],
    },
  ],
  projectTimeline: [
    {
      year: '2025',
      items: [
        {
          month: 'January',
          title: 'Eleven Fashion',
          summary: 'Built a fullstack e-commerce platform with product management, cart functionality, and order workflows, focusing on scalable backend services and clean UI.',
          href: 'https://github.com/DucSang404/WebEcommerce_2024-2025',
        },
        {
          month: 'September',
          title: 'Hotel Booking System',
          summary: 'Developed a hotel booking management system with RESTful APIs, database design, and modular backend architecture for reservations and room management.',
          href: 'https://github.com/DucSang404/DAS_HotelManagement'
        },
      ],
    },
    {
      year: '2026',
      items: [
        {
          month: 'February',
          title: 'Learning Platform',
          summary: 'Developed an online learning platform with structured courses, interactive content, and scalable backend architecture.',
          href: 'https://github.com/DucSang404/Learning-Platform',
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
          skillsSummary: 'AWS, Jenkins, CI/CD, Neo4j, Docker, K8S and more',
        },
        {
          title: 'Intern Fullstack',
          employmentType: 'Full-time',
          period: 'Sep 2025 - Dec 2025',
          duration: '4 mos',
          skillsSummary: 'Nodejs, gRPC, Microservices, GraphQL, Redis, MongoDB and more',
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
          skillsSummary: 'Node.js, PostgreSQL, REST API, MongoDB and more',
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
          skillsSummary: 'Algorithms, Databases, System Design, Teamwork, Leadership and more',
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
        value: 'ndsang404@gmail.com',
        href: 'mailto:ndsang404@gmail.com',
      },
      {
        label: 'GitHub',
        value: 'github.com/DucSang404',
        href: 'https://github.com/DucSang404',
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/sangnguyenduc',
        href: 'https://www.linkedin.com/in/sangnguyenduc/',
      },
      {
        label: 'Facebook',
        value: 'facebook.com/nguyenducsangg',
        href: 'https://www.facebook.com/nguyenducsangg',
      },
      {
        label: 'Resume',
        value: 'Download CV',
        href: '#',
      },
    ],
  },
}
