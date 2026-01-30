import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Contact
            </h1>
            <p className="font-body text-sm text-muted-foreground tracking-wide max-w-2xl mx-auto">
                This contact form is exclusively for business inquiries! Please send me requests regarding autographed cards, user shoots, user meetups and your wishes directly via message on MyDirtyHobby.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
                <div>
                    <h3 className="font-display text-2xl text-foreground mb-4">Contact Information</h3>
                    <div className="font-body text-muted-foreground space-y-2">
                        <p>Marlon & Magdalena Faust Corporation Ltd.</p>
                        <p>Falirou Street 13</p>
                        <p>7550 Kiti, Cyprus</p>
                        <p>Tel.: +49 176 / 61954277</p>
                        <p>Email: info@pornagent.de</p>
                    </div>
                </div>
                <div>
                    <h3 className="font-display text-2xl text-foreground mb-4">Social Media</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram/></a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter/></a>
                    </div>
                </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <form className="space-y-6 glass-nav p-8 rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input id="name" required/>
                    </div>
                    <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required/>
                    </div>
                </div>
                 <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone"/>
                </div>
                <div>
                    <Label htmlFor="website">Website</Label>
                    <Input id="website"/>
                </div>
                <div>
                    <Label>Why do you want to get in touch? *</Label>
                    <div className="space-y-2 mt-2">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="inquiry-press" />
                            <Label htmlFor="inquiry-press">Press / business inquiry</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="inquiry-autograph" />
                            <Label htmlFor="inquiry-autograph">Autograph card / Film</Label>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-start space-x-2">
                        <Checkbox id="gdpr" required />
                        <Label htmlFor="gdpr" className="text-xs text-muted-foreground">
                        I consent to this website storing my submitted information so that my request can be answered. You can find further information in our <a href="#" className="underline">privacy policy</a> and <a href="#" className="underline">legal notice</a>.
                        </Label>
                    </div>
                </div>
                <Button type="submit" className="w-full">Submit</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
