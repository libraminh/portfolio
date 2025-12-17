"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Interactive background gradient blob */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-[0.03] transition-opacity duration-300"
        style={{
          background: mousePosition.x > 0 && mousePosition.y > 0
            ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.15), transparent 40%)`
            : 'transparent',
          opacity: mousePosition.x > 0 && mousePosition.y > 0 ? 1 : 0,
        }}
      />

      {/* Decorative static background elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.hidden).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                  {/* Card hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/0 group-hover:to-primary/5 transition-all duration-500 pointer-events-none" />
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-xl mb-2">{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col relative z-10">
                    <ul className="space-y-1 mb-4 flex-1">
                      {project.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-foreground mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="group-hover:border-primary/30 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      {project.links && (
                        <div className="flex gap-2">
                          {project.links.live && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="flex-1 group-hover:border-primary/30 group-hover:text-primary transition-colors"
                            >
                              <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live
                              </a>
                            </Button>
                          )}
                          {project.links.github && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="flex-1 group-hover:border-primary/30 group-hover:text-primary transition-colors"
                            >
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

