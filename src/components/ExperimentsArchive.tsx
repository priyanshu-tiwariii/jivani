import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { experiments, categoryLabels, type Experiment } from "@/data/experiments";

const ExperimentsArchive = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const featuredExperiments = experiments.filter((exp) => exp.featured);
  const otherExperiments = experiments.filter((exp) => !exp.featured);

  const categoryColors: Record<Experiment["category"], string> = {
    infrastructure: "bg-blue-500/10 text-blue-400",
    fullstack: "bg-green-500/10 text-green-400",
    devtools: "bg-purple-500/10 text-purple-400",
    learning: "bg-orange-500/10 text-orange-400",
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-3">
            Experiments Archive
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-2xl">
            Systems, tools, and learning experiments. Each project solves a real problem or explores a new pattern.
          </p>
        </motion.div>

        

        {/* Other Experiments Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-secondary text-secondary-foreground hover:bg-muted transition-colors duration-200 text-sm"
        >
          <span>{isExpanded ? "Collapse" : "View Other Experiments"}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
                {featuredExperiments.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-4 sm:p-5 rounded-lg bg-background border border-border hover:border-primary/25 transition-all duration-200 group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`px-1.5 py-0.5 rounded text-xs font-mono ${categoryColors[exp.category]}`}>
                  {categoryLabels[exp.category]}
                </span>
              </div>
              
              <h3 className="font-semibold text-foreground mb-2 text-base group-hover:text-primary transition-colors duration-200">
                {exp.title}
              </h3>
              
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex items-center gap-3">
                <a
                  href={exp.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-text-muted hover:text-primary transition-colors duration-200 flex items-center gap-1"
                >
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
                {exp.liveUrl && (
                  <a
                    href={exp.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-text-muted hover:text-primary transition-colors duration-200 flex items-center gap-1"
                  >
                    Live <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExperimentsArchive;
