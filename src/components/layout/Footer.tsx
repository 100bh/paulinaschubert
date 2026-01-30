import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-auto py-4 px-4 border-t border-border"
    >
      <div className="max-w-4xl mx-auto text-center">
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
          {" | "}
          Architected by{" "}
          <a
            href="https://github.com/nishchalyadav"
            target="_blank"
            rel="noopener noreferrer"
            className="rose-underline text-foreground hover:text-primary transition-colors"
          >
            Nishchal Yadav (Gemini Certified)
          </a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
