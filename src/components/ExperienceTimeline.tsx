import { motion } from "framer-motion";
import { ExperienceEntry } from "@/data/experience";

interface ExperienceTimelineProps {
  entries: ExperienceEntry[];
}

const ExperienceTimeline = ({ entries }: ExperienceTimelineProps) => {
  return (
    <div className="relative space-y-4 pl-6 sm:pl-8">
      <div className="absolute left-[8px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent" />
      {entries.map((entry, index) => (
        <motion.div
          key={entry.id}
          initial={{ opacity: 0, y: 16, x: 8 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-4 sm:p-5 rounded-xl border border-border/70 bg-gradient-to-b from-card to-card/70 shadow-[0_14px_26px_-26px_hsl(var(--foreground)/0.8)]"
        >
          <span className="absolute -left-6 sm:-left-8 top-6 h-3 w-3 rounded-full border-2 border-primary/80 bg-background shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]" />

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
