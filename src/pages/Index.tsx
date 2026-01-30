import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Sparkles, Heart, Star, Gift, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stats = [
  { label: "Hair", value: "Blonde" },
  { label: "Eyes", value: "Gray-Blue" },
  { label: "Height", value: "178cm" },
  { label: "Bra Size", value: "95C" },
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
      "I'm not built for an office job. As Lisa says: \"Be honest!\"... Fine. I want sex, sex, and more SEX! I'm done being the shy girl. I'm taking everyone on this journey—every first time included.",
  },
  {
    title: "The Dream",
    icon: Star,
    content:
      "I want to launch my own underwear line for girls with my body type. I've never felt so free. I'm sitting on my bed waiting... so hurry up, okay? ;)",
  },
];

const faqs = [
  {
    question: "My Journey into the Industry",
    answer:
      "Having recently entered the industry, my path has been unconventional. A background of strict upbringing and education limited my personal exploration. Now, I'm embracing the freedom to discover and share my experiences authentically, inviting my audience to join me on this journey of firsts.",
  },
  {
    question: "The Motivation Behind My Work",
    answer:
      "I believe in the power of shared joy and the allure of exploring what was once forbidden. My work is about transforming personal discovery into a shared experience, creating something special and memorable for both myself and my audience.",
  },
  {
    question: "Favorite Scenes to Film",
    answer:
      "The thrill of the new is what excites me most. Every scene that involves a new experience brings a unique and genuine excitement. I am committed to exploring a wide range of scenarios, and this constant novelty is what I enjoy most about filming.",
  },
  {
    question: "On Favorite Positions",
    answer:
      "I find the cowgirl position particularly appealing due to the sense of connection it fosters. The intimacy of eye contact and the shared control create a powerful and enjoyable experience.",
  },
  {
    question: "My Preparation Process",
    answer:
      "Authenticity is key to my preparation. I prioritize spontaneity to ensure my reactions are genuine. When collaborating with a partner, establishing a personal connection is crucial for creating a comfortable and enjoyable atmosphere. While I keep preparations minimal to maintain authenticity, a few days of abstinence can heighten the intensity of the experience.",
  },
  {
    question: "Time Invested Per Video",
    answer:
      "The time invested in each video varies, largely depending on the complexity and spontaneity of the scene. A typical shoot can last anywhere from 30 to 60 minutes, though I'm always willing to extend it if the creative energy is flowing.",
  },
  {
    question: "A Common Misstep in Bed",
    answer:
      "A common oversight is rushing the experience. Intimacy is built through connection, which requires time and attention. I believe extended foreplay and open communication are essential for mutual pleasure. Articulating desires and listening to your partner is the key to a fulfilling encounter.",
  },
  {
    question: "Addressing Industry Prejudices",
    answer:
      "A significant misconception is the idea of exploitation. In reality, every performer I know participates willingly, with all activities mutually agreed upon. It's ironic that pursuing a passion is celebrated in most fields, yet when that passion is sexuality—a fundamental human experience—it often faces unwarranted judgment.",
  },
  {
    question: "A Message to the Critics",
    answer:
      "I encourage critics to look beyond the surface and recognize the humanity in every individual, regardless of their profession. I've found that people in this industry are often incredibly open and self-aware, precisely because they are comfortable with expressing their most intimate selves. We are all human, and my profession does not define my character.",
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
                  src="images/heroimage.jpg"
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
                src="images/image1.jpg"
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
                src="images/image2.jpg"
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
                src="images/image3.jpg"
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
                src="images/image4.jpg"
                alt="Portrait"
                className="w-full h-full object-cover grayscale-hover"
              />
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 md:px-8 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="glass-nav rounded-xl px-6 border-none"
                  >
                    <AccordionTrigger className="font-display text-lg md:text-xl text-foreground hover:no-underline py-6 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </section>

        {/* Wishlist Section */}
        <section className="px-4 md:px-8 max-w-7xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-nav rounded-xl p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <Gift className="w-16 h-16 text-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
              Paulina's wish list
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Want to make me happy? Then take a look at my Amazon wish list!
            </p>
            <a
              href="https://www.amazon.de/hz/wishlist/ls/2SKWZ51HSHLHA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Wishlist
            </a>
          </motion.div>
        </section>

        {/* Newsletter Section */}
        <section className="px-4 md:px-8 max-w-7xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-nav rounded-xl p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <Mail className="w-16 h-16 text-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
              Stay Connected
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
              Subscribe to my newsletter to receive the latest updates, exclusive content, and a glimpse behind the scenes. Don't miss out on what's next in my journey!
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-background/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
};

export default Index;
