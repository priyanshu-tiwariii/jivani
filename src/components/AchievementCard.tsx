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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-md bg-secondary group-hover:bg-primary/10 transition-colors duration-300">
          <Icon className="w-5 h-5 text-text-muted group-hover:text-primary transition-colors duration-300" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-foreground mb-1 truncate">
            {achievement.title}
          </h4>
          <p className="text-sm text-text-secondary mb-3 line-clamp-2">
            {achievement.context}
          </p>
          <p className="text-xs font-mono text-primary">
            {achievement.demonstrates}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
