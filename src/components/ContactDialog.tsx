import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Linkedin } from "lucide-react";

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDialog = ({ isOpen, onClose }: ContactDialogProps) => {
  const contactOptions = [
    {
      icon: Mail,
      label: "Email",
      description: "Send me an email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=priyanshu-tiwari@hotmail.com",
      color: "text-primary",
      bgColor: "bg-secondary",
      hoverBg: "hover:bg-muted",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      description: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/priyanshu-tiwarii",
      color: "text-primary",
      bgColor: "bg-secondary",
      hoverBg: "hover:bg-muted",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            <div className="w-full max-w-[calc(100vw-2rem)] sm:max-w-md p-4 sm:p-6 rounded-lg bg-card border border-border shadow-2xl">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h2 className="text-xl font-heading font-bold text-foreground mb-1">
                    Let's Connect
                  </h2>
                  <p className="text-sm text-text-secondary">
                    Choose how you'd like to reach out
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-md hover:bg-secondary transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5 text-text-muted" />
                </button>
              </div>

              <div className="space-y-3">
                {contactOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <a
                      key={option.label}
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onClose}
                      className={`flex items-center gap-4 p-4 rounded-lg border border-border ${option.bgColor} ${option.hoverBg} transition-all duration-200 group`}
                    >
                      <div className="p-2.5 rounded-md bg-accent/50">
                        <Icon className={`w-5 h-5 ${option.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                          {option.label}
                        </h3>
                        <p className="text-xs text-text-muted">
                          {option.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactDialog;
