export interface ProductCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  status: "shipped" | "in-progress" | "archived";
  year: string;
  overview?: string;
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
    realTimeLayer?: string;
    diagram?: string;
  };
  engineering: {
    tradeoffs: string[];
    performance: string[];
    security: string[];
    challenges?: string[];
  };
  outcome: {
    summary: string;
    metrics?: string[];
    learnings?: string[];
  };
  future: string[];
}

export const products: ProductCaseStudy[] = [
  {
    slug: "chitran",
    title: "Chitran",
    tagline: "Real-time collaborative drawing platform built from scratch",
    status: "shipped",
    year: "2025",
    overview: "A real-time collaborative drawing platform exploring how multi-user systems behave under live interaction. Started as an experiment in canvas rendering, evolved into a full real-time system with role-based control, persistent storage, and modular monorepo architecture designed for scale.",
    problem: {
      definition: "Collaborative drawing tools often fall into two extremes: either extremely minimal with weak real-time synchronization, or over-engineered and difficult to extend or customize.",
      targetUser: "Teams requiring real-time visual collaboration with reliable synchronization",
      painPoints: [
        "Out-of-order events causing state corruption",
        "Duplicate messages breaking UI consistency",
        "Race conditions during simultaneous edits",
        "State mismatches across connected clients",
        "Undo/redo stack desynchronization",
      ],
      insight: "Real-time collaboration is not about sending messages fast. It is about controlling how state flows.",
    },
    solution: {
      overview: "A clean, performant drawing system that handles real-time collaboration without sacrificing architectural clarity. Moved toward a decoupled architecture using Redis Pub/Sub as an intermediary layer for controlled message propagation.",
      coreFeatures: [
        "Real-time shape synchronization across clients",
        "Role-based access control for collaboration",
        "Persistent canvas state with PostgreSQL",
        "Centralized event validation on server",
        "Singleton WebSocket connection pattern per session",
        "Server-authoritative state broadcasting",
      ],
    },
    architecture: {
      frontend: ["Next.js (App Router)", "Redux Toolkit", "React Query"],
      backend: ["Express API", "Socket.IO server"],
      database: "PostgreSQL via Prisma for persistent shape storage",
      deployment: "Turborepo monorepo with shared packages for cross-layer type safety",
      realTimeLayer: "Redis Pub/Sub for distributed message propagation",
    },
    engineering: {
      tradeoffs: [
        "Chose Redis Pub/Sub over Socket.IO rooms for horizontal scalability across multiple server instances",
        "Implemented server-authoritative state to prevent client-side manipulation at cost of latency",
        "Used structured shape IDs and deterministic updates for conflict resolution",
      ],
      performance: [
        "40-80ms average latency in local testing",
        "Tested with 3 concurrent users drawing simultaneously",
        "Redis message propagation remained stable under load",
        "Optimistic UI updates for reduced perceived latency",
      ],
      security: [
        "Role-based access control for canvas collaboration",
        "Server-side event validation before broadcasting",
        "Session-based WebSocket authentication",
      ],
      challenges: [
        "Shape coordinate detection during erasing operations",
        "Undo/redo stack corruption during multi-user edits",
        "Duplicate event firing from multiple socket listeners",
        "Race conditions when toggling collaboration mode",
      ],
    },
    outcome: {
      summary: "Architecture supports horizontal scaling and could handle 50-100 concurrent collaborative sessions with moderate infrastructure. Redis Pub/Sub enables distributed deployment across multiple WebSocket servers.",
      metrics: [
        "3+ concurrent users tested",
        "Sub-100ms sync latency",
        "Zero data loss in testing",
      ],
      learnings: [
        "Real-time systems are about order, not speed",
        "Authoritative server design prevents chaos",
        "Pub/Sub patterns make scaling easier to reason about",
        "Monorepo architecture improves type consistency",
      ],
    },
    future: [
      "Real-time cursor tracking for presence awareness",
      "Version history with granular undo support",
      "CRDT-based synchronization for reduced server dependency",
      "Load testing with simulated concurrent users",
      "Canvas-level chat integration",
    ],
  },
  {
    slug: "notification-system",
    title: "Notification System",
    tagline: "RPC-based microservice communication with async job processing",
    status: "shipped",
    year: "2025",
    overview: "A lightweight microservice-based notification system exploring how distributed systems can remain simple, testable, and scalable without heavy frameworks. Built around clear service boundaries, internal RPC-style communication, and asynchronous job processing.",
    problem: {
      definition: "In many systems, everything lives in a single backend: user creation, email sending, OTP logic, queue management, business rules. This tightly couples logic and makes scaling or modifying one part risky.",
      targetUser: "Backend engineers building scalable notification infrastructure",
      painPoints: [
        "Tight coupling between notification and business logic",
        "Email sending blocking user registration flows",
        "Difficult to scale individual services independently",
        "Poor separation of concerns in monolithic backends",
        "Complex error handling across service boundaries",
      ],
      insight: "Service boundaries must be intentional. Gateways should orchestrate, not contain logic.",
    },
    solution: {
      overview: "Three independent services with clear responsibilities: API Gateway for orchestration, User Service for database logic, and Notification Service for email and job queues. Each service has one responsibility with no shared database.",
      coreFeatures: [
        "Synchronous RPC for OTP sending via internal HTTP",
        "Chained service communication for user registration",
        "BullMQ-based async job processing for emails",
        "Redis as message broker for job queues",
        "Clean service isolation with no logic leakage",
        "Independent scaling per service",
      ],
    },
    architecture: {
      frontend: ["API consumers", "Internal service clients"],
      backend: ["Hono (API Gateway)", "Node.js services", "BullMQ workers"],
      database: "MongoDB for User Service, Redis for job queues",
      deployment: "Containerizable services with independent scaling",
    },
    engineering: {
      tradeoffs: [
        "HTTP-based RPC over gRPC for simpler debugging and setup",
        "Hono over Express for minimal footprint in microservices",
        "MongoDB for flexible schema during rapid iteration",
        "Eventually consistent delivery for non-blocking user flows",
      ],
      performance: [
        "Non-blocking user registration with async email delivery",
        "BullMQ retry logic for failed email jobs",
        "Horizontal scaling per service component",
        "Redis clustering support for high availability",
      ],
      security: [
        "Service-to-service authentication planned",
        "Rate limiting per service endpoint",
        "Audit logging for email operations",
      ],
      challenges: [
        "Initial tight coupling between services",
        "Logic leakage into gateway layer",
        "Missing error propagation across boundaries",
        "Unhandled async queue failures",
      ],
    },
    outcome: {
      summary: "Clean microservice architecture demonstrating service isolation, internal communication patterns, and async job processing. Each service can be containerized and scaled independently.",
      learnings: [
        "Async processing improves system responsiveness",
        "Distributed systems fail in subtle ways",
        "Logging and observability are critical even in small systems",
        "Strict service boundaries improve maintainability",
      ],
    },
    future: [
      "Replace HTTP RPC with gRPC for type contracts",
      "Implement circuit breaker pattern",
      "Add centralized logging with ELK stack",
      "Introduce service discovery",
      "Add authentication between services",
      "Build observability dashboards",
    ],
  },
  {
    slug: "ekagra",
    title: "Ekagra",
    tagline: "Chrome extension that preserves attention during video learning",
    status: "shipped",
    year: "2025",
    overview: "A minimal Chrome extension designed to protect attention during video-based learning. Automatically pauses videos when users switch tabs or scroll away, and resumes playback when attention returns. Intentionally simple, lightweight, and invisible.",
    problem: {
      definition: "When learning through videos, small distractions compound. Switching tabs, scrolling to comments, opening resources causes videos to continue playing in the background. Context is lost, requiring rewinds and breaking deep focus.",
      targetUser: "Learners consuming video-based educational content",
      painPoints: [
        "Videos continue playing when tab loses focus",
        "Content missed during brief distractions",
        "Constant rewinding breaks learning flow",
        "Existing tools focus on blocking rather than aligning",
        "Heavy extensions impact browser performance",
      ],
      insight: "Focus is not about preventing distraction. It is about aligning playback with attention.",
    },
    solution: {
      overview: "Extension listens for tab visibility changes, scroll position changes, and window focus changes. Video pauses automatically when leaving viewport or switching tabs, resumes seamlessly when user returns. Zero setup required.",
      coreFeatures: [
        "Automatic pause on tab switch",
        "Scroll-based viewport detection",
        "Seamless resume on attention return",
        "Domain whitelisting support",
        "Zero configuration installation",
        "Minimal performance footprint",
      ],
    },
    architecture: {
      frontend: ["Chrome Extension APIs", "Vanilla JavaScript"],
      backend: ["Background service worker", "Content scripts"],
      database: "Chrome Storage API for whitelist persistence",
      deployment: "Chrome Web Store distribution",
    },
    engineering: {
      tradeoffs: [
        "Vanilla JS over frameworks for minimal bundle size",
        "Event throttling over continuous monitoring for performance",
        "Bounding rect calculations for reliable viewport detection",
        "Debounced listeners to prevent rapid state changes",
      ],
      performance: [
        "Sub-1KB extension footprint",
        "Zero noticeable CPU impact",
        "Efficient event cleanup on tab close",
        "Throttled scroll detection",
      ],
      security: [
        "Minimal permissions requested",
        "No external network requests",
        "Local-only data storage",
      ],
      challenges: [
        "Partial visibility edge cases",
        "Embedded player detection across platforms",
        "Dynamic page layout handling",
        "Rapid tab switching consistency",
      ],
    },
    outcome: {
      summary: "Solves one problem well with minimal friction. Users report reduced accidental skipping and improved focus during study sessions without feeling restricted.",
      metrics: [
        "Works across YouTube and educational platforms",
        "Multi-tab and multi-session tested",
        "Natural, non-intrusive experience",
      ],
      learnings: [
        "Small UX improvements significantly affect behavior",
        "Browser APIs require careful event management",
        "Performance is critical for extensions",
        "Minimalism is harder than feature stacking",
      ],
    },
    future: [
      "Optional focus session analytics",
      "Customizable delay before auto-pause",
      "Domain-specific behavior rules",
      "Multi-tab awareness improvements",
      "Enhanced viewport detection logic",
    ],
  },
];

export const getProductBySlug = (slug: string): ProductCaseStudy | undefined => {
  return products.find((p) => p.slug === slug);
};
