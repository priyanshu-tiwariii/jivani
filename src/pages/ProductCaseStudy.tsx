import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProductBySlug } from "@/data/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

const ProductCaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-headline font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20">
        <article className="section-container">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/#products"
              className="inline-flex items-center gap-1.5 text-text-muted hover:text-foreground transition-colors mb-8 sm:mb-10 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 sm:mb-14"
          >
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
              {product.title}
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl">
              {product.tagline}
            </p>
          </motion.header>

          {/* Problem Section */}
          <Section title="The Problem" delay={0.1}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
              <div>
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-2">
                  Problem Definition
                </h4>
                <p className="text-text-secondary leading-relaxed mb-6 text-sm sm:text-base">
                  {product.problem.definition}
                </p>
                
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-2">
                  Target User
                </h4>
                <p className="text-text-secondary leading-relaxed mb-6 text-sm sm:text-base">
                  {product.problem.targetUser}
                </p>
                
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-2">
                  Key Insight
                </h4>
                <blockquote className="text-sm sm:text-base text-foreground/90 italic border-l-2 border-primary/25 pl-3">
                  "{product.problem.insight}"
                </blockquote>
              </div>
              
              <div>
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-2">
                  Pain Points
                </h4>
                <ul className="space-y-2">
                  {product.problem.painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-text-secondary text-sm sm:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Solution Section */}
          <Section title="The Solution" delay={0.2}>
            <p className="text-text-secondary leading-relaxed mb-6 max-w-2xl text-sm sm:text-base">
              {product.solution.overview}
            </p>
            
            <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-3">
              Core Features
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {product.solution.coreFeatures.map((feature, i) => (
                <div key={i} className="p-3 sm:p-4 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-mono shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Architecture Section */}
          <Section title="System Architecture" delay={0.3}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div>
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-2">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.architecture.frontend.map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 bg-secondary rounded text-xs text-secondary-foreground font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-2">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.architecture.backend.map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 bg-secondary rounded text-xs text-secondary-foreground font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="sm:col-span-2 lg:col-span-1">
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-2">
                  Deployment
                </h4>
                <p className="text-text-secondary text-sm">
                  {product.architecture.deployment}
                </p>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-2">
                Database
              </h4>
              <p className="text-text-secondary text-sm">
                {product.architecture.database}
              </p>
            </div>
            
            <ArchitectureDiagram product={product} />
          </Section>

          {/* Engineering Section */}
          <Section title="Engineering Decisions" delay={0.4}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-3">
                  Trade-offs Made
                </h4>
                <ul className="space-y-2">
                  {product.engineering.tradeoffs.map((item, i) => (
                    <li key={i} className="text-text-secondary text-sm leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/70 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-3">
                  Performance
                </h4>
                <ul className="space-y-2">
                  {product.engineering.performance.map((item, i) => (
                    <li key={i} className="text-text-secondary text-sm leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="sm:col-span-2 lg:col-span-1">
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-3">
                  Security
                </h4>
                <ul className="space-y-2">
                  {product.engineering.security.map((item, i) => (
                    <li key={i} className="text-text-secondary text-sm leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/80 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Outcome Section */}
          <Section title="Outcome" delay={0.5}>
            <p className="text-sm sm:text-base text-foreground/90 mb-6 max-w-2xl">
              {product.outcome.summary}
            </p>
            
            {product.outcome.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {product.outcome.metrics.map((metric, i) => (
                  <div key={i} className="p-4 rounded-lg bg-card border border-primary/15 text-center">
                    <span className="text-foreground text-sm font-mono">{metric}</span>
                  </div>
                ))}
              </div>
            )}
          </Section>

          {/* Future Section */}
          <Section title="Future Improvements" delay={0.6}>
            <ul className="space-y-2">
              {product.future.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-text-secondary text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

const Section = ({ 
  title, 
  children, 
  delay = 0 
}: { 
  title: string; 
  children: React.ReactNode; 
  delay?: number;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="mb-12 sm:mb-16"
  >
    <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-5 pb-3 border-b border-border/60">
      {title}
    </h2>
    {children}
  </motion.section>
);

export default ProductCaseStudy;
