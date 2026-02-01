import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-bold text-foreground mb-4">Let's Connect</h3>
            <p className="text-text-secondary text-sm mb-6 max-w-md">
              Building something interesting? I'm always open to discussing product engineering, 
              system design, or collaboration opportunities.
            </p>
            
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-md bg-secondary flex items-center justify-center text-text-muted hover:text-primary hover:bg-muted transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:text-right">
            <h4 className="text-sm font-mono text-text-muted uppercase tracking-wider mb-4">
              Technical Specs
            </h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>Built with React + TypeScript</li>
              <li>Styled with Tailwind CSS</li>
              <li>Animated with Framer Motion</li>
              <li>Optimized for performance</li>
              <li>Deployed globally on edge</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Product Builder Studio
          </p>
          <p className="text-text-muted text-sm font-mono">
            Engineered with intention
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
