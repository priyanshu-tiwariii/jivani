import { motion } from "framer-motion";

const BuildingNext = () => {
  const techStack = ["Next.js", "TypeScript", "PostgreSQL", "Redis", "WebSocket"];
  
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-3">
            What I Am Building Next
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-2xl mb-8 sm:mb-10">
            Transforming passive content consumption into structured, measurable learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-5 sm:p-6 lg:p-8 rounded-lg bg-card border border-border"
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
            <div>
              <span className="inline-block px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wide bg-primary/15 text-primary mb-4">
                In Development
              </span>
              
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                Structured Learning Platform
              </h3>
              
              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-1.5">
                    Problem
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    YouTube is powerful but chaotic. Learning from playlists lacks structure, 
                    accountability, and visibility. Hours watched doesn't equal knowledge gained.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-1.5">
                    Insight
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Learning happens when content has structure, progress is visible, and there's 
                    a reason to complete. Passive watching becomes active learning with the right framing.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-1.5">
                    Product Direction
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Import YouTube playlists, convert them into structured courses with progress tracking, 
                    real-time dashboards, and competitive leaderboards. Focus on habit-building through visibility.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-3">
                  Core Features
                </h4>
                <ul className="space-y-2">
                  {[
                    "Google authentication and YouTube API integration",
                    "Playlist-to-course conversion with chapter structure",
                    "Real-time progress tracking and dashboards",
                    "Competitive leaderboards for accountability",
                    "Structured learning journeys with milestones",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-3">
                  Architecture Thinking
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 bg-secondary rounded text-xs text-secondary-foreground font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-1.5">
                  Long-Term Vision
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Start with individual learners, expand to team-based learning environments. 
                  B2B potential for companies investing in employee development.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildingNext;
