export interface CurrentRole {
  company: string;
  role: string;
  positioning: string;
  ownership: string;
  technologies: string[];
  scale: string[];
  impact: string[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  duration: string;
  impactContribution: string;
  engineeringResponsibility: string;
}

export interface Achievement {
  id: string;
  title: string;
  context: string;
  demonstrates: string;
  category: "award" | "hackathon" | "certification" | "open-source" | "leadership" | "community" | "publication" | "milestone";
}

export interface ImpactMetric {
  value: string;
  label: string;
  context?: string;
}

export const currentRole: CurrentRole = {
  company: "TechScale Inc.",
  role: "Senior Product Engineer",
  positioning: "Building scalable product systems that power enterprise collaboration",
  ownership: "Own end-to-end architecture and delivery of the real-time collaboration platform, from system design through production deployment and performance optimization.",
  technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "Redis", "Kubernetes", "AWS"],
  scale: [
    "50K+ daily active users",
    "2M+ API requests/day",
    "99.9% uptime SLA",
  ],
  impact: [
    "Reduced page load time by 60% through strategic caching and code splitting",
    "Architected event-driven system handling 10K concurrent WebSocket connections",
    "Led migration from monolith to microservices, cutting deployment time from 2 hours to 8 minutes",
  ],
};

export const experienceTimeline: ExperienceEntry[] = [
  {
    id: "techscale",
    company: "TechScale Inc.",
    role: "Senior Product Engineer",
    duration: "2023 – Present",
    impactContribution: "Architected collaboration engine now used by 200+ enterprise teams, directly contributing to 40% revenue growth",
    engineeringResponsibility: "Technical decision-making for frontend architecture, performance optimization, and developer experience",
  },
  {
    id: "dataflow",
    company: "DataFlow Systems",
    role: "Full-Stack Engineer",
    duration: "2021 – 2023",
    impactContribution: "Built analytics dashboard that reduced customer churn analysis time from 3 days to 15 minutes",
    engineeringResponsibility: "Owned data visualization layer and API design for customer-facing reporting tools",
  },
  {
    id: "startupx",
    company: "StartupX",
    role: "Software Engineer",
    duration: "2019 – 2021",
    impactContribution: "Shipped MVP in 6 weeks that acquired first 1,000 users and secured seed funding",
    engineeringResponsibility: "Full-stack development with focus on rapid iteration and user feedback integration",
  },
];

export const achievements: Achievement[] = [
  {
    id: "hackathon-winner",
    title: "1st Place – Global Hackathon 2023",
    context: "Built an AI-powered accessibility tool in 48 hours competing against 500+ teams",
    demonstrates: "Rapid prototyping, product thinking under pressure",
    category: "hackathon",
  },
  {
    id: "aws-certified",
    title: "AWS Solutions Architect – Professional",
    context: "Validated expertise in designing distributed systems on cloud infrastructure",
    demonstrates: "Deep understanding of scalable architecture patterns",
    category: "certification",
  },
  {
    id: "open-source",
    title: "Core Contributor – React Query",
    context: "Contributed performance optimizations merged into v4, affecting millions of developers",
    demonstrates: "Open-source leadership, community impact",
    category: "open-source",
  },
  {
    id: "tech-lead",
    title: "Engineering Team Lead",
    context: "Led 5-person team delivering critical infrastructure migration on schedule",
    demonstrates: "Technical leadership, cross-functional coordination",
    category: "leadership",
  },
  {
    id: "tech-talk",
    title: "Speaker – ReactConf 2023",
    context: "Presented on real-time collaboration patterns to 800+ attendees",
    demonstrates: "Technical communication, thought leadership",
    category: "community",
  },
  {
    id: "blog-impact",
    title: "Technical Blog – 50K+ Readers",
    context: "Published deep-dives on system design adopted by engineering teams globally",
    demonstrates: "Knowledge sharing, technical writing",
    category: "publication",
  },
];

export const impactMetrics: ImpactMetric[] = [
  { value: "60%", label: "Performance Improvement", context: "Page load optimization" },
  { value: "50K+", label: "Users Impacted", context: "Daily active users" },
  { value: "15+", label: "Features Shipped", context: "Production releases" },
  { value: "99.9%", label: "Uptime Maintained", context: "SLA compliance" },
  { value: "8min", label: "Deploy Time", context: "Down from 2 hours" },
  { value: "3", label: "Systems Architected", context: "From scratch to scale" },
];
