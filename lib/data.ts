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
    period: "Oct 2023 – Dec 2025",
    location: "Hybrid",
    responsibilities: [
      "Frontend developer for the Flexigrow Business Management Software, owning frontend architecture and hands-on implementation using React and Next.js.",
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
    name: "Flexigrow Business Management Software",
    description:
      "All-in-one admin + built-in insurance for NDIS providers and trades. Quote jobs, invoice, get paid, stay covered.",
    details: [
      "Defined component structure, folder conventions, and naming standards to ensure consistency and long-term maintainability.",
      "Built a reusable form system by wrapping React Hook Form with Shadcn/UI, reducing duplicated logic across the application.",
      "Implemented role-based dashboards with data visualization using Recharts.",
      "Built calendar-based scheduling with drag-and-drop interactions to manage staff tasks and events.",
      "Developed multi-step registration and onboarding flows with robust validation.",
      "Integrated Stripe payment processing into a multi-step Next.js flow, handling secure checkout, validation, and payment state management within the frontend.",
      "Applied state management using Zustand and React Query for predictable data flow and server state handling.",
      "Implemented role-based access control (RBAC) using CASL to support multiple permission levels.",
      "Migrated the application from Next.js 14 to Next.js 16, transitioning the build system from Webpack to Turbopack.",
      "Improved performance and design flexibility by migrating from MUI to Shadcn/UI with Tailwind CSS.",
      "Set up code quality and testing pipelines, integrating SonarQube scanning with Jest unit tests.",
    ],
    stack: [
      "Next.js",
      "React",
      "Zustand",
      "React Query",
      "Shadcn/UI",
      "Tailwind CSS",
      "React Hook Form",
      "Recharts",
      "CASL",
      "Stripe",
      "Jest",
      "SonarQube",
    ],
    links: {
      live: "https://portal.flexigrow.app/register",
    },
  },
  {
    name: "Flexigrow Marketing Site",
    description:
      "WordPress marketing website for Flexigrow Business Management Software, showcasing features, pricing, and customer testimonials.",
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
      "Interactive curriculum exploration web application for the National University of Singapore's MBA programme, enabling prospective candidates to visualise, customise, and save personalised MBA journey plans based on their professional interests and career goals.",
    details: [
      "Developed and maintained an interactive curriculum exploration web application integrating over 50 electives, multiple specialisations, experiential learning opportunities, student clubs, and international exchange options from the NUS MBA catalogue.",
      "Built an interactive MBA curriculum planner enabling dynamic exploration and customisation of programme routes and electives.",
      "Integrated academic course data, experiential opportunities, and recommendations based on user career intent.",
      "Provided dynamic recommendations tailored to user input for personalised journey generation.",
      "Improved admissions engagement through personalised journey generation and save/export functionality.",
      "Implemented complex form flows, data fetching, and UI state management for seamless user experience.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Zustand",
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

