import { ExternalLink } from "lucide-react";

const Footer = () => {
  const links = [
    { href: "https://github.com/priyanshu-tiwariii", label: "GitHub" },
    { href: "https://www.linkedin.com/in/priyanshu-tiwarii", label: "LinkedIn" },
    { href: "https://leetcode.com/u/priyanshu-tiwarii/", label: "LeetCode" },
    { href: "mailto:priyanshu-tiwari@hotmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 sm:py-16 border-t border-border/60">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-foreground mb-3 text-sm">Let's Build Something</h3>
            <p className="text-text-secondary text-sm mb-5 max-w-sm leading-relaxed">
              If you're building something meaningful, I'd love to contribute. 
              Open to software engineering opportunities and interesting collaborations.
            </p>
            
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {links.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="text-sm text-text-muted hover:text-primary transition-colors duration-200 flex items-center gap-1"
                >
                  {label}
                  {!href.startsWith("mailto:") && <ExternalLink className="w-3 h-3" />}
                </a>
              ))}
            </div>
          </div>
          
          <div className="sm:text-right">
            <h4 className="text-xs font-mono text-text-muted uppercase tracking-wide mb-3">
              Built With
            </h4>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>React + TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-text-muted text-xs sm:text-sm">
            Jivani {new Date().getFullYear()}
          </p>
          <p className="text-text-muted text-xs sm:text-sm font-mono">
            Building software that ships
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
