import { Github, Mail } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {personalInfo.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {personalInfo.title}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              aria-label="GitHub"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              aria-label="Email"
            >
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

