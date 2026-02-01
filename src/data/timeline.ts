export interface TimelinePhase {
  id: string;
  phase: number;
  title: string;
  period: string;
  focus: string;
  struggle: string;
  shift: string;
  lessons: string[];
  projects: string[];
}

export const timelinePhases: TimelinePhase[] = [
  {
    id: "curiosity",
    phase: 1,
    title: "Curiosity",
    period: "Class 7 - Class 12",
    focus: "Java fundamentals through school curriculum. Understanding basic programming logic, loops, conditionals, and object-oriented concepts.",
    struggle: "Abstract concepts without real-world application. Writing code that compiled but didn't connect to anything tangible.",
    shift: "Realized programming is more than syntax—it's problem decomposition. Started seeing patterns in how solutions are structured.",
    lessons: [
      "Syntax is temporary, logic is permanent",
      "Debugging teaches more than tutorials",
      "Consistency beats intensity in learning",
    ],
    projects: ["School assignments", "Basic algorithms", "Console applications"],
  },
  {
    id: "web-exploration",
    phase: 2,
    title: "Web Exploration",
    period: "2022 - Early 2024",
    focus: "Understanding how websites work. HTML, CSS, JavaScript. Building static sites and trying to figure out deployment.",
    struggle: "Deployment was a black box. Built things locally but couldn't understand how websites actually run in production. DNS, hosting, servers—all felt disconnected.",
    shift: "Stopped treating deployment as magic. Started understanding the request-response cycle, how browsers fetch resources, and where code actually lives.",
    lessons: [
      "Building locally is not shipping",
      "The network is part of your application",
      "Understanding infrastructure prevents debugging nightmares",
    ],
    projects: ["Static websites", "Portfolio attempts", "Local experiments"],
  },
  {
    id: "builder-mode",
    phase: 3,
    title: "Builder Mode",
    period: "2024",
    focus: "First serious full-stack product: Nova Nosh. Complete ownership from authentication to payment integration to deployment.",
    struggle: "Managing complexity across the stack. Authentication flows, database design, payment integration, email verification—each piece introduced new failure modes.",
    shift: "Moved from 'learning to code' to 'building products'. Started thinking about user flows, error handling, and what happens when things break in production.",
    lessons: [
      "Full-stack ownership exposes every gap in knowledge",
      "Deployment is where learning becomes real",
      "Production bugs teach more than any course",
    ],
    projects: ["Nova Nosh", "Full-stack authentication", "Payment integration"],
  },
  {
    id: "systems-thinking",
    phase: 4,
    title: "Systems Thinking",
    period: "2024 - Present",
    focus: "Architecture and scalability. Real-time systems, microservices, distributed communication patterns. Smart India Hackathon 2024 shifted focus from features to large-scale problem solving.",
    struggle: "Thinking beyond single-server mentality. Understanding when to split services, how to handle real-time state synchronization, and where bottlenecks emerge under load.",
    shift: "Started designing before coding. Every decision now considers downstream consequences—message queues, connection limits, failure recovery, horizontal scaling.",
    lessons: [
      "Architecture decisions are hard to reverse",
      "Real-time systems require different mental models",
      "Constraints at scale reveal design flaws early",
    ],
    projects: ["Chitran", "Notification System", "OxyFlow", "Ekagra"],
  },
];
