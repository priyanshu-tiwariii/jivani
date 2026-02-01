export interface ProductCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  status: "shipped" | "in-progress" | "archived";
  year: string;
  problem: {
    definition: string;
    targetUser: string;
    painPoints: string[];
    insight: string;
  };
  solution: {
    overview: string;
    coreFeatures: string[];
  };
  architecture: {
    frontend: string[];
    backend: string[];
    database: string;
    deployment: string;
    diagram?: string;
  };
  engineering: {
    tradeoffs: string[];
    performance: string[];
    security: string[];
  };
  outcome: {
    summary: string;
    metrics?: string[];
  };
  future: string[];
}

export const products: ProductCaseStudy[] = [
  {
    slug: "realtime-collaboration-engine",
    title: "Realtime Collaboration Engine",
    tagline: "Multiplayer infrastructure for document-based apps",
    status: "shipped",
    year: "2024",
    problem: {
      definition: "Teams working on shared documents face sync conflicts, lost changes, and coordination overhead when multiple users edit simultaneously.",
      targetUser: "Engineering teams building collaborative SaaS products",
      painPoints: [
        "Operational transformation complexity",
        "Conflict resolution at scale",
        "Real-time presence without polling",
        "Offline-first requirements",
      ],
      insight: "Most teams rebuild collaboration primitives from scratch. A composable engine could eliminate months of engineering effort.",
    },
    solution: {
      overview: "A WebSocket-based collaboration SDK with CRDT conflict resolution, presence awareness, and offline queue sync.",
      coreFeatures: [
        "Conflict-free replicated data types (CRDT)",
        "Cursor presence and user awareness",
        "Operation history and time-travel debugging",
        "Offline queue with automatic sync",
      ],
    },
    architecture: {
      frontend: ["TypeScript SDK", "React hooks", "IndexedDB for offline"],
      backend: ["Go WebSocket server", "Redis pub/sub", "PostgreSQL event log"],
      database: "PostgreSQL with JSONB for document state, Redis for ephemeral presence",
      deployment: "Kubernetes on AWS EKS, with regional WebSocket endpoints",
    },
    engineering: {
      tradeoffs: [
        "Chose CRDTs over OT for simpler conflict resolution, accepting higher storage overhead",
        "Used WebSockets over HTTP/2 streams for broader client compatibility",
        "Optimized for 100ms sync latency over perfect ordering",
      ],
      performance: [
        "Sub-100ms sync for 95th percentile operations",
        "Horizontal scaling to 10k concurrent connections per node",
        "Delta compression reduces payload by 70%",
      ],
      security: [
        "Document-level access control via JWT claims",
        "Rate limiting per user and document",
        "End-to-end encryption for sensitive workspaces",
      ],
    },
    outcome: {
      summary: "Reduced integration time from 3 months to 2 weeks for early adopters. Handling 50k+ daily collaborative sessions.",
      metrics: [
        "99.9% uptime over 6 months",
        "2.3s average document load time",
        "Zero data loss incidents",
      ],
    },
    future: [
      "Add version branching for async collaboration",
      "Build presence analytics dashboard",
      "Implement selective sync for large documents",
    ],
  },
  {
    slug: "deployment-pipeline-orchestrator",
    title: "Deployment Pipeline Orchestrator",
    tagline: "GitOps workflow engine for multi-environment releases",
    status: "shipped",
    year: "2023",
    problem: {
      definition: "Organizations struggle to maintain consistent, auditable deployment processes across development, staging, and production environments.",
      targetUser: "Platform engineering teams managing 10+ microservices",
      painPoints: [
        "Manual deployment steps cause errors",
        "Environment drift between stages",
        "Lack of rollback confidence",
        "Poor visibility into deployment state",
      ],
      insight: "Deployment should be declarative and versioned, not a sequence of imperative scripts.",
    },
    solution: {
      overview: "A GitOps-native deployment system with declarative manifests, automatic drift detection, and one-click rollbacks.",
      coreFeatures: [
        "Git-based deployment manifests",
        "Automatic environment promotion",
        "Drift detection and reconciliation",
        "Deployment history with diff visualization",
      ],
    },
    architecture: {
      frontend: ["Next.js dashboard", "Real-time deployment logs", "Diff viewer"],
      backend: ["Node.js orchestration service", "Git webhook handlers", "Kubernetes operator"],
      database: "PostgreSQL for deployment history, etcd for state reconciliation",
      deployment: "Self-hosted Kubernetes operator pattern",
    },
    engineering: {
      tradeoffs: [
        "Pull-based sync over push for better security posture",
        "Eventually consistent state over strong consistency for resilience",
        "Kubernetes-first design limits non-K8s deployments",
      ],
      performance: [
        "30-second maximum reconciliation loop",
        "Parallel deployment across 50+ services",
        "Manifest parsing under 100ms",
      ],
      security: [
        "GitOps eliminates direct cluster access",
        "RBAC-based approval workflows",
        "Audit log for all deployment actions",
      ],
    },
    outcome: {
      summary: "Reduced deployment failures by 80% and cut mean time to recovery from 45 minutes to 5 minutes.",
      metrics: [
        "500+ deployments per week",
        "Zero configuration drift incidents",
        "95% engineer adoption",
      ],
    },
    future: [
      "Add canary deployment support",
      "Integrate with external approval systems",
      "Build cost estimation for infrastructure changes",
    ],
  },
];

export const getProductBySlug = (slug: string): ProductCaseStudy | undefined => {
  return products.find((p) => p.slug === slug);
};
