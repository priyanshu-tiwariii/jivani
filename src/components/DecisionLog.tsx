import { motion } from "framer-motion";
import { decisionLog, typeIcons } from "@/data/decisions";

const DecisionLog = () => {
  return (
    <section className="py-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-headline font-heading font-bold text-foreground mb-4">
            Decision Log
          </h2>
          <p className="text-text-secondary text-body-lg max-w-2xl">
            Mistakes, pivots, and lessons learned. Real engineering involves trade-offs 
            and course corrections.
          </p>
        </motion.div>

        <div className="space-y-6">
          {decisionLog.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 lg:p-8 rounded-lg bg-card border border-border"
            >
              <div className="flex items-start gap-4">
                <span className={`w-10 h-10 rounded-md flex items-center justify-center text-xl font-bold ${
                  entry.type === "removed" 
                    ? "bg-destructive/10 text-destructive" 
                    : entry.type === "changed"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : "bg-primary/10 text-primary"
                }`}>
                  {typeIcons[entry.type]}
                </span>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
                      {entry.type}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {entry.title}
                  </h3>
                  
                  <p className="text-text-muted text-sm mb-4">
                    {entry.context}
                  </p>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {entry.reasoning}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DecisionLog;
