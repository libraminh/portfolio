"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { personalInfo, professionalSummary } from "@/lib/data";
import { ArrowDown, Download } from "lucide-react";

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/docs/MinhLe_Frontend_Resume.pdf";
    link.download = "MinhLe_Frontend_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScrollToExperience = () => {
    const element = document.querySelector("#experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center py-20 md:py-32 pt-24 relative overflow-hidden"
    >
      <Spotlight />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {personalInfo.name}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-2 flex justify-center"
            >
              <TypewriterEffectSmooth
                words={[
                  { text: "Frontend" },
                  { text: "Developer" },
                  { text: "(Next.js" },
                  { text: "/" },
                  { text: "Wordpress)" },
                ]}
                className="text-xl md:text-2xl text-muted-foreground"
              />
            </motion.div>
            <motion.p
              className="text-lg text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {personalInfo.location}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button size="lg" onClick={handleDownloadCV}>
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
              <Button size="lg" variant="outline" onClick={handleScrollToExperience}>
                View My Work
                <ArrowDown className="h-4 w-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          {/* About Section */}
          <motion.div
            id="about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {professionalSummary}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

