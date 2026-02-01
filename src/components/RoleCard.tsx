import { motion } from "framer-motion";
import { Building2, Layers, Gauge } from "lucide-react";
import { CurrentRole } from "@/data/experience";

interface RoleCardProps {
  role: CurrentRole;
}

const RoleCard = ({ role }: RoleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-lg border border-border bg-card p-8 lg:p-10"
    >
      {/* Subtle glow effect */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-lg bg-primary/10">
            <Building2 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-mono text-primary uppercase tracking-wider mb-1">
              Currently Building At
            </p>
            <h3 className="text-title font-bold text-foreground">{role.company}</h3>
            <p className="text-text-secondary">{role.role}</p>
          </div>
        </div>

        {/* Positioning Statement */}
        <p className="text-body-lg text-foreground font-medium mb-6">
          {role.positioning}
        </p>

        {/* Ownership Description */}
        <p className="text-text-secondary leading-relaxed mb-8">
          {role.ownership}
        </p>

        {/* Technologies */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-text-muted" />
            <span className="text-sm font-mono text-text-muted uppercase tracking-wider">
              Production Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {role.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary rounded-md text-sm text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scale */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Gauge className="w-4 h-4 text-text-muted" />
            <span className="text-sm font-mono text-text-muted uppercase tracking-wider">
              Scale Handled
            </span>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {role.scale.map((item, i) => (
              <div key={i} className="text-center p-3 rounded-lg bg-secondary/50">
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statements */}
        <div>
          <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
            Measurable Impact
          </h4>
          <ul className="space-y-3">
            {role.impact.map((statement, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary mt-1 font-bold">→</span>
                <span className="text-text-secondary">{statement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default RoleCard;
