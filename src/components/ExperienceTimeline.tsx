import { motion } from "framer-motion";
import { ExperienceEntry } from "@/data/experience";

interface ExperienceTimelineProps {
  entries: ExperienceEntry[];
}

const ExperienceTimeline = ({ entries }: ExperienceTimelineProps) => {
  return (
    <div className="space-y-4">
      {entries.map((entry, index) => (
        <motion.div
          key={entry.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="relative p-4 sm:p-5 rounded-lg border border-border bg-card"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div>
              <h4 className="text-base font-semibold text-foreground">{entry.company}</h4>
              <p className="text-primary font-medium text-sm">{entry.role}</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-xs font-mono text-text-muted">{entry.duration}</p>
              <p className="text-xs text-text-muted">{entry.type}</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wide">
                Impact
              </span>
              <p className="text-text-secondary text-sm mt-0.5">{entry.impactContribution}</p>
            </div>

            <div>
              <span className="text-xs font-mono text-text-muted uppercase tracking-wide">
                Ownership
              </span>
              <p className="text-text-secondary text-sm mt-0.5">{entry.engineeringResponsibility}</p>
            </div>

            {entry.highlights && entry.highlights.length > 0 && (
              <div>
                <span className="text-xs font-mono text-text-muted uppercase tracking-wide">
                  Highlights
                </span>
                <ul className="mt-1.5 space-y-1">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
