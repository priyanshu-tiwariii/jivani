import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ContactDialog from "./ContactDialog";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const links = [
    { href: "#products", label: "Projects" },
    { href: "#impact", label: "Experience" },
    { href: "https://github.com/priyanshu-tiwariii", label: "GitHub", external: true },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/40"
      >
        <nav className="section-container py-3 sm:py-4 flex items-center justify-between">
          <Link to="/" className="font-semibold text-foreground hover:text-primary transition-colors text-sm sm:text-base">
            Jivani
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm text-text-secondary hover:text-foreground transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors duration-150"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 text-foreground hover:text-primary transition-colors"
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
            <div className="section-container py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setIsOpen(false)}
                  className="text-text-secondary hover:text-foreground transition-colors duration-150 py-1"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsContactOpen(true);
                }}
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium text-center mt-2"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </motion.header>

      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Navigation;
