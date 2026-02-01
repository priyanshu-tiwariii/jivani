export interface Experiment {
  id: string;
  title: string;
  category: "infrastructure" | "fullstack" | "devtools" | "learning";
  description: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export const experiments: Experiment[] = [
  // Infrastructure & Systems
  {
    id: "oxyflow",
    title: "OxyFlow",
    category: "infrastructure",
    description: "Dynamic reverse proxy with automatic service discovery, Redis caching, and Dockerode integration. Eliminates manual Docker + Nginx configuration.",
    githubUrl: "https://github.com/priyanshu-tiwariii/OxyFlow--A-Dynamic-Reverse-Proxy",
    featured: true,
  },
  
  // Full-Stack Products
  {
    id: "nova-nosh",
    title: "Nova Nosh",
    category: "fullstack",
    description: "Smart dining platform with authentication, Razorpay payments, email verification, and live order tracking. First complete product lifecycle experience.",
    githubUrl: "https://github.com/impriyanshu29/nova_nosh",
    liveUrl: "https://nova-nosh.onrender.com",
    featured: true,
  },
  
  // Developer Tools
  {
    id: "turbovent",
    title: "TurboVent",
    category: "devtools",
    description: "Pre-configured monorepo starter with Next.js, Express, Tailwind, TypeScript, and Turborepo. Designed to eliminate setup friction.",
    githubUrl: "https://github.com/priyanshu-tiwariii/TurboVent--Grow-Your-Code-Not-Your-Headaches",
    featured: true,
  },
  
  // Learning & Utilities
  {
    id: "backend-utils",
    title: "Backend Utilities",
    category: "learning",
    description: "Collection of backend patterns: rate limiting, caching strategies, queue implementations.",
    githubUrl: "https://github.com/priyanshu-tiwariii",
  },
  {
    id: "ui-practice",
    title: "UI Component Practice",
    category: "learning",
    description: "React component experiments: animations, accessibility patterns, responsive layouts.",
    githubUrl: "https://github.com/priyanshu-tiwariii",
  },
  {
    id: "automation-scripts",
    title: "Automation Scripts",
    category: "learning",
    description: "Developer workflow automation: deployment scripts, environment setup, CI/CD helpers.",
    githubUrl: "https://github.com/priyanshu-tiwariii",
  },
];

export const categoryLabels: Record<Experiment["category"], string> = {
  infrastructure: "Infrastructure",
  fullstack: "Full-Stack",
  devtools: "Dev Tools",
  learning: "Learning",
};

export const categoryDescriptions: Record<Experiment["category"], string> = {
  infrastructure: "Systems that handle routing, scaling, and automation",
  fullstack: "Complete products with frontend, backend, and deployment",
  devtools: "Tools that improve developer workflow and productivity",
  learning: "Experiments for learning new patterns and technologies",
};
