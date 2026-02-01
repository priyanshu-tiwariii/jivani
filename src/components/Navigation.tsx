import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#products", label: "Products" },
    { href: "#impact", label: "Impact" },
    { href: "https://github.com", label: "GitHub", external: true },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <nav className="section-container py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-foreground hover:text-primary transition-colors">
          <span className="font-mono text-primary">{"<"}</span>
          PBS
          <span className="font-mono text-primary">{"/>"}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm text-text-secondary hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hello@example.com"
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-border"
        >
          <div className="section-container py-6 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                className="text-text-secondary hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hello@example.com"
              className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium text-center"
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navigation;
