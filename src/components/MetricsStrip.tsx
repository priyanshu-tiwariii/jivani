import { motion } from "framer-motion";
import { ImpactMetric } from "@/data/experience";

interface MetricsStripProps {
  metrics: ImpactMetric[];
}

const MetricsStrip = ({ metrics }: MetricsStripProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.04 }}
          className="text-center p-3 sm:p-4 rounded-lg bg-secondary/40 border border-border/40"
        >
          <div className="text-xl sm:text-2xl font-semibold text-primary mb-0.5">
            {metric.value}
          </div>
          <div className="text-xs sm:text-sm font-medium text-foreground mb-0.5">
            {metric.label}
          </div>
          {metric.context && (
            <div className="text-xs text-text-muted hidden sm:block">
              {metric.context}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default MetricsStrip;
