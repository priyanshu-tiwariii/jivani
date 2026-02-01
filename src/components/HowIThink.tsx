import { motion } from "framer-motion";

const thinkingFramework = [
  {
    title: "Idea Validation",
    description: "Start with the problem, not the solution. I talk to users, map pain points, and validate demand before writing code.",
  },
  {
    title: "MVP Scoping",
    description: "Cut ruthlessly to core value. If a feature doesn't directly solve the primary pain point, it waits for v2.",
  },
  {
    title: "Feature Prioritization",
    description: "Impact vs. effort matrix, weighted by reversibility. Easy-to-change decisions ship fast; hard-to-reverse decisions get more deliberation.",
  },
  {
    title: "API Design",
    description: "Design for the caller, not the implementer. Consistent naming, predictable behavior, and helpful error messages.",
  },
  {
    title: "Scaling Approach",
    description: "Optimize for the problem you have, not the problem you might have. Measure first, scale second.",
  },
  {
    title: "Iteration Mindset",
    description: "Ship, learn, adapt. Every release is a hypothesis. Data informs the next version.",
  },
];

const HowIThink = () => {
  return (
    <section className="py-section bg-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-headline font-heading font-bold text-foreground mb-4">
            How I Think
          </h2>
          <p className="text-text-secondary text-body-lg max-w-2xl">
            Product decisions follow patterns. Here's the framework I use to move 
            from idea to shipped feature.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {thinkingFramework.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-lg bg-background border border-border hover:border-primary/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary font-mono text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-bold text-foreground">{item.title}</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
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
