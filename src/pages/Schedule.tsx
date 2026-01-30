import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Video, Radio, Calendar } from "lucide-react";

const schedule = [
  {
    days: "Wednesday & Saturday",
    title: "New Video Uploads",
    description: "The Weekly Drop — Fresh exclusive content",
    icon: Video,
    isLive: false,
  },
  {
    days: "Monday — Sunday",
    title: "Live on Webcam",
    description: "1:00 PM - 6:00 PM (Your Local Time)",
    icon: Radio,
    isLive: true,
  },
];

const faqs = [
  {
    question: "Since when?",
    answer:
      "A few months. After years in a strict convent, I'm finally making up for lost time. Every day is a new discovery, and I'm loving every second of this journey.",
  },
  {
    question: "Why Porn?",
    answer:
      "It's the ultimate freedom. No more boarding school rules. Just pure, honest pleasure. I spent years being told what I couldn't do — now I do exactly what I want.",
  },
  {
    question: "Preparation?",
    answer:
      "I stay relaxed, stay experimental, and stay honest. Good lighting, comfortable environment, and most importantly — genuine enthusiasm. That's my secret.",
  },
];

const Schedule = () => {
  // Check if current time is between 1 PM and 6 PM
  const isLiveNow = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 13 && hour < 18;
  };

  const liveStatus = isLiveNow();

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Broadcast Schedule
            </h1>
            <p className="font-body text-sm text-muted-foreground tracking-wide max-w-md mx-auto">
              When and where to find me online
            </p>
          </motion.div>

          {/* Schedule Cards */}
          <div className="space-y-6 mb-16">
            {schedule.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="glass-nav rounded-2xl p-6 md:p-8 hover-scale"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-foreground" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-xl md:text-2xl text-foreground">
                        {item.title}
                      </h3>
                      {item.isLive && liveStatus && (
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                          </span>
                          <span className="font-body text-xs uppercase tracking-luxury text-green-500">
                            Live Now
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="font-body text-sm text-muted-foreground mb-1">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary">
                      <Calendar className="w-4 h-4" />
                      <span className="font-body text-xs uppercase tracking-luxury">
                        {item.days}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
              Frequently Asked
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
                    <AccordionTrigger className="font-display text-lg md:text-xl text-foreground hover:no-underline py-6">
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
        </div>
      </div>
    </PageTransition>
  );
};

export default Schedule;
