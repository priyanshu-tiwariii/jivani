export interface DecisionLogEntry {
  id: string;
  type: "removed" | "changed" | "learned";
  title: string;
  context: string;
  reasoning: string;
}

export const decisionLog: DecisionLogEntry[] = [
  {
    id: "1",
    type: "removed",
    title: "Removed real-time notifications",
    context: "Originally built WebSocket-based notifications for a project management tool.",
    reasoning: "Usage analytics showed <5% engagement. Users preferred email digests. Removed complexity, improved reliability. Sometimes less infrastructure is better infrastructure.",
  },
  {
    id: "2",
    type: "changed",
    title: "Migrated from MongoDB to PostgreSQL",
    context: "Started with MongoDB for flexibility during rapid prototyping.",
    reasoning: "As data relationships grew complex, lack of joins created N+1 query patterns. PostgreSQL's JSONB provided schema flexibility with relational power. Migration took 3 weeks but reduced query latency by 60%.",
  },
  {
    id: "3",
    type: "learned",
    title: "Premature optimization cost us 2 months",
    context: "Built a custom caching layer before validating product-market fit.",
    reasoning: "The product pivoted, and the cache became technical debt. Learned to optimize for learning speed early, performance later. Now I follow: make it work, make it right, then make it fast.",
  },
];

export const typeIcons: Record<DecisionLogEntry["type"], string> = {
  removed: "−",
  changed: "↻",
  learned: "✧",
};
