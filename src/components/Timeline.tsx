import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelinePhases } from "@/data/timeline";

const Timeline = () => {
  const [activePhase, setActivePhase] = useState<string>(timelinePhases[3].id);
  
  const active = timelinePhases.find((p) => p.id === activePhase) || timelinePhases[0];

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
            Engineering Evolution
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mb-8 sm:mb-10 max-w-2xl">
            Each phase represents a shift in how I approach problems and build systems.
          </p>
        </motion.div>

        {/* Phase selector */}
        <div className="flex gap-1.5 mb-6 sm:mb-8 flex-wrap">
          {timelinePhases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`px-2.5 py-1 rounded font-mono text-xs transition-all duration-200 ${
                activePhase === phase.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              Phase {phase.phase}
            </button>
          ))}
        </div>

        {/* Active phase detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-6 lg:gap-8"
          >
            <div>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-3xl sm:text-4xl font-bold text-primary/15 font-mono">
                  0{active.phase}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">{active.title}</h3>
                  <p className="text-text-muted font-mono text-xs">{active.period}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-1">
                    Focus
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{active.focus}</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-1">
                    Struggle
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{active.struggle}</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-1">
                    What Changed
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">{active.shift}</p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-2">
                  Key Lessons
                </h4>
                <ul className="space-y-1.5">
                  {active.lessons.map((lesson) => (
                    <li key={lesson} className="flex items-start gap-2 text-text-secondary text-sm">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-2">
                  Project Focus
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {active.projects.map((project) => (
                    <span
                      key={project}
                      className="px-2 py-0.5 bg-secondary rounded text-xs text-secondary-foreground"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Timeline;
