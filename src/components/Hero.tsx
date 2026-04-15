import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[88vh] sm:min-h-screen flex flex-col justify-center relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/40 text-text-secondary text-xs sm:text-sm font-mono uppercase tracking-wide mb-4 sm:mb-6"
          >
            Associate Software Engineer Intern
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-display font-heading font-bold text-foreground mb-5 sm:mb-6 leading-tight text-balance">
            Building digital products that{" "}
            <span className="gradient-text">ship with intent</span>
          </h1>
          
          <p className="text-base sm:text-lg text-text-secondary max-w-3xl mb-8 sm:mb-10 leading-relaxed">
            I build production-ready software with attention to architecture, 
            performance, and user experience. From real-time collaboration 
            platforms to microservice systems, I focus on code that works 
            under real-world constraints.
          </p>

          <div className="flex flex-wrap gap-3 mb-7 sm:mb-8">
            <motion.a
              href="#products"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium text-sm sm:text-base"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </motion.a>

            <a
              href="#impact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-card/70 text-foreground text-sm sm:text-base hover:border-primary/30 transition-colors"
            >
              Explore Experience
            </a>
          </div>

          <div className="flex flex-wrap gap-2 max-w-3xl">
            {[
              "Frontend Architecture",
              "TypeScript + React",
              "Production Delivery",
              "Debugging Under Constraints",
            ].map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 rounded-md bg-secondary/45 border border-border/60 text-text-secondary text-xs sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-48 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "86px 86px",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
