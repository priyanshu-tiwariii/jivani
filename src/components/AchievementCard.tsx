import { motion } from "framer-motion";
import { 
  Trophy, 
  Award, 
  Code2, 
  Users, 
  Mic2, 
  FileText, 
  Rocket,
  BadgeCheck 
} from "lucide-react";
import { Achievement } from "@/data/experience";

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const categoryIcons = {
  award: Trophy,
  hackathon: Award,
  certification: BadgeCheck,
  "open-source": Code2,
  leadership: Users,
  community: Mic2,
  publication: FileText,
  milestone: Rocket,
};

const AchievementCard = ({ achievement, index }: AchievementCardProps) => {
  const Icon = categoryIcons[achievement.category];
  const hasDetails = achievement.details;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`group p-4 sm:p-5 rounded-lg border border-border bg-card hover:border-primary/20 transition-colors duration-200 ${hasDetails ? 'sm:col-span-2 lg:col-span-3' : ''}`}
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded bg-primary/10 shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground mb-1 text-base">
            {achievement.title}
          </h4>
          <p className="text-sm text-text-secondary mb-3">
            {achievement.context}
          </p>
          
          {hasDetails && (
            <div className="space-y-4 mt-4 pt-4 border-t border-border/50">
              {achievement.details?.role && (
                <div>
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wide">Role</span>
                  <p className="text-sm text-foreground mt-0.5">{achievement.details.role}</p>
                </div>
              )}
              
              {achievement.details?.technologies && (
                <div>
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wide">Technologies</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {achievement.details.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-secondary rounded text-xs text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {achievement.details?.challenges && (
                <div>
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wide">Challenges Overcome</span>
                  <ul className="mt-1.5 space-y-1">
                    {achievement.details.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {achievement.details?.outcome && (
                <div className="p-3 rounded bg-primary/5 border border-primary/10">
                  <p className="text-sm text-foreground">{achievement.details.outcome}</p>
                </div>
              )}
            </div>
          )}
          
          <p className="text-xs font-mono text-primary/80 mt-3">
            {achievement.demonstrates}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
