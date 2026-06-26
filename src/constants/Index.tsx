import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"


import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri"
import {
  RiReactjsLine,
  RiNextjsFill,
  RiTailwindCssFill,
  RiNodejsFill,
} from "react-icons/ri";

import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiPostgresql,
  SiDrizzle,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiMongodb,
  SiPython,
  SiDocker,
} from "react-icons/si";

export const Links = [
    {href: "#work", label: "Work" },
    {href: "#about", label: "About" },
    {href: "#experience", label: "Experience" },
    {href: "#tech-stack", label: "TechStack" },
    {href: "#contact", label: "Contact" },

]

export const Hero_Content = {
  greeting: "Hey there 👋",

  introduction:
    "I'm Muhammad Aliyu Lafene, a full-stack TypeScript developer passionate about building modern web applications.",

  description:
    "I build responsive user interfaces with React and Next.js, and scalable backend APIs with Express.js. I enjoy creating clean, maintainable, and high-performance applications while continuously improving my skills through real-world projects.",

  resumeLinkText: "Download Resume",

  ResumeLink: "/resume.pdf",
};

export const pastProjects = [
    {
        name: "LD Aliyu and CO",
        description:
        "A professional website for an accounting firm offering tax consultancy and financial services.",
        image: project1,
        github: "https://github.com/LafeneJr/ld-aliyu-and-co",
        demo: "https://ld-aliyu-and-co.vercel.app/",
    },

    {
        name: "Street Wear Hub",
        description: "A modern e-commerce platform for browsing and purchasing streetwear apparel.",
        image: project2,
        github: "https://github.com/LafeneJr/E-Commerce",
        demo: "https://e-commerce-henna-eight-79.vercel.app",
    },

    {
        name: "Country-info",
        description: "A country information platform that lets users explore detailed facts, statistics, and geographic data from around the world.",
        image: project3,
        github: "https://github.com/LafeneJr/Country-info",
        demo: "#",
    },    
]

export const About_Content = {
  paragraphs: [
    `I'm a full-stack TypeScript developer passionate about building modern, responsive, and scalable web applications with React, Next.js, Express.js, and TypeScript. I enjoy turning ideas into practical products while continuously improving my skills through real-world projects.`,

    `My journey into software development began with HTML and CSS, where I built my first websites and discovered my passion for creating things on the web. As I continued learning, I explored PHP, C programming, embedded systems, and networking, experiences that broadened my understanding of software and strengthened my problem-solving skills.`,

    `Today, my focus is full-stack web development. I'm committed to writing clean, maintainable code, learning modern technologies, and building projects that challenge me and help me grow as a developer.`,
  ],
};

export const workExperience = [
  {
    yearRange: "2026 - Present",
    title: "Full-Stack Developer",
    location: "Personal Project",

    description: [
      "Designed and developed an AI-powered travel planning platform using Next.js, TypeScript, Express.js, PostgreSQL, and Drizzle ORM.",

      "Built scalable backend APIs, authentication, trip management, and AI-assisted itinerary generation with a clean and maintainable architecture.",

      "Focused on performance, responsive UI, and delivering a seamless user experience while following modern full-stack development practices.",
    ],

    github: "#",
    demo: "#",
  },
];

export const TechStack = [
  {
    category: "Frontend",
    technologies: [
      {
        name: "React",
        icon: RiReactjsLine,
      },
      {
        name: "Next.js",
        icon: RiNextjsFill,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
      },
    ],
  },

  {
    category: "Backend",
    technologies: [
      {
        name: "Node.js",
        icon: RiNodejsFill,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "Python",
        icon: SiPython,
      },
    ],
  },

  {
    category: "Database & ORM",
    technologies: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "Drizzle ORM",
        icon: SiDrizzle,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
    ],
  },

  {
    category: "Tools",
    technologies: [
      {
        name: "Git",
        icon: SiGit,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
      {
        name: "Docker",
        icon: SiDocker,
      },
    ],
  },
];

export const Contact_Content = { headline: "LET'S BUILD SOMETHING AMAZING", description: "Whether you have an idea, a project to improve, or you're looking for a full-stack developer to bring your vision to life, I'd love to hear from you. I'm always open to freelance opportunities, collaborations, and exciting projects where I can create fast, scalable, and user-friendly web applications.", email: "Lafene070@gmail.com", socialLinks: [ { platform: "Twitter", url: "#", ariaLabel: "Follow me on Twitter", icon: RiTwitterXFill, }, { platform: "LinkedIn", url: "#", ariaLabel: "Connect with me on LinkedIn", icon: RiLinkedinFill, }, { platform: "GitHub", url: "https://github.com/LafeneJr", ariaLabel: "Check out my GitHub", icon: RiGithubFill, }, ],

  footerText: `© ${new Date().getFullYear()} M~A~L. All rights reserved.`,
};
