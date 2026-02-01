import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] sm:min-h-screen flex flex-col justify-center relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-text-secondary font-mono text-xs sm:text-sm tracking-wider mb-4 sm:mb-6 uppercase">
            Software Developer
          </p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-display font-heading font-bold text-foreground mb-6 sm:mb-8 leading-tight">
            Building systems that{" "}
            <span className="text-primary">ship and scale</span>
          </h1>
          
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mb-8 sm:mb-10 leading-relaxed">
            I build production-ready software with attention to architecture, 
            performance, and user experience. From real-time collaboration 
            platforms to microservice systems, I focus on code that works 
            under real-world constraints.
          </p>
          
          <motion.a
            href="#products"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 text-foreground font-medium group hover:text-primary transition-colors duration-200 text-sm sm:text-base"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
          </motion.a>
        </motion.div>
      </div>
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-1/3 -right-48 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
