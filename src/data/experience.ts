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
  company: "CRUV",
  role: "SDE Intern",
  type: "Startup | Remote",
  positioning: "Building production-ready features in a fast-paced startup environment where shipping correctly matters",
  ownership: "Contributing directly to production-facing features that go through senior review and deployment. Working on frontend engineering with focus on translating product requirements into scalable UI components.",
  technologies: ["React", "TypeScript", "Next.js", "Zustand", "TanStack Router", "REST APIs"],
  featuresBuilt: [
    {
      name: "Endorsement Feature",
      description: "Complete user endorsement flow with validation and state management"
    },
    {
      name: "Insurance Documentation Module",
      description: "Document handling system with form validation and API integration"
    },
    {
      name: "Contact Feature",
      description: "Production-ready contact functionality for the main website"
    }
  ],
  keyLearning: "Frontend issues are often architectural, not visual. Identified and fixed a critical bug where content was not loading due to improper root-level navigation handling, requiring deep trace of routing state and refactoring."
};

export const experienceTimeline: ExperienceEntry[] = [
  {
    id: "cruv",
    company: "CRUV",
    role: "SDE Intern",
    duration: "Nov 2025 - Present",
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
  { value: "3", label: "Production Features", context: "Shipped and deployed" },
  { value: "1", label: "Critical Bug Fixed", context: "Root navigation issue" },
  { value: "36hrs", label: "Hackathon Finale", context: "Live debugging" },
  { value: "National", label: "SIH Winner", context: "Smart India Hackathon" }
];

// What these milestones represent
export const milestoneProgression = [
  "Learning how to code",
  "Building systems for users", 
  "Shipping features in real environments"
];

export const demonstratedSkills = [
  "Comfort with production environments",
  "Understanding of frontend architecture decisions",
  "Real-world debugging capability",
  "Ownership over shipped features",
  "Ability to work under constraints"
];
