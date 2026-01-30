import { useState, useRef } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, User, Users, Heart, Sparkles, X, Check } from "lucide-react";

const genderOptions = [
  { value: "man", label: "Man", icon: User },
  { value: "woman", label: "Woman", icon: Heart },
  { value: "pair", label: "Pair", icon: Users },
  { value: "trans", label: "Trans", icon: Sparkles },
];

const Partners = () => {
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [formData, setFormData] = useState({
    socialHandle: "",
    age: "",
    location: "",
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setUploadedFile(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setUploadedFile(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-28 pb-12 px-4 md:px-8 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-nav rounded-2xl p-12 max-w-md text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="font-display text-3xl text-foreground mb-4">
              Application Received
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-8">
              Thank you for your interest! We'll review your application and get
              back to you within 48-72 hours.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ socialHandle: "", age: "", location: "" });
                setSelectedGender("");
                setUploadedFile(null);
              }}
              className="pill-button bg-primary hover:bg-rose-dark text-foreground"
            >
              Submit Another
            </Button>
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-12 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <span className="font-body text-xs uppercase tracking-luxury text-primary mb-4 block">
              Casting Call
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Turn Partners
            </h1>
            <p className="font-body text-sm text-muted-foreground tracking-wide max-w-md mx-auto">
              Interested in collaborating? Apply below and let's create something
              beautiful together.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-nav rounded-2xl p-8 md:p-10 space-y-8"
          >
            {/* Gender Selection */}
            <div>
              <Label className="font-body text-xs uppercase tracking-luxury mb-4 block">
                I am a...
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {genderOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setSelectedGender(option.value)}
                    className={`pill-button flex items-center justify-center gap-2 py-3 ${
                      selectedGender === option.value ? "active" : ""
                    }`}
                  >
                    <option.icon className="w-4 h-4" />
                    <span className="font-body text-xs uppercase tracking-luxury">
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <Label className="font-body text-xs uppercase tracking-luxury">
                  Social Media Handle
                </Label>
                <Input
                  value={formData.socialHandle}
                  onChange={(e) =>
                    setFormData({ ...formData, socialHandle: e.target.value })
                  }
                  required
                  className="mt-2 bg-transparent border-border focus:border-primary"
                  placeholder="@yourusername"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="font-body text-xs uppercase tracking-luxury">
                    Age
                  </Label>
                  <Input
                    type="number"
                    min="18"
                    max="99"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                    required
                    className="mt-2 bg-transparent border-border focus:border-primary"
                    placeholder="21"
                  />
                </div>

                <div>
                  <Label className="font-body text-xs uppercase tracking-luxury">
                    Location
                  </Label>
                  <Input
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    required
                    className="mt-2 bg-transparent border-border focus:border-primary"
                    placeholder="City, Country"
                  />
                </div>
              </div>
            </div>

            {/* File Upload */}
            <div>
              <Label className="font-body text-xs uppercase tracking-luxury mb-4 block">
                Verification / Portfolio
              </Label>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                  isDragging
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileSelect}
                  className="hidden"
                />

                {uploadedFile ? (
                  <div className="flex items-center justify-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="font-body text-sm text-foreground">
                      {uploadedFile.name}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setUploadedFile(null);
                      }}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
                    <p className="font-body text-sm text-muted-foreground">
                      Drag & drop or{" "}
                      <span className="text-primary">browse</span>
                    </p>
                    <p className="font-body text-xs text-muted-foreground mt-1">
                      Images or PDF up to 10MB
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={!selectedGender}
              className="w-full pill-button bg-primary hover:bg-rose-dark text-foreground font-body text-xs uppercase tracking-luxury py-6 glow-rose animate-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Application
            </Button>
          </motion.form>
        </div>
      </div>
    </PageTransition>
  );
};

export default Partners;
