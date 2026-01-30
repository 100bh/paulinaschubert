import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import AgeGate from "@/components/AgeGate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Play, X, Check, Clock } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "First Time Series",
    thumbnail: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Behind the Scenes",
    thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Exclusive Content",
    thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Weekend Special",
    thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Private Collection",
    thumbnail: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "New Release",
    thumbnail: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=2000&auto=format&fit=crop",
  },
];

type ModalStep = "closed" | "age" | "form" | "success";

const Videos = () => {
  const navigate = useNavigate();
  const [showAgeGate, setShowAgeGate] = useState(true);
  const [modalStep, setModalStep] = useState<ModalStep>("closed");
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", gender: "" });

  const handleVideoClick = (video: (typeof videos)[0]) => {
    setSelectedVideo(video);
    setModalStep("age");
  };

  const handleAgeConfirm = () => {
    setModalStep("form");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalStep("success");
  };

  const closeModal = () => {
    setModalStep("closed");
    setSelectedVideo(null);
    setFormData({ name: "", email: "", gender: "" });
  };

  return (
    <PageTransition>
      {/* Page Age Gate */}
      <AgeGate
        isOpen={showAgeGate}
        onConfirm={() => setShowAgeGate(false)}
        onExit={() => navigate("/")}
        title="NSFW Content Ahead"
        description="The Video Vault contains mature content intended for adults only. Please confirm your age to continue."
      />

      <div className="min-h-screen pt-28 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Video Vault
            </h1>
            <p className="font-body text-sm text-muted-foreground tracking-wide max-w-md mx-auto">
              Exclusive content from my journey. Click any video to request access.
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleVideoClick(video)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-muted">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center glow-rose">
                      <Play className="w-6 h-6 text-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-display text-lg text-background">{video.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lead-Gen Modal */}
      <AnimatePresence>
        {modalStep !== "closed" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-foreground/20 backdrop-blur-md"
              onClick={closeModal}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative glass-nav rounded-2xl p-8 max-w-md w-full"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Step 1: Age Confirmation */}
              {modalStep === "age" && (
                <div className="text-center">
                  <h3 className="font-display text-2xl mb-4 text-foreground">
                    Age Verification
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-6">
                    Please confirm you are 18 years or older to access this content.
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={handleAgeConfirm}
                      className="pill-button bg-primary hover:bg-rose-dark text-foreground"
                    >
                      Yes, I'm 18+
                    </Button>
                    <Button
                      onClick={closeModal}
                      variant="outline"
                      className="pill-button"
                    >
                      No
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Access Form */}
              {modalStep === "form" && (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <h3 className="font-display text-2xl text-center mb-4 text-foreground">
                    Request Access
                  </h3>
                  <p className="font-body text-sm text-muted-foreground text-center mb-6">
                    Fill in your details to receive {selectedVideo?.title}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <Label className="font-body text-xs uppercase tracking-luxury">
                        Name
                      </Label>
                      <Input
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="mt-2 bg-transparent border-border focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <Label className="font-body text-xs uppercase tracking-luxury">
                        Email
                      </Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="mt-2 bg-transparent border-border focus:border-primary"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <Label className="font-body text-xs uppercase tracking-luxury mb-3 block">
                        Gender
                      </Label>
                      <RadioGroup
                        value={formData.gender}
                        onValueChange={(value) =>
                          setFormData({ ...formData, gender: value })
                        }
                        className="flex gap-4"
                      >
                        {["Male", "Female", "Other"].map((gender) => (
                          <div key={gender} className="flex items-center gap-2">
                            <RadioGroupItem value={gender.toLowerCase()} id={gender} />
                            <Label
                              htmlFor={gender}
                              className="font-body text-sm cursor-pointer"
                            >
                              {gender}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full pill-button bg-primary hover:bg-rose-dark text-foreground"
                  >
                    Submit Request
                  </Button>
                </form>
              )}

              {/* Step 3: Success */}
              {modalStep === "success" && (
                <div className="text-center py-4">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-display text-2xl mb-4 text-foreground">
                    Request Submitted!
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                    <Clock className="w-4 h-4" />
                    <span className="font-body text-sm">24-72 hours processing</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground mb-6">
                    Thank you, {formData.name}! You'll receive an email at{" "}
                    <span className="text-foreground">{formData.email}</span> with
                    access details within 24-72 working hours.
                  </p>
                  <Button
                    onClick={closeModal}
                    className="pill-button bg-primary hover:bg-rose-dark text-foreground"
                  >
                    Close
                  </Button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Videos;
