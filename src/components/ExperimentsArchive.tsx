import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github } from "lucide-react";
import { experiments, categoryLabels, type Experiment } from "@/data/experiments";

const ExperimentsArchive = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryColors: Record<Experiment["category"], string> = {
    experiment: "bg-purple-500/10 text-purple-400",
    prototype: "bg-blue-500/10 text-blue-400",
    extension: "bg-green-500/10 text-green-400",
    learning: "bg-orange-500/10 text-orange-400",
  };

  return (
    <section className="py-section bg-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-headline font-heading font-bold text-foreground mb-4">
            Experiments Archive
          </h2>
          <p className="text-text-secondary text-body-lg max-w-2xl mb-8">
            Smaller explorations, prototypes, and learning projects. Not every idea 
            becomes a product—but every experiment teaches something.
          </p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground hover:bg-muted transition-colors duration-300"
          >
            <span>{isExpanded ? "Collapse Archive" : "Expand Archive"}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
          </button>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                {experiments.map((exp, index) => (
                  <motion.a
                    key={exp.id}
                    href={exp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="p-5 rounded-lg bg-background border border-border hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className={`px-2 py-0.5 rounded text-xs font-mono ${categoryColors[exp.category]}`}>
                        {categoryLabels[exp.category]}
                      </span>
                      <Github className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {exp.description}
                    </p>
                  </motion.a>
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
