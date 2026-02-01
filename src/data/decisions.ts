export interface DecisionLogEntry {
  id: string;
  type: "architecture" | "tradeoff" | "refactor" | "scope";
  title: string;
  project: string;
  context: string;
  decision: string;
  reasoning: string;
  tradeoff: string;
  reflection: string;
}

export const decisionLog: DecisionLogEntry[] = [
  {
    id: "1",
    type: "architecture",
    title: "Redis Pub/Sub over Direct Socket Broadcasting",
    project: "Chitran",
    context: "Initial real-time implementation relied purely on Socket.IO room broadcasting.",
    decision: "Introduced Redis Pub/Sub between WebSocket layer and application logic.",
    reasoning: "Direct broadcasting worked for a single server instance, but it tightly coupled message flow to one process. Redis allowed decoupling and horizontal scaling potential.",
    tradeoff: "Increased infrastructure complexity and added another moving part to debug.",
    reflection: "If scaling further, I would explore CRDT-based synchronization to reduce server-authoritative reconciliation complexity.",
  },
  {
    id: "2",
    type: "tradeoff",
    title: "HTTP-Based RPC Instead of gRPC",
    project: "Notification System",
    context: "Designing inter-service communication for microservice architecture.",
    decision: "Used internal HTTP fetch calls for RPC-style communication.",
    reasoning: "Simple to implement, easy to debug, no additional tooling overhead.",
    tradeoff: "Less efficient than gRPC and lacks strict contract enforcement.",
    reflection: "For production-grade distributed systems, gRPC with schema contracts would be more robust.",
  },
  {
    id: "3",
    type: "architecture",
    title: "Optimistic UI for Real-Time Drawing",
    project: "Chitran",
    context: "Users expect instant drawing feedback in collaborative canvas.",
    decision: "Implemented optimistic UI updates before server confirmation.",
    reasoning: "Improves perceived responsiveness significantly for drawing operations.",
    tradeoff: "Requires careful state reconciliation when conflicts occur.",
    reflection: "Real-time systems benefit from eventual consistency strategies, not naive immediate updates.",
  },
  {
    id: "4",
    type: "scope",
    title: "Minimal Feature Scope",
    project: "Ekagra",
    context: "Designing a productivity-focused Chrome extension.",
    decision: "Avoided feature-heavy analytics and productivity scoring.",
    reasoning: "The goal was behavior alignment, not behavior tracking.",
    tradeoff: "Less measurable engagement data.",
    reflection: "Simplicity increases adoption and reduces maintenance overhead.",
  },
  {
    id: "5",
    type: "refactor",
    title: "Root-Level Navigation Refactor",
    project: "CRUV",
    context: "Content was not loading due to incorrect navigation handling.",
    decision: "Refactored routing logic at root level instead of adding conditional rendering fixes.",
    reasoning: "The issue was architectural, not visual. Surface bugs often indicate structural issues.",
    tradeoff: "Required deeper code changes instead of quick fix.",
    reflection: "Investing time in proper fixes prevents recurring issues.",
  },
];

export const typeLabels: Record<DecisionLogEntry["type"], string> = {
  architecture: "Architecture",
  tradeoff: "Trade-off",
  refactor: "Refactor",
  scope: "Scope",
};
