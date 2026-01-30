import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Flame, Instagram, Youtube, Video, Twitter, Heart } from "lucide-react";

const links = [
  {
    name: "OnlyFans",
    url: "https://onlyfans.com/paulinaschubertt",
    icon: Heart,
    isGlow: true,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/paaulinaschubert/",
    icon: Instagram,
    isGlow: false,
  },
  {
    name: "TikTok",
    url: "https://tiktok.com",
    icon: Video,
    isGlow: false,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@paulinaschubert",
    icon: Youtube,
    isGlow: false,
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/SchubertPaulina",
    icon: Twitter,
    isGlow: false,
  },
];

const Links = () => {
  return (
    <PageTransition>
      {/* Background Image with Blur Overlay */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center -z-20"
        style={{ backgroundImage: "url('images/image1.jpg')" }}
      />
      <div className="fixed inset-0 w-full h-full bg-background/60 backdrop-blur-md -z-10" />

      <div className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-12 px-4 md:px-8 z-10">
        <div className="max-w-md w-full text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: "spring" }}
          >
            <img
              src="images/heroimage.jpg"
              alt="Paulina Schubert"
              className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-primary/50 object-cover shadow-lg"
            />
          </motion.div>

          {/* Name and Handle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="font-display text-3xl text-foreground">
              Paulina Schubert
            </h1>
            <p className="font-body text-sm text-muted-foreground mt-1 tracking-wide">
              Content Creator ✧ Model
            </p>
          </motion.div>

          {/* Links Stack with enhanced animations */}
          <div className="space-y-4 mt-8">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full glass-nav rounded-2xl p-4 flex items-center group transition-colors duration-300 ${
                  link.isGlow
                    ? "glow-rose animate-glow border-primary/80"
                    : "border-transparent"
                }`}
              >
                <div className="flex-1 flex items-center gap-5">
                  <link.icon className="w-7 h-7 text-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]" />
                  <span className="font-body text-base uppercase tracking-luxury text-foreground">
                    {link.name}
                  </span>
                </div>
                {link.isGlow && (
                  <Flame className="w-5 h-5 text-primary animate-pulse" />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Links;
