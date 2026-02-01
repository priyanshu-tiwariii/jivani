import { motion } from "framer-motion";
import { Building2, Layers, Code, Lightbulb } from "lucide-react";
import { CurrentRole } from "@/data/experience";

interface RoleCardProps {
  role: CurrentRole;
}

const RoleCard = ({ role }: RoleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-lg border border-border bg-card p-5 sm:p-6 lg:p-8"
    >
      {/* Subtle glow effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-start gap-3 mb-5">
          <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
            <Building2 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs font-mono text-primary uppercase tracking-wide mb-0.5">
              Currently Building At
            </p>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">{role.company}</h3>
            <p className="text-text-secondary text-sm">{role.role} | {role.type}</p>
          </div>
        </div>

        {/* Positioning Statement */}
        <p className="text-sm sm:text-base text-foreground font-medium mb-4">
          {role.positioning}
        </p>

        {/* Ownership Description */}
        <p className="text-text-secondary leading-relaxed mb-6 text-sm sm:text-base">
          {role.ownership}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex items-center gap-1.5 mb-2">
            <Layers className="w-3.5 h-3.5 text-text-muted" />
            <span className="text-xs font-mono text-text-muted uppercase tracking-wide">
              Tech Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {role.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-secondary rounded text-xs text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features Built */}
        <div className="mb-6">
          <div className="flex items-center gap-1.5 mb-3">
            <Code className="w-3.5 h-3.5 text-text-muted" />
            <span className="text-xs font-mono text-text-muted uppercase tracking-wide">
              Features Shipped
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {role.featuresBuilt.map((feature) => (
              <div key={feature.name} className="p-3 rounded-lg bg-secondary/40 border border-border/50">
                <span className="text-foreground text-sm font-medium block mb-1">{feature.name}</span>
                <span className="text-text-muted text-xs">{feature.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Learning */}
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <Lightbulb className="w-3.5 h-3.5 text-text-muted" />
            <span className="text-xs font-mono text-text-muted uppercase tracking-wide">
              Key Learning
            </span>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed italic border-l-2 border-primary/20 pl-3">
            {role.keyLearning}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default RoleCard;
