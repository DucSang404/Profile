import {
  type ProfileData,
  type ContactLink,
  type EducationItem,
  type ExperienceActivity,
  type Project,
  type SkillCategory,
} from '../types/profile'
import profilePlaceholder from '../assets/images/profile-placeholder.svg'

const contacts: ContactLink[] = [
  {
    label: 'Email',
    value: 'nguyen.minh.an.dev@gmail.com',
    href: 'mailto:nguyen.minh.an.dev@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/nguyenminhan-dev',
    href: 'https://github.com/nguyenminhan-dev',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/nguyenminhan-dev',
    href: 'https://linkedin.com/in/nguyenminhan-dev',
  },
  {
    label: 'Portfolio',
    value: 'nguyenminhan.dev',
    href: 'https://nguyenminhan.dev',
  },
]

const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'SCSS', 'HTML5', 'Responsive Design'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST API', 'Authentication Basics'],
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'MySQL', 'Firebase', 'Database Design Fundamentals'],
  },
  {
    category: 'Tools / Version Control',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Vite'],
  },
]

const projects: Project[] = [
  {
    name: 'Campus Event Hub',
    description:
      'A responsive web app for students to discover, bookmark, and track university events in one place.',
    technologies: ['React', 'TypeScript', 'SCSS', 'Firebase'],
    githubUrl: 'https://github.com/nguyenminhan-dev/campus-event-hub',
    demoUrl: 'https://campus-event-hub.vercel.app',
  },
  {
    name: 'Smart Expense Tracker',
    description:
      'A personal finance dashboard that helps users categorize spending and visualize monthly habits.',
    technologies: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/nguyenminhan-dev/smart-expense-tracker',
  },
  {
    name: 'Study Buddy API',
    description:
      'A backend service for study group scheduling and task assignments with secure JWT authentication.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/nguyenminhan-dev/study-buddy-api',
  },
  {
    name: 'Developer Notes App',
    description:
      'A lightweight note-taking app tailored for developers to organize snippets, TODOs, and references.',
    technologies: ['React', 'TypeScript', 'Local Storage', 'SCSS'],
    githubUrl: 'https://github.com/nguyenminhan-dev/developer-notes-app',
    demoUrl: 'https://developer-notes-app.netlify.app',
  },
]

const education: EducationItem[] = [
  {
    institution: 'Ho Chi Minh City University of Technology and Education',
    degree: 'B.Sc. in Information Technology',
    period: '2022 - Present',
    gpa: '3.45 / 4.00',
    achievements: [
      'Top 20% in Web Programming coursework',
      'Completed foundational software engineering and database courses',
    ],
  },
]

const activities: ExperienceActivity[] = [
  {
    role: 'Frontend Intern (Academic Program)',
    organization: 'University Software Lab',
    period: 'Jun 2025 - Aug 2025',
    description:
      'Collaborated with a student team to build a department management dashboard for internal use.',
    highlights: [
      'Built reusable React components and responsive layouts',
      'Integrated REST APIs and handled loading/error states',
      'Participated in weekly code reviews and sprint demos',
    ],
  },
  {
    role: 'Team Lead - Capstone Mini Project',
    organization: 'IT Faculty Project Course',
    period: 'Mar 2025 - May 2025',
    description:
      'Led a 4-member team to deliver an e-learning prototype from planning to final presentation.',
    highlights: [
      'Defined feature scope and task breakdown using GitHub Projects',
      'Ensured consistent code style and basic CI checks',
      'Presented the technical architecture to instructors',
    ],
  },
]

export const profileData: ProfileData = {
  profile: {
    fullName: 'Nguyen Minh An',
    title: 'IT Fresher Developer',
    tagline: 'Computer Science Student',
    introduction:
      'I enjoy turning ideas into clean, user-friendly products and I am currently focused on building practical web applications with modern JavaScript technologies.',
    location: 'Ho Chi Minh City, Vietnam',
    avatarUrl: profilePlaceholder,
    avatarAlt: 'Portrait placeholder for Nguyen Minh An',
    ctaProjectsLabel: 'View Projects',
    ctaContactLabel: 'Contact Me',
  },
  about: [
    'I am an Information Technology student with a strong interest in frontend engineering and product-focused development.',
    'As a fresher developer, I am eager to learn from real-world challenges, collaborate with experienced teams, and continuously improve my coding and problem-solving skills.',
  ],
  skills,
  projects,
  education,
  activities,
  contacts,
  footer: {
    copyright: '© 2026 Nguyen Minh An. All rights reserved.',
    closingLine: 'Always learning, always building meaningful solutions.',
  },
}
