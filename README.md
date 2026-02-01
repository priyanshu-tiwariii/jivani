# Priyanshu Tiwari – Product Builder Studio

Portfolio platform showcasing Priyanshu Tiwari’s end-to-end product engineering practice: real-time systems, microservice architectures, full-stack web applications, infrastructure experiments, engineering evolution notes, decision logs, and measurable impact milestones.

## Stack

- **Framework**: Next.js (App Router) with hybrid rendering (SSG/ISR + edge-ready routes)
- **Language**: TypeScript with strict configuration and path aliases
- **UI System**: Tailwind CSS + custom component primitives (accessible, theme-aware, server-compatible)
- **State & Data**: Modular data layer, client/server hooks, incremental hydration for real-time previews
- **Tooling**: ESLint, Prettier, Bun/NPM scripts, Vitest for isolated logic testing

## Architecture Overview

- **App Router structure** with colocated route segments, `metadata` exports, and a shared layout for global SEO + structured data injection.
- **Modular feature directories** for hero, engineering evolution, decision log, experiments archive, and impact timelines; each exposes server components plus client-side motion hooks.
- **Real-time experience layer** using typed event interfaces (WebSocket-ready) to demonstrate collaboration tooling and infra experiments.
- **Content primitives** (cards, timelines, accordions) built from composable UI atoms to maintain consistency and minimize re-render cost.
- **Infrastructure integration** docs covering Cloudflare DNS, HTTPS, caching headers, and custom domain routing.

## Feature Surface

- **Real-time Systems**: Showcases collaboration platforms, operational dashboards, and streaming pipelines with clear capability notes.
- **Microservice Architecture**: Documents service boundaries, async messaging strategies, and deployment topologies.
- **Full-Stack Applications**: Highlights end-to-end builds from product spec to production telemetry.
- **Infrastructure Experiments**: Captures platform benchmarks, resilience drills, and observability snapshots.
- **Engineering Evolution**: Timeline describing how the stack, process, and tooling matured per milestone.
- **Decision Log**: Collapsible records of architecture and product trade-offs with rationale + impact.
- **Impact & Milestones**: Quantified outcomes (latency cuts, revenue lifts, adoption metrics) tied to each initiative.

## SEO & Content Strategy

- **Metadata**: `metadata` exports define canonical title, description, keyword set, OpenGraph/Twitter cards, and canonical URLs for every route.
- **Structured Data**: JSON-LD (Person + Project + Breadcrumb) wired in `app/layout.tsx` to describe Priyanshu’s professional identity, links, and highlight projects.
- **Hero Positioning**: Primary H1 names Priyanshu Tiwari and frames him as a full-stack product engineer.
- **Crawlable Links**: Social profiles (LinkedIn, GitHub, LeetCode) exposed via semantic anchors; no client-gated logic.
- **Sitemap & Robots**: `sitemap.xml` auto-generated during build and surfaced via robots.txt for faster indexing.

## Deployment & Infrastructure

- **Hosting**: Deployed on a production-grade Next.js hosting provider (Vercel/Fly/Netlify edge) with immutable builds.
- **Custom Domain**: `priyanshu-tiwari.dev` managed via Cloudflare DNS (proxied, zero-downtime record swaps, automatic SSL).
- **CI/CD**: GitHub Actions (or provider pipelines) running lint, type-check, unit tests, Lighthouse budgets, and deploy previews.
- **Runtime Hardening**: Security headers (CSP, HSTS, Referrer-Policy), strict mode React, and monitoring hooks.

## Getting Started

```bash
bun install     # or npm/yarn
bun lint        # static analysis & type safety
bun dev         # next dev with App Router
bun build       # production build (analyze + lint enforced)
bun start       # run compiled output locally
```

### Required Environment

- Node.js 20+
- pnpm 8+ (or npm/yarn)
- Cloudflare API token (optional) for DNS automation scripts

## Development Workflow

1. **Feature spec** documented in `/docs/decisions` with problem, context, constraints, and measurable outcome.
2. **Implementation** in isolated modules (server component + client hook + UI primitive).
3. **Verification** via unit tests + manual exploratory runs (mobile + desktop) + Lighthouse snapshot.
4. **Review** focusing on architectural impact, performance deltas, and SEO compliance.
5. **Deploy** with automated tracing of build metadata + release notes tying back to decision log entries.

## Infrastructure Notes

- Cloudflare DNS configured with proxied CNAME to hosting provider, enforcing minimum TLS 1.2.
- Preview deployments receive temporary subdomains and short TTL DNS records for rapid validation.
- Edge caching tuned through `Cache-Control` headers and Next.js `revalidate` strategies to balance freshness with latency.

## Performance & Accessibility

- Lighthouse targets 90+/90+/95+/100 (Performance/Accessibility/Best Practices/SEO).
- Images served via Next.js Image component with AVIF/WEBP fallback.
- Motion reduced respect via `prefers-reduced-motion` queries.
- Semantic headings (single H1) and ARIA roles applied across custom components.

## Roadmap

- Integrate live demos for select real-time systems using server actions + websockets.
- Expand infrastructure experiment write-ups with IaC snippets and failure-mode analysis.
- Add RSS feed derived from decision log entries for subscribers.

---

For collaboration requests or infrastructure deep dives, reach out via the Contact dialog in the portfolio (email + LinkedIn) or file an issue in this repository.
