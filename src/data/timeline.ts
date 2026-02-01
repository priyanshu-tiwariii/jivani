export interface TimelinePhase {
  id: string;
  phase: number;
  title: string;
  period: string;
  mindset: string;
  shift: string;
  lessons: string[];
  projects: string[];
}

export const timelinePhases: TimelinePhase[] = [
  {
    id: "exploration",
    phase: 1,
    title: "Exploration",
    period: "2019 - 2020",
    mindset: "Learn everything. Build anything. Break things constantly.",
    shift: "Moved from tutorial hell to building real projects. Learned that shipping beats perfection.",
    lessons: [
      "Version control isn't optional—it's survival",
      "Reading docs beats guessing",
      "Small projects teach big lessons",
    ],
    projects: ["CLI tools", "Static sites", "API integrations"],
  },
  {
    id: "expansion",
    phase: 2,
    title: "Skill Expansion",
    period: "2020 - 2021",
    mindset: "Go deep before going wide. Master fundamentals.",
    shift: "Stopped chasing every new framework. Focused on understanding systems, not just syntax.",
    lessons: [
      "Database design shapes application architecture",
      "Performance is a feature, not an afterthought",
      "Testing saves more time than it costs",
    ],
    projects: ["Full-stack apps", "Database migrations", "CI/CD pipelines"],
  },
  {
    id: "product-thinking",
    phase: 3,
    title: "Product Thinking",
    period: "2021 - 2023",
    mindset: "Code is a means to an end. Users define success.",
    shift: "Started asking 'why build this?' before 'how to build this?'. Features serve outcomes.",
    lessons: [
      "The best code is code you don't write",
      "User feedback > personal preferences",
      "Iteration beats big launches",
    ],
    projects: ["SaaS products", "Developer tools", "Internal platforms"],
  },
  {
    id: "strategic-builder",
    phase: 4,
    title: "Strategic Builder",
    period: "2023 - Present",
    mindset: "Build for scale, design for change, ship with confidence.",
    shift: "Thinking in systems and trade-offs. Every decision has downstream consequences.",
    lessons: [
      "Architecture is about managing change",
      "Constraints enable creativity",
      "Documentation is a product",
    ],
    projects: ["Platform engineering", "System design", "Technical leadership"],
  },
];
