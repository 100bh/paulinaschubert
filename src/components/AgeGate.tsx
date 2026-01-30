import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, X } from "lucide-react";

interface AgeGateProps {
  isOpen: boolean;
  onConfirm: () => void;
  onExit?: () => void;
  title?: string;
  description?: string;
}

const AgeGate = ({
  isOpen,
  onConfirm,
  onExit,
  title = "Age-Restricted Content",
  description = "The content within this realm is intended for mature audiences only.",
}: AgeGateProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="age-gate-overlay"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="glass-nav rounded-2xl p-8 md:p-12 max-w-md mx-4 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center"
            >
              <ShieldCheck className="w-8 h-8 text-foreground" />
            </motion.div>

            <h2 className="font-display text-2xl md:text-3xl mb-4 text-foreground">
              {title}
            </h2>
            
            <p className="font-body text-sm text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={onConfirm}
                className="pill-button bg-primary hover:bg-rose-dark text-foreground font-body text-xs uppercase tracking-luxury glow-rose animate-glow"
              >
                I am 18+
              </Button>
              
              {onExit && (
                <Button
                  onClick={onExit}
                  variant="outline"
                  className="pill-button font-body text-xs uppercase tracking-luxury"
                >
                  <X className="w-4 h-4 mr-2" />
                  Exit
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AgeGate;
