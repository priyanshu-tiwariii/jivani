export interface CurrentRole {
  company: string;
  role: string;
  type: string;
  positioning: string;
  ownership: string;
  technologies: string[];
  featuresBuilt: {
    name: string;
    description: string;
  }[];
  keyLearning: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  duration: string;
  type: string;
  impactContribution: string;
  engineeringResponsibility: string;
  highlights?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  context: string;
  demonstrates: string;
  category: "award" | "hackathon" | "certification" | "open-source" | "leadership" | "community" | "publication" | "milestone";
  details?: {
    role?: string;
    technologies?: string[];
    challenges?: string[];
    outcome?: string;
  };
}

export interface ImpactMetric {
  value: string;
  label: string;
  context?: string;
}

export const currentRole: CurrentRole = {
  company: "Nagarro",
  role: "Associate Software Engineer Intern (Full Stack)",
  type: "Enterprise | Hybrid",
  positioning: "Contributing to full-stack production engineering in an enterprise environment where reliability, quality, and delivery discipline matter every day",
  ownership: "Building and improving end-to-end product workflows across UI, APIs, and data interactions. Owning bug resolution and iterative feature delivery with structured reviews and cross-team collaboration.",
  technologies: [".NET", "C#", "React", "Azure", "REST APIs", "SQL", "Git"],
  featuresBuilt: [
    {
      name: "Full-Stack Workflow Delivery",
      description: "Delivered end-to-end modules across interface, API integration, and business logic"
    },
    {
      name: "Backend + API Improvements",
      description: "Improved service interactions and data flows for better reliability and consistency"
    },
    {
      name: "Production Bug Resolution",
      description: "Investigated and fixed cross-layer defects through root-cause oriented debugging"
    }
  ],
  keyLearning: "Strong software engineering is less about quick hacks and more about repeatable quality: clear architecture, thoughtful reviews, and predictable delivery."
};

export const experienceTimeline: ExperienceEntry[] = [
  {
    id: "nagarro",
    company: "Nagarro",
    role: "Associate Software Engineer Intern (Full Stack)",
    duration: "Apr 2026 - Present",
    type: "Enterprise | Hybrid",
    impactContribution: "Contributing to production-facing improvements with a focus on reliable end-to-end user journeys and maintainable full-stack delivery",
    engineeringResponsibility: "Full-stack engineering across interface implementation, API integrations, service interactions, and defect resolution in a structured review-driven environment",
    highlights: [
      "Built end-to-end product modules for active workflows",
      "Improved API and data reliability for user-facing flows",
      "Resolved cross-layer production defects through root-cause debugging"
    ]
  },
  {
    id: "cruv",
    company: "CRUV",
    role: "SDE Intern",
    duration: "Nov 2025 - Mar 2026",
    type: "Startup | Remote",
    impactContribution: "Shipped 3 production features reviewed and deployed by senior engineers, including critical bug fixes in routing architecture",
    engineeringResponsibility: "Frontend development with focus on component architecture, API integration, form validation, and responsive design",
    highlights: [
      "Endorsement feature with complete user flow",
      "Insurance documentation module",
      "Critical navigation bug fix at root level"
    ]
  }
];

export const achievements: Achievement[] = [
  {
    id: "sih-winner",
    title: "National Winner - Smart India Hackathon 2024",
    context: "Built 'Postie' - a digital transparency and tracking system for Department of Posts, solving real visibility and reporting challenges",
    demonstrates: "Building under pressure, system-level problem solving, team coordination",
    category: "hackathon",
    details: {
      role: "Lead React Native / Next.js Developer",
      technologies: ["React Native", "Next.js", "Redux Toolkit", "MapmyIndia APIs"],
      challenges: [
        "Backend services crashed under load during finale",
        "UI bugs surfaced during live integration",
        "AI components required retraining under time pressure",
        "Rebuilt APIs and patched UI issues live"
      ],
      outcome: "National-level competition win validating ability to build, adapt, and deliver under real constraints"
    }
  }
];

export const impactMetrics: ImpactMetric[] = [
  { value: "2", label: "Professional Roles", context: "Startup + Enterprise" },
  { value: "3+", label: "Production Features", context: "Shipped across internships" },
  { value: "1", label: "Critical Bug Fixed", context: "Root navigation issue" },
  { value: "National", label: "SIH Winner", context: "Smart India Hackathon" }
];

// What these milestones represent
export const milestoneProgression = [
  "Learning how to code",
  "Building systems for users",
  "Shipping in startup and enterprise environments"
];

export const demonstratedSkills = [
  "Comfort with production environments",
  "Understanding of full-stack architecture decisions",
  "Real-world debugging capability",
  "Ownership over shipped features",
  "Ability to adapt across different engineering cultures"
];
