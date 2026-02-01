import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-headline font-heading font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-text-secondary text-body-lg max-w-2xl">
            Each product represents a complete journey from problem identification 
            to shipped solution. Click through for full case studies.
          </p>
        </motion.div>

        <div className="space-y-8">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/products/${product.slug}`}
                className="block group"
              >
                <article className="p-8 lg:p-10 rounded-lg bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-accent">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wider ${
                          product.status === "shipped" 
                            ? "bg-primary/20 text-primary" 
                            : product.status === "in-progress"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {product.status}
                        </span>
                        <span className="text-text-muted text-sm font-mono">{product.year}</span>
                      </div>
                      
                      <h3 className="text-title font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {product.title}
                      </h3>
                      
                      <p className="text-text-secondary mb-6 max-w-xl">
                        {product.tagline}
                      </p>
                      
                      <p className="text-text-muted text-sm leading-relaxed max-w-xl">
                        {product.problem.definition}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-text-muted group-hover:text-primary transition-colors duration-300">
                      <span className="text-sm font-medium">View Case Study</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Tech stack preview */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {[...product.architecture.frontend.slice(0, 2), ...product.architecture.backend.slice(0, 2)].map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-secondary rounded text-xs font-mono text-secondary-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
