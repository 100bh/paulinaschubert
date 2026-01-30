import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Video, Radio, Bell, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NotificationModal } from "@/components/NotificationModal";

const schedule = [
  {
    days: "Wednesday & Saturday",
    title: "New Video Uploads",
    description: "The Weekly Drop — Fresh exclusive content",
    icon: Video,
  },
];

const Schedule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLiveNow = () => {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 13 && hour < 18;
  };

  const liveStatus = isLiveNow();

  return (
    <PageTransition>
      <div className="pt-28 pb-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
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

          <div className="space-y-8">
            {schedule.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="glass-nav rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {item.description} - every {item.days}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-nav rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-4 sm:gap-6 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Radio className="w-6 h-6 text-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-xl md:text-2xl text-foreground">
                      Live on Webcam
                    </h3>
                    {liveStatus && (
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
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <p className="font-body text-sm">
                      Daily from 1:00 PM - 6:00 PM (Your Local Time)
                    </p>
                    <div className="relative group">
                      <HelpCircle className="w-4 h-4 cursor-pointer" />
                      <div className="absolute bottom-full right-0 mb-2 w-48 bg-background border border-border rounded-lg px-3 py-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Live times are automatically adjusted to your current timezone.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center pt-4"
            >
                <p className="font-body text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
                    Want to get notified when I upload new videos or go live? Click the button below and subscribe to get updates directly to your inbox.
                </p>
                <Button onClick={() => setIsModalOpen(true)} size="lg" className="font-bold text-lg">
                    <Bell className="w-5 h-5 mr-2"/>
                    Notify Me
                </Button>
            </motion.div>

          </div>
        </div>
        <NotificationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </PageTransition>
  );
};

export default Schedule;
