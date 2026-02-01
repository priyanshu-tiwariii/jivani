import { motion } from "framer-motion";
import { ImpactMetric } from "@/data/experience";

interface MetricsStripProps {
  metrics: ImpactMetric[];
}

const MetricsStrip = ({ metrics }: MetricsStripProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="text-center p-4 rounded-lg bg-secondary/50 border border-border/50"
        >
          <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
            {metric.value}
          </div>
          <div className="text-sm font-medium text-foreground mb-1">
            {metric.label}
          </div>
          {metric.context && (
            <div className="text-xs text-text-muted">
              {metric.context}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default MetricsStrip;
