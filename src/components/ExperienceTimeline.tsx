import { motion } from "framer-motion";
import { ExperienceEntry } from "@/data/experience";

interface ExperienceTimelineProps {
  entries: ExperienceEntry[];
}

const ExperienceTimeline = ({ entries }: ExperienceTimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

      <div className="space-y-12">
        {entries.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative grid md:grid-cols-2 gap-8 ${
              index % 2 === 0 ? "md:text-right" : ""
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 -translate-x-1/2 top-2" />

            {/* Content - alternating sides on desktop */}
            <div
              className={`pl-8 md:pl-0 ${
                index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"
              }`}
            >
              <div className="space-y-3">
                <div>
                  <h4 className="text-lg font-bold text-foreground">{entry.company}</h4>
                  <p className="text-primary font-medium">{entry.role}</p>
                  <p className="text-sm font-mono text-text-muted">{entry.duration}</p>
                </div>

                <div className="space-y-2">
                  <div>
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                      Impact
                    </span>
                    <p className="text-text-secondary mt-1">{entry.impactContribution}</p>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                      Ownership
                    </span>
                    <p className="text-text-secondary mt-1">{entry.engineeringResponsibility}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Empty column for layout on desktop */}
            {index % 2 === 0 && <div className="hidden md:block" />}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
