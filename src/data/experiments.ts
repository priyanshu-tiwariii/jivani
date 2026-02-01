export interface Experiment {
  id: string;
  title: string;
  category: "experiment" | "prototype" | "extension" | "learning";
  description: string;
  githubUrl: string;
}

export const experiments: Experiment[] = [
  {
    id: "1",
    title: "Edge Function Router",
    category: "prototype",
    description: "URL pattern matching for serverless edge functions",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Type-Safe SQL Builder",
    category: "experiment",
    description: "Compile-time SQL validation using TypeScript generics",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "React State Machine",
    category: "learning",
    description: "XState integration patterns for complex UI flows",
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    title: "CLI Dashboard",
    category: "prototype",
    description: "Terminal UI for monitoring distributed systems",
    githubUrl: "https://github.com",
  },
  {
    id: "5",
    title: "WebGL Particle System",
    category: "experiment",
    description: "GPU-accelerated particle effects for data visualization",
    githubUrl: "https://github.com",
  },
  {
    id: "6",
    title: "GraphQL Code Generator",
    category: "extension",
    description: "Custom directives for generating TypeScript interfaces",
    githubUrl: "https://github.com",
  },
];

export const categoryLabels: Record<Experiment["category"], string> = {
  experiment: "Experiment",
  prototype: "Prototype",
  extension: "Extension",
  learning: "Learning",
};
