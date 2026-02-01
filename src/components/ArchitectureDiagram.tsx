import { type ProductCaseStudy } from "@/data/products";

interface ArchitectureDiagramProps {
  product: ProductCaseStudy;
}

const ArchitectureDiagram = ({ product }: ArchitectureDiagramProps) => {
  return (
    <div className="p-8 rounded-lg bg-card border border-border">
      <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-6">
        System Overview
      </h4>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
        {/* Client Layer */}
        <DiagramBox title="Client Layer" color="primary">
          <div className="space-y-1 text-xs text-text-secondary">
            {product.architecture.frontend.slice(0, 2).map((tech, i) => (
              <div key={i}>{tech}</div>
            ))}
          </div>
        </DiagramBox>
        
        <Arrow />
        
        {/* API Layer */}
        <DiagramBox title="API Gateway" color="accent">
          <div className="text-xs text-text-secondary">
            REST / WebSocket
          </div>
        </DiagramBox>
        
        <Arrow />
        
        {/* Service Layer */}
        <DiagramBox title="Service Layer" color="secondary">
          <div className="space-y-1 text-xs text-text-secondary">
            {product.architecture.backend.slice(0, 2).map((tech, i) => (
              <div key={i}>{tech}</div>
            ))}
          </div>
        </DiagramBox>
        
        <Arrow />
        
        {/* Data Layer */}
        <DiagramBox title="Data Layer" color="muted">
          <div className="text-xs text-text-secondary text-center">
            {product.architecture.database.split(",")[0]}
          </div>
        </DiagramBox>
      </div>
      
      {/* Deployment info */}
      <div className="mt-8 pt-6 border-t border-border flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse-subtle" />
        <span className="text-xs text-text-muted font-mono">
          Deployed: {product.architecture.deployment.split(",")[0]}
        </span>
      </div>
    </div>
  );
};

const DiagramBox = ({ 
  title, 
  color, 
  children 
}: { 
  title: string; 
  color: "primary" | "accent" | "secondary" | "muted"; 
  children: React.ReactNode;
}) => {
  const colorClasses = {
    primary: "border-primary/30 bg-primary/5",
    accent: "border-accent/30 bg-accent/5",
    secondary: "border-secondary bg-secondary/50",
    muted: "border-muted bg-muted/50",
  };

  return (
    <div className={`p-4 rounded-lg border-2 ${colorClasses[color]} min-w-[140px]`}>
      <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">
        {title}
      </div>
      {children}
    </div>
  );
};

const Arrow = () => (
  <div className="text-text-muted hidden lg:block">
    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="rotate-0 lg:rotate-0">
      <path 
        d="M0 10H35M35 10L25 4M35 10L25 16" 
        stroke="currentColor" 
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default ArchitectureDiagram;
