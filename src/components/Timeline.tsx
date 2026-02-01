import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelinePhases, type TimelinePhase } from "@/data/timeline";

const Timeline = () => {
  const [activePhase, setActivePhase] = useState<string>(timelinePhases[3].id);
  
  const active = timelinePhases.find((p) => p.id === activePhase) || timelinePhases[0];

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
            Engineering Evolution
          </h2>
          <p className="text-text-secondary text-body-lg mb-16 max-w-2xl">
            Growth isn't linear. Each phase represents a shift in how I approach problems, 
            build systems, and think about impact.
          </p>
        </motion.div>

        {/* Phase selector */}
        <div className="flex gap-2 mb-12 flex-wrap">
          {timelinePhases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`px-4 py-2 rounded-md font-mono text-sm transition-all duration-300 ${
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <div>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl font-bold text-primary/20 font-mono">
                  0{active.phase}
                </span>
                <div>
                  <h3 className="text-title font-bold text-foreground">{active.title}</h3>
                  <p className="text-text-muted font-mono text-sm">{active.period}</p>
                </div>
              </div>
              
              <blockquote className="text-body-lg text-text-secondary italic border-l-2 border-primary/30 pl-4 my-8">
                "{active.mindset}"
              </blockquote>
              
              <p className="text-text-secondary leading-relaxed">{active.shift}</p>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
                  Key Lessons
                </h4>
                <ul className="space-y-3">
                  {active.lessons.map((lesson, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="text-primary mt-1">→</span>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
                  Project Focus
                </h4>
                <div className="flex flex-wrap gap-2">
                  {active.projects.map((project, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary rounded-md text-sm text-secondary-foreground"
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
