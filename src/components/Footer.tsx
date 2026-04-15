import { Code2, ExternalLink, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const sections = [
    {
      title: "Work",
      items: [
        { href: "#products", label: "Featured Projects" },
        { href: "#impact", label: "Experience" },
        { href: "#evolution", label: "Engineering Evolution" },
      ],
    },
    {
      title: "Capabilities",
      items: [
        { label: ".NET + C# APIs" },
        { label: "React Interfaces" },
        { label: "Azure Delivery" },
        { label: "System Design" },
      ],
    },
    {
      title: "Resources",
      items: [
        { href: "https://github.com/priyanshu-tiwariii", label: "GitHub", external: true },
        { href: "https://leetcode.com/u/priyanshu-tiwarii/", label: "LeetCode", external: true },
        { href: "mailto:priyanshu-tiwari@hotmail.com", label: "Email" },
      ],
    },
  ];

  const socialLinks = [
    { href: "https://github.com/priyanshu-tiwariii", label: "GitHub", icon: Github },
    { href: "https://www.linkedin.com/in/priyanshu-tiwarii", label: "LinkedIn", icon: Linkedin },
    { href: "https://leetcode.com/u/priyanshu-tiwarii/", label: "LeetCode", icon: Code2 },
    { href: "mailto:priyanshu-tiwari@hotmail.com", label: "Email", icon: Mail },
  ];

  return (
    <footer className="footer-premium-texture relative overflow-hidden py-14 sm:py-16 lg:py-20 border-t border-border/60">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <p className="footer-watermark">JIVANI</p>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 lg:gap-10">
          <div className="xl:col-span-2">
            <h3 className="font-semibold text-foreground mb-3 text-base">Let's Build Something</h3>
            <p className="text-text-secondary text-base sm:text-lg mb-7 max-w-xl leading-relaxed">
              Building software that performs under real constraints, from product surfaces to backend reliability.
              Open to meaningful engineering roles and high-accountability teams.
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="text-sm text-text-muted hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                  {!href.startsWith("mailto:") && <ExternalLink className="w-3 h-3" />}
                </a>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-mono text-text-muted uppercase tracking-[0.16em] mb-3">
                {section.title}
              </h4>
              <ul className="space-y-1.5">
                {section.items.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-text-secondary hover:text-foreground transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-sm text-text-secondary/90">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-mono text-text-muted uppercase tracking-[0.16em] mb-3">
              Built With
            </h4>
            <ul className="space-y-1.5 text-sm text-text-secondary">
              <li>React + TypeScript</li>
              <li>.NET + Azure</li>
              <li>Tailwind + Framer Motion</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-text-muted text-xs sm:text-sm">
            Jivani {new Date().getFullYear()}
          </p>

          <p className="text-xs sm:text-sm font-mono text-text-secondary/95">
            Open to impactful engineering opportunities
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
