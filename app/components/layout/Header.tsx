"use client";

import { Navigation } from "./Navigation";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { ThemeToggle } from "../ThemeToggle";

export function Header() {
  const handleContactClick = () => {
    window.location.href = `mailto:${personalInfo.email}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a
              href="#hero"
              className="text-xl font-bold text-foreground hover:text-foreground/80 transition-colors"
            >
              {personalInfo.name.split(" ")[0]}
            </a>
          </div>
          <Navigation />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hidden sm:flex"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleContactClick}
              className="hidden sm:flex"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

