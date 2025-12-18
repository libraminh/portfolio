export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  portfolio: string;
  github?: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location?: string;
  responsibilities: string[];
  groupedResponsibilities?: {
    title: string;
    items: string[];
  }[];
  techStack?: string[];
}

export interface Project {
  name: string;
  description: string;
  details: string[];
  stack: string[];
  links?: {
    live?: string;
    github?: string;
  };
  hidden?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  institution: string;
  major: string;
  period: string;
}

export interface Certification {
  name: string;
  year: string;
}

export const personalInfo: PersonalInfo = {
  name: "Minh Le",
  title: "Frontend Developer (Next.js / Wordpress)",
  location: "Ho Chi Minh City, Vietnam",
  phone: "(+84) 9898 74 007",
  email: "libraminh@gmail.com",
  portfolio: "https://minhle.vercel.app/",
  github: "https://github.com/libraminh",
};

export const professionalSummary: string =
  "Frontend Developer with 8+ years of experience building production-grade web applications, dashboards, and CMS-driven platforms for international clients. Strong expertise in React, Next.js, and TypeScript, with proven ownership of frontend architecture, component systems, and performance optimization. Experienced working across product and marketing use cases, including complex forms, data visualization, role-based access control, and high-performance WordPress implementations.";

export const workExperience: WorkExperience[] = [
  {
    company: "Aswhite Global",
    role: "Frontend Developer",
    period: "Oct 2023 – Present",
    responsibilities: [
      "Primary frontend developer for the Flexigrow Finance application, owning frontend architecture and hands-on implementation using React and Next.js.",
      "Defined component architecture, folder structure, and naming conventions to improve consistency and long-term maintainability.",
      "Built a reusable form system by wrapping React Hook Form with Shadcn/UI components, significantly reducing duplicated logic.",
      "Migrated UI stack from MUI to Shadcn/UI with Tailwind CSS, improving performance and design flexibility.",
      "Implemented dashboards with data visualization (Recharts), multi-step registration flows, and calendar-based scheduling with drag-and-drop interactions.",
      "Integrated Stripe payment processing into a multi-step Next.js form flow, handling secure checkout, validation, and payment state management.",
      "Applied role-based access control (RBAC) using CASL to support multiple user permission levels.",
      "Upgraded the application from Next.js 14 to 16, migrating the build system from Webpack to Turbopack.",
      "Set up code quality and testing infrastructure, integrating SonarQube scanning with Jest unit tests.",
      "Collaborated with designers, backend developers, and product managers to estimate work, refine requirements, and deliver client-facing features.",
    ],
    groupedResponsibilities: [
      {
        title: "WordPress & CMS",
        items: [
          "Developed custom WordPress themes using ACF and Elementor, including custom widgets for non-technical content editing.",
          "Optimized WordPress sites for SEO and performance, achieving Lighthouse scores of 100 across all categories.",
          "Handled deployment and hosting configuration for production environments.",
        ],
      },
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Shadcn/UI",
      "Tailwind CSS",
      "React Hook Form",
      "Zustand",
      "React Query",
      "CASL",
      "Stripe",
      "Recharts",
      "WordPress",
      "ACF",
      "Elementor",
      "Jest",
      "SonarQube",
    ],
  },
  {
    company: "Construct Digital",
    role: "Frontend Developer",
    period: "Jan 2018 – Jan 2024",
    location: "Remote",
    responsibilities: [
      "Delivered web applications and marketing platforms for international clients using React, Vue.js, and TypeScript.",
      "Built interactive data visualization tools, including drag-and-drop interfaces and presentation-style performance modes.",
      "Implemented complex UI interactions using React Beautiful DnD and custom hooks.",
      "Collaborated with cross-functional teams to define TypeScript interfaces, reusable hooks, and frontend standards.",
      "Developed HubSpot and WordPress sites based on client requirements, balancing performance and editorial flexibility.",
    ],
    techStack: [
      "React",
      "Vue.js",
      "TypeScript",
      "React Beautiful DnD",
      "HubSpot",
      "WordPress",
    ],
  },
  {
    company: "Gigarion Technology",
    role: "Frontend Developer",
    period: "May 2022 – Jul 2023",
    responsibilities: [
      "Contributed to the Flexigrow Finance web application, focusing on interactive UI development and data visualization.",
      "Built responsive dashboards using Next.js, Tailwind CSS, Shadcn/UI, and charting libraries such as ApexCharts and Chart.js.",
      "Integrated Stripe payment flows and worked closely with backend APIs.",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Shadcn/UI",
      "ApexCharts",
      "Chart.js",
      "Stripe",
    ],
  },
  {
    company: "Eplus Company",
    role: "Website Developer",
    period: "May 2017 – Jan 2018",
    responsibilities: [
      "Converted PSD designs into pixel-perfect HTML templates for commercial sale on ThemeForest.",
      "Ensured cross-browser compatibility and responsive layouts.",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
  },
];

export const projects: Project[] = [
  {
    name: "Flexigrow Finance App",
    description:
      "Finance-focused dashboard application with role-based access and scheduling features.",
    details: [
      "Built calendar drag-and-drop interactions and multi-step onboarding flows.",
    ],
    stack: [
      "Next.js",
      "React",
      "Zustand",
      "React Query",
      "Shadcn/UI",
      "Tailwind CSS",
    ],
    links: {
      live: "https://portal.flexigrow.app/register",
    },
  },
  {
    name: "Flexigrow Marketing Site",
    description:
      "WordPress marketing website for Flexigrow Finance App, showcasing features, pricing, and customer testimonials.",
    details: [
      "Developed custom WordPress theme with ACF and Elementor for flexible content management.",
      "Optimized for SEO and performance, achieving high Lighthouse scores across all metrics.",
      "Implemented responsive design with mobile-first approach for seamless user experience.",
      "Integrated custom widgets and templates for non-technical content editing workflows.",
    ],
    stack: ["WordPress", "ACF", "Elementor", "PHP", "CSS", "JavaScript"],
    links: {
      live: "https://flexigrow.com/",
    },
  },
  {
    name: "EOG Analysis Designer",
    description:
      "Data visualization web application for analytical presentation and reporting.",
    details: [
      "Built interactive charts using AmCharts and implemented presentation and fullscreen modes.",
      "Implemented drag-and-drop layouts for sections and cards using React Beautiful DnD.",
    ],
    stack: ["React", "TypeScript", "Zustand", "MUI", "AmCharts"],
    hidden: true,
  },
  {
    name: "NUS Programme Builder",
    description:
      "Web application for guiding users through MBA program journeys.",
    details: [
      "Implemented complex form flows, data fetching, and UI state management.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Ant Design",
      "Tailwind CSS",
    ],
    links: {
      live: "https://mbabuilder.nus.edu.sg/",
    },
  },
  
];

export const skills: SkillCategory[] = [
  {
    category: "Frontend & Frameworks",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Vue.js"],
  },
  {
    category: "State & Data Management",
    skills: [
      "Zustand",
      "React Query",
      "Redux Toolkit",
      "React Context",
    ],
  },
  {
    category: "UI & Styling",
    skills: [
      "Tailwind CSS",
      "Shadcn/UI",
      "MUI",
      "Ant Design",
      "Vuetify",
    ],
  },
  {
    category: "Forms & Validation",
    skills: ["React Hook Form", "Yup"],
  },
  {
    category: "Tooling & Quality",
    skills: [
      "Vite",
      "Webpack",
      "Turbopack",
      "Jest",
      "SonarQube",
      "Git",
    ],
  },
  {
    category: "CMS & Platforms",
    skills: ["WordPress", "ACF", "Elementor", "HubSpot"],
  },
  {
    category: "Backend (Supporting)",
    skills: ["Node.js", "NestJS", "MongoDB", "Firebase"],
  },
];

export const education: Education = {
  institution: "Thu Duc College of Technology",
  major: "Information Technology",
  period: "2011 – 2014",
};

export const certifications: Certification[] = [
  {
    name: "React Certificate",
    year: "2022",
  },
  {
    name: "CSS Certificate",
    year: "2022",
  },
  {
    name: "HubSpot Design Certified",
    year: "2018",
  },
];

export const socialLinks = {
  portfolio: "https://minhle.vercel.app/",
  github: "https://github.com/libraminh",
  nusProject: "https://mbabuilder.nus.edu.sg/",
  brieflyDemo: "https://briefly-demo.constructdigital.net/",
};

