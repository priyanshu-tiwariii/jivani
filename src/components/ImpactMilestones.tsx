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
  demonstratedSkills,
} from "@/data/experience";

const ImpactMilestones = () => {
  return (
    <section id="impact" className="py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-3">
            Experience
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-2xl leading-relaxed">
            Building in production environments with real constraints. Each milestone represents shipped features and measurable outcomes.
          </p>
        </motion.div>

        {/* Metrics Strip */}
        <div className="mb-10 sm:mb-14">
          <MetricsStrip metrics={impactMetrics} />
        </div>

        {/* Current Role Card */}
        <div className="mb-12 sm:mb-16">
          <RoleCard role={currentRole} />
        </div>

        {/* Professional Experience Timeline */}
        {experienceTimeline.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl font-semibold text-foreground mb-6"
            >
              Professional Journey
            </motion.h3>
            <ExperienceTimeline entries={experienceTimeline} />
          </div>
        )}

        {/* Achievements */}
        <div className="mb-12 sm:mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl font-semibold text-foreground mb-6"
          >
            Achievements
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* What I Bring - Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-5 sm:p-6 rounded-lg border border-primary/15 bg-primary/5"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            What I Bring
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {demonstratedSkills.map((skill) => (
              <div key={skill} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-text-secondary text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactMilestones;
