import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { decisionLog, typeLabels } from "@/data/decisions";

const DecisionLog = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-3">
            Decision Log
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-2xl">
            Engineering decisions with context, trade-offs, and reflection.
          </p>
        </motion.div>

        <div className="space-y-2.5">
          {decisionLog.map((entry, index) => {
            const isExpanded = expandedId === entry.id;
            return (
              <motion.article
                key={entry.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-lg bg-card border border-border hover:border-primary/20 transition-all duration-200"
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : entry.id)}
                  className="w-full p-3.5 sm:p-4 text-left"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-foreground mb-2">
                        {entry.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono text-primary">{entry.project}</span>
                        <span className="px-1.5 py-0.5 text-xs font-mono uppercase tracking-wide text-text-muted bg-secondary rounded">
                          {typeLabels[entry.type]}
                        </span>
                      </div>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-text-muted shrink-0 transition-transform duration-200 mt-1 ${
                      isExpanded ? "rotate-180" : ""
                    }`} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 space-y-2.5 text-sm border-t border-border/40 pt-3">
                        <div>
                          <span className="text-text-muted font-medium">Context:</span>
                          <p className="text-text-secondary mt-1 leading-relaxed">{entry.context}</p>
                        </div>
                        <div>
                          <span className="text-text-muted font-medium">Decision:</span>
                          <p className="text-text-secondary mt-1 leading-relaxed">{entry.decision}</p>
                        </div>
                        <div>
                          <span className="text-text-muted font-medium">Why:</span>
                          <p className="text-text-secondary mt-1 leading-relaxed">{entry.reasoning}</p>
                        </div>
                        <div>
                          <span className="text-text-muted font-medium">Trade-off:</span>
                          <p className="text-text-secondary mt-1 leading-relaxed">{entry.tradeoff}</p>
                        </div>
                        <div className="pt-2 mt-2 border-t border-border/30">
                          <span className="text-text-muted text-xs font-medium">Reflection:</span>
                          <p className="text-text-secondary mt-1 italic text-xs leading-relaxed">{entry.reflection}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DecisionLog;

