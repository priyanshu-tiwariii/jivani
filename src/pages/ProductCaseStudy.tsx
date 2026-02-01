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
      <main className="pt-24 pb-section">
        <article className="section-container">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/#products"
              className="inline-flex items-center gap-2 text-text-muted hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Products</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
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
            <h1 className="text-display font-heading font-bold text-foreground mb-4">
              {product.title}
            </h1>
            <p className="text-title text-text-secondary max-w-2xl">
              {product.tagline}
            </p>
          </motion.header>

          {/* Problem Section */}
          <Section title="The Problem" delay={0.1}>
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-3">
                  Problem Definition
                </h4>
                <p className="text-text-secondary leading-relaxed mb-8">
                  {product.problem.definition}
                </p>
                
                <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-3">
                  Target User
                </h4>
                <p className="text-text-secondary leading-relaxed mb-8">
                  {product.problem.targetUser}
                </p>
                
                <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-3">
                  Key Insight
                </h4>
                <blockquote className="text-body-lg text-foreground italic border-l-2 border-primary/30 pl-4">
                  "{product.problem.insight}"
                </blockquote>
              </div>
              
              <div>
                <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-3">
                  Pain Points
                </h4>
                <ul className="space-y-3">
                  {product.problem.painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="text-destructive mt-1">✗</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Solution Section */}
          <Section title="The Solution" delay={0.2}>
            <p className="text-text-secondary leading-relaxed mb-8 max-w-3xl">
              {product.solution.overview}
            </p>
            
            <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
              Core Features
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {product.solution.coreFeatures.map((feature, i) => (
                <div key={i} className="p-4 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary text-sm font-mono">
                      {i + 1}
                    </span>
                    <span className="text-foreground">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Architecture Section */}
          <Section title="System Architecture" delay={0.3}>
            <div className="grid lg:grid-cols-3 gap-6 mb-10">
              <div>
                <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-3">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.architecture.frontend.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary rounded-md text-sm text-secondary-foreground font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-3">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.architecture.backend.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-secondary rounded-md text-sm text-secondary-foreground font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-3">
                  Deployment
                </h4>
                <p className="text-text-secondary text-sm">
                  {product.architecture.deployment}
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-3">
                Database
              </h4>
              <p className="text-text-secondary">
                {product.architecture.database}
              </p>
            </div>
            
            <ArchitectureDiagram product={product} />
          </Section>

          {/* Engineering Section */}
          <Section title="Engineering Decisions" delay={0.4}>
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
                  Trade-offs Made
                </h4>
                <ul className="space-y-3">
                  {product.engineering.tradeoffs.map((item, i) => (
                    <li key={i} className="text-text-secondary text-sm leading-relaxed">
                      <span className="text-yellow-400 mr-2">⚖</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
                  Performance
                </h4>
                <ul className="space-y-3">
                  {product.engineering.performance.map((item, i) => (
                    <li key={i} className="text-text-secondary text-sm leading-relaxed">
                      <span className="text-primary mr-2">⚡</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
                  Security
                </h4>
                <ul className="space-y-3">
                  {product.engineering.security.map((item, i) => (
                    <li key={i} className="text-text-secondary text-sm leading-relaxed">
                      <span className="text-green-400 mr-2">🔒</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Outcome Section */}
          <Section title="Outcome" delay={0.5}>
            <p className="text-body-lg text-foreground mb-8 max-w-3xl">
              {product.outcome.summary}
            </p>
            
            {product.outcome.metrics && (
              <div className="grid md:grid-cols-3 gap-4">
                {product.outcome.metrics.map((metric, i) => (
                  <div key={i} className="p-6 rounded-lg bg-card border border-primary/20 text-center">
                    <span className="text-foreground font-mono">{metric}</span>
                  </div>
                ))}
              </div>
            )}
          </Section>

          {/* Future Section */}
          <Section title="Future Improvements" delay={0.6}>
            <ul className="space-y-3">
              {product.future.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                  <span className="text-primary mt-1">→</span>
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
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="mb-20"
  >
    <h2 className="text-title font-bold text-foreground mb-8 pb-4 border-b border-border">
      {title}
    </h2>
    {children}
  </motion.section>
);

export default ProductCaseStudy;
