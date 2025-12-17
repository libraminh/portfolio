"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LinkPreview } from "@/components/ui/link-preview";
import { skills } from "@/lib/data";
import {
  Code,
  Database,
  Palette,
  FileCheck,
  Wrench,
  Globe,
  Server,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Frontend & Frameworks": <Code className="h-5 w-5" />,
  "State & Data Management": <Database className="h-5 w-5" />,
  "UI & Styling": <Palette className="h-5 w-5" />,
  "Forms & Validation": <FileCheck className="h-5 w-5" />,
  "Tooling & Quality": <Wrench className="h-5 w-5" />,
  "CMS & Platforms": <Globe className="h-5 w-5" />,
  "Backend (Supporting)": <Server className="h-5 w-5" />,
};

// Mapping of skills to their official documentation URLs
const skillUrls: Record<string, string> = {
  // Frontend & Frameworks
  "React": "https://react.dev",
  "Next.js": "https://nextjs.org",
  "TypeScript": "https://www.typescriptlang.org",
  "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "Vue.js": "https://vuejs.org",
  
  // State & Data Management
  "Zustand": "https://zustand-demo.pmnd.rs",
  "React Query": "https://tanstack.com/query",
  "Redux Toolkit": "https://redux-toolkit.js.org",
  "React Context": "https://react.dev/reference/react/useContext",
  
  // UI & Styling
  "Tailwind CSS": "https://tailwindcss.com",
  "Shadcn/UI": "https://ui.shadcn.com",
  "MUI": "https://mui.com",
  "Ant Design": "https://ant.design",
  "Vuetify": "https://vuetifyjs.com",
  
  // Forms & Validation
  "React Hook Form": "https://react-hook-form.com",
  "Yup": "https://github.com/jquense/yup",
  
  // Tooling & Quality
  "Vite": "https://vitejs.dev",
  "Webpack": "https://webpack.js.org",
  "Turbopack": "https://turbo.build/pack",
  "Jest": "https://jestjs.io",
  "SonarQube": "https://www.sonarsource.com/products/sonarqube",
  "Git": "https://git-scm.com",
  
  // CMS & Platforms
  "WordPress": "https://wordpress.org",
  "ACF": "https://www.advancedcustomfields.com",
  "Elementor": "https://elementor.com",
  "HubSpot": "https://www.hubspot.com",
  
  // Backend (Supporting)
  "Node.js": "https://nodejs.org",
  "NestJS": "https://nestjs.com",
  "MongoDB": "https://www.mongodb.com",
  "Firebase": "https://firebase.google.com",
};

// Helper function to get URL for a skill, with fallback to search
const getSkillUrl = (skill: string): string => {
  return skillUrls[skill] || `https://www.google.com/search?q=${encodeURIComponent(skill)}`;
};

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications
            </p>
          </div>
          
          <div className="space-y-0 bg-card rounded-lg border shadow-sm overflow-hidden">
            {skills.map((category, index) => {
              const icon = categoryIcons[category.category] || <Code className="h-5 w-5" />;
              const isLast = index === skills.length - 1;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="group hover:bg-muted/50 transition-colors duration-200">
                    <div className="px-6 py-5 md:px-8 md:py-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        {/* Category Header */}
                        <div className="flex items-center gap-4 min-w-0 flex-shrink-0">
                          <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors flex-shrink-0">
                            {icon}
                          </div>
                          <h3 className="text-lg md:text-xl font-semibold text-foreground">
                            {category.category}
                          </h3>
                        </div>
                        
                        {/* Skills List */}
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {category.skills.map((skill, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.2, delay: index * 0.05 + idx * 0.03 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <LinkPreview
                                url={getSkillUrl(skill)}
                                className="inline-block"
                              >
                                <Badge
                                  variant="secondary"
                                  className="px-3 py-1.5 text-sm font-medium cursor-pointer hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all"
                                >
                                  {skill}
                                </Badge>
                              </LinkPreview>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {!isLast && <Separator className="mx-6 md:mx-8" />}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

