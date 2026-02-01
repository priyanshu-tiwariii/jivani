import { motion } from "framer-motion";

const BuildingNext = () => {
  return (
    <section className="py-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-headline font-heading font-bold text-foreground mb-4">
            What I'm Building Next
          </h2>
          <p className="text-text-secondary text-body-lg max-w-2xl mb-12">
            Current focus: infrastructure for the next wave of AI-native applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 lg:p-10 rounded-lg bg-card border border-primary/20 glow-accent"
        >
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <span className="inline-block px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wider bg-primary/20 text-primary mb-4">
                In Development
              </span>
              
              <h3 className="text-title font-bold text-foreground mb-4">
                Context-Aware API Gateway
              </h3>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                A routing layer that understands application context—not just URLs. 
                Route requests based on user state, feature flags, and real-time metrics 
                without application code changes.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-2">
                    Problem
                  </h4>
                  <p className="text-text-secondary text-sm">
                    Traditional API gateways are stateless routers. Modern applications need 
                    routing decisions that consider user context, experiment groups, and system health.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-2">
                    Target Audience
                  </h4>
                  <p className="text-text-secondary text-sm">
                    Platform teams at growth-stage companies running 20+ microservices 
                    with complex feature flagging and A/B testing requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-8">
                <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
                  Architecture Approach
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Rust core", "eBPF integration", "Redis state sync", "WASM plugins", "OpenTelemetry"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary rounded-md text-sm text-secondary-foreground font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
                  30-Day Roadmap
                </h4>
                <ul className="space-y-3">
                  {[
                    { week: "Week 1-2", task: "Core routing engine with context store" },
                    { week: "Week 2-3", task: "Feature flag integration and rule engine" },
                    { week: "Week 3-4", task: "Observability layer and dashboard MVP" },
                    { week: "Week 4+", task: "Load testing and documentation" },
                  ].map((item) => (
                    <li key={item.week} className="flex items-start gap-3">
                      <span className="text-primary font-mono text-sm min-w-[70px]">{item.week}</span>
                      <span className="text-text-secondary text-sm">{item.task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildingNext;
