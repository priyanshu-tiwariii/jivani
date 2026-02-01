import { motion } from "framer-motion";
import RoleCard from "./RoleCard";
import ExperienceTimeline from "./ExperienceTimeline";
import AchievementCard from "./AchievementCard";
import MetricsStrip from "./MetricsStrip";
import {
  currentRole,
  experienceTimeline,
  achievements,
  impactMetrics,
} from "@/data/experience";

const ImpactMilestones = () => {
  return (
    <section id="impact" className="py-section">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-headline font-heading font-bold text-foreground mb-4">
            Impact & Milestones
          </h2>
          <p className="text-text-secondary text-body-lg max-w-2xl leading-relaxed">
            From experimentation to production-grade systems—these milestones 
            represent the journey from learning to delivering real-world impact. 
            Each role, achievement, and metric reflects ownership, scale, and 
            measurable outcomes.
          </p>
        </motion.div>

        {/* Metrics Strip */}
        <div className="mb-16">
          <MetricsStrip metrics={impactMetrics} />
        </div>

        {/* Current Role Card */}
        <div className="mb-20">
          <RoleCard role={currentRole} />
        </div>

        {/* Professional Experience Timeline */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-title font-bold text-foreground mb-8"
          >
            Professional Journey
          </motion.h3>
          <ExperienceTimeline entries={experienceTimeline} />
        </div>

        {/* Achievements Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-title font-bold text-foreground mb-8"
          >
            Achievements & Recognition
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMilestones;
