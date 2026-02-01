import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-3">
            Featured Projects
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-2xl">
            Each project represents a complete journey from problem identification to shipped solution.
          </p>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {products.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                to={`/products/${product.slug}`}
                className="block group"
              >
                <article className="p-5 sm:p-6 lg:p-8 rounded-lg bg-card border border-border hover:border-primary/25 transition-all duration-200">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-0.5 rounded text-xs font-mono uppercase tracking-wide ${
                          product.status === "shipped" 
                            ? "bg-primary/15 text-primary" 
                            : product.status === "in-progress"
                            ? "bg-yellow-500/15 text-yellow-400"
                            : "bg-muted text-muted-foreground"
                        }`}>
                          {product.status}
                        </span>
                        <span className="text-text-muted text-xs font-mono">{product.year}</span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-1.5">
                        {product.title}
                      </h3>
                      
                      <p className="text-text-secondary text-sm sm:text-base mb-4 line-clamp-2">
                        {product.tagline}
                      </p>
                      
                      <p className="text-text-muted text-sm leading-relaxed line-clamp-2 hidden sm:block">
                        {product.problem.definition}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-text-muted group-hover:text-primary transition-colors duration-200 shrink-0">
                      <span className="text-sm font-medium">View Details</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </div>
                  </div>
                  
                  {/* Tech stack preview */}
                  <div className="mt-5 pt-4 border-t border-border/60">
                    <div className="flex flex-wrap gap-1.5">
                      {[...product.architecture.frontend.slice(0, 2), ...product.architecture.backend.slice(0, 2)].map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-secondary/80 rounded text-xs font-mono text-secondary-foreground">
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
