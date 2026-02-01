import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="text-text-secondary font-mono text-sm tracking-wider mb-6 uppercase">
            Product Builder Studio
          </p>
          
          <h1 className="text-display font-heading font-bold text-foreground mb-8 text-balance">
            I engineer systems that{" "}
            <span className="text-primary">solve real problems</span>
          </h1>
          
          <p className="text-body-lg text-text-secondary max-w-2xl mb-12 leading-relaxed">
            Full-stack product engineer focused on building scalable infrastructure, 
            developer tools, and collaborative platforms. I think in systems, 
            ship with intention, and measure what matters.
          </p>
          
          <motion.a
            href="#products"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="inline-flex items-center gap-3 text-foreground font-medium group hover:text-primary transition-colors duration-300"
          >
            <span>Explore the Products</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
