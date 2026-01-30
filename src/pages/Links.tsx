import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import AgeGate from "@/components/AgeGate";
import { ExternalLink } from "lucide-react";

const links = [
  {
    name: "OnlyFans",
    url: "https://onlyfans.com",
    icon: "🔥",
    isGlow: true,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: "📸",
    isGlow: false,
  },
  {
    name: "Snapchat",
    url: "https://snapchat.com",
    icon: "👻",
    isGlow: false,
  },
  {
    name: "Telegram",
    url: "https://telegram.org",
    icon: "✈️",
    isGlow: false,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com",
    icon: "𝕏",
    isGlow: false,
  },
];

const Links = () => {
  const [showAgeGate, setShowAgeGate] = useState(true);

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <PageTransition>
      {/* Age Gate for Links Page */}
      <AgeGate
        isOpen={showAgeGate}
        onConfirm={() => setShowAgeGate(false)}
        onExit={() => window.history.back()}
        title="Age-Restricted Content"
        description="The content within this realm is intended for mature audiences only."
      />

      <div className="min-h-screen pt-28 pb-12 px-4 flex flex-col items-center justify-center">
        <div className="w-full max-w-md mx-auto">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 glow-rose"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                alt="Paulina Schubert"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-2">
              Paulina Schubert
            </h1>
            <p className="font-body text-xs uppercase tracking-luxury text-muted-foreground">
              Content Creator • Model
            </p>
          </motion.div>

          {/* Links Stack */}
          <div className="space-y-4">
            {links.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                onClick={() => handleLinkClick(link.url)}
                className={`w-full glass-nav rounded-xl p-4 flex items-center justify-between group transition-all duration-300 hover:scale-[1.02] ${
                  link.isGlow ? "glow-rose animate-glow border-primary" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{link.icon}</span>
                  <span className="font-body text-sm uppercase tracking-luxury text-foreground">
                    {link.name}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </motion.button>
            ))}
          </div>

          {/* Footer Branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="font-body text-xs uppercase tracking-luxury text-muted-foreground">
              Developed by{" "}
              <a
                href="https://zenxth.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="rose-underline text-foreground hover:text-primary transition-colors"
              >
                Zenith
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Links;
