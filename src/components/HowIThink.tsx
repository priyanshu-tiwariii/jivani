import { motion } from "framer-motion";

const thinkingApproach = [
  {
    title: "Start with Reproduction",
    description: "When something breaks, I reproduce it first. Then trace execution flow step by step. Console logs first, then call stack tracing. Understanding the flow reveals the flaw.",
  },
  {
    title: "Systems Before Features",
    description: "Features are temporary. Systems remain. I ask: What happens when two users act at once? What if this service crashes? What if state desynchronizes? I design for edge cases early.",
  },
  {
    title: "Clarity Before Optimization",
    description: "I prefer clear architecture over premature performance tuning. Working systems can be optimized. Confusing systems collapse under growth.",
  },
  {
    title: "Structured Debugging",
    description: "Console logs are not random. I isolate layers: UI, State, API, Database. Then narrow the fault. It is a process of elimination.",
  },
  {
    title: "Ship, Reflect, Improve",
    description: "I do not aim for perfect architecture in version one. I aim for working architecture that can evolve. Iteration is part of design.",
  },
];

const HowIThink = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card/20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-3">
            How I Think
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-2xl">
            My approach to building and debugging software systems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {thinkingApproach.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-4 rounded-lg bg-background border border-border"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-primary font-mono text-xs">
                  {index + 1}
                </span>
                <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
              </div>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIThink;
