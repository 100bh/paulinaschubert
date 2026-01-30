import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Sparkles, Heart, Star } from "lucide-react";

const stats = [
  { label: "Hair", value: "Blonde" },
  { label: "Eyes", value: "Gray-Blue" },
  { label: "Height", value: "178cm" },
  { label: "Build", value: "95C" },
  { label: "Orientation", value: "Bisexual" },
];

const chapters = [
  {
    title: "The Convent Rebel",
    icon: Sparkles,
    content:
      "Hey hey! I'm Paulina. A free spirit who just finished high school. I was sent to a convent boarding school—completely shitty until my sister Lisa joined. I shaved my hair off to spite the directors. They can forbid clothes, but I won't wear a wig.",
  },
  {
    title: "The Honest Truth",
    icon: Heart,
    content:
      'I\'m not built for an office job. As Lisa says: "Be honest!"... Fine. I want sex, sex, and more SEX! I\'m done being the shy girl. I\'m taking everyone on this journey—every first time included.',
  },
  {
    title: "The Dream",
    icon: Star,
    content:
      "I want to launch my own underwear line for girls with my body type. I've never felt so free. I'm sitting on my bed waiting... so hurry up, okay? 😉",
  },
];

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-12">
        {/* Hero Section */}
        <section className="px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Left - Sticky Portrait */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:h-fit">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted"
              >
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop"
                  alt="Paulina Schubert"
                  className="w-full h-full object-cover grayscale-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-nav rounded-xl p-4"
                  >
                    <h1 className="font-display text-3xl md:text-4xl text-foreground mb-1">
                      Paulina Schubert
                    </h1>
                    <p className="font-body text-xs uppercase tracking-luxury text-muted-foreground">
                      Content Creator • Model
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 glass-nav rounded-xl p-6"
              >
                <h3 className="font-display text-lg mb-4 text-foreground">Measurements</h3>
                <div className="space-y-3">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="flex justify-between items-center border-b border-border pb-2 last:border-0 last:pb-0"
                    >
                      <span className="font-body text-xs uppercase tracking-luxury text-muted-foreground">
                        {stat.label}
                      </span>
                      <span className="font-body text-sm text-foreground">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right - Story Chapters */}
            <div className="lg:col-span-7 space-y-6">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-8"
              >
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                  My Story
                </h2>
                <p className="font-body text-sm text-muted-foreground mt-2 tracking-wide">
                  From convent walls to complete freedom
                </p>
              </motion.div>

              {/* Chapters */}
              {chapters.map((chapter, index) => (
                <motion.div
                  key={chapter.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-nav rounded-xl p-6 md:p-8 hover-scale"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <chapter.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <h3 className="font-display text-xl md:text-2xl text-foreground">
                      {chapter.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    {chapter.content}
                  </p>
                </motion.div>
              ))}

              {/* Bonus Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bonus-box text-center"
              >
                <p className="font-display text-2xl text-foreground mb-2">500 DC BONUS!</p>
                <p className="font-body text-sm text-muted-foreground mb-4">Use Code:</p>
                <div className="inline-block bg-primary/20 rounded-lg px-6 py-3">
                  <span className="font-body text-lg font-semibold tracking-wider text-foreground">
                    PaulinaSchubert500DC
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bento Grid Gallery */}
        <section className="px-4 md:px-8 max-w-7xl mx-auto mt-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center"
          >
            Gallery
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-12 gap-4 auto-rows-min">
            {/* Large Featured */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-8 md:row-span-2 relative overflow-hidden rounded-xl bg-muted aspect-[4/5] md:aspect-auto md:min-h-[500px] group"
            >
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop"
                alt="Editorial"
                className="w-full h-full object-cover grayscale-hover"
              />
            </motion.div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-4 bg-foreground text-background rounded-xl p-6 flex flex-col justify-center items-center text-center min-h-[200px]"
            >
              <p className="font-display text-lg md:text-xl italic leading-relaxed">
                "Freedom is not given, it's taken."
              </p>
              <span className="font-body text-xs uppercase tracking-luxury mt-4 opacity-60">
                — Paulina
              </span>
            </motion.div>

            {/* Secondary Images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-4 relative overflow-hidden rounded-xl bg-muted aspect-[3/4] group"
            >
              <img
                src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=2000&auto=format&fit=crop"
                alt="Lifestyle"
                className="w-full h-full object-cover grayscale-hover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-1 md:col-span-4 relative overflow-hidden rounded-xl bg-muted aspect-[3/4] group"
            >
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop"
                alt="Fashion"
                className="w-full h-full object-cover grayscale-hover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-2 md:col-span-4 relative overflow-hidden rounded-xl bg-muted aspect-[4/3] group"
            >
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2787&auto=format&fit=crop"
                alt="Portrait"
                className="w-full h-full object-cover grayscale-hover"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
