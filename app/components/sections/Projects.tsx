"use client";

import { useState, useRef, useEffect, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { ExternalLink, Github, X } from "lucide-react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const expandedCardRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const visibleProjects = projects.filter(project => !project.hidden);

  useOutsideClick(expandedCardRef, () => setActiveProject(null));

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

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    }

    if (activeProject !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeProject]);

  const handleCardClick = (index: number, e: React.MouseEvent) => {
    // Don't expand if clicking on links or buttons
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) {
      return;
    }
    setActiveProject(index);
  };

  return (
    <>
      <AnimatePresence>
        {activeProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 dark:bg-black/40 h-full w-full z-50"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeProject !== null && (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`close-button-${activeProject}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-background rounded-full h-10 w-10 border shadow-lg z-[101]"
              onClick={() => setActiveProject(null)}
            >
              <X className="h-5 w-5" />
            </motion.button>
            <motion.div
              layoutId={`card-${activeProject}-${id}`}
              ref={expandedCardRef}
              className="w-full max-w-3xl h-full md:h-fit md:max-h-[90vh] flex flex-col bg-card border rounded-3xl overflow-hidden shadow-2xl"
            >
              {visibleProjects[activeProject] && (
                <>
                  <CardHeader className="p-6 pb-4">
                    <motion.div
                      layoutId={`title-${activeProject}-${id}`}
                    >
                      <CardTitle className="text-2xl md:text-3xl mb-2">
                        {visibleProjects[activeProject].name}
                      </CardTitle>
                    </motion.div>
                    <motion.div
                      layoutId={`description-${activeProject}-${id}`}
                    >
                      <CardDescription className="text-base">
                        {visibleProjects[activeProject].description}
                      </CardDescription>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col overflow-auto p-6 pt-0">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Details</h4>
                        <ul className="space-y-2">
                          {visibleProjects[activeProject].details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="text-sm md:text-base text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-foreground mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {visibleProjects[activeProject].stack.map((tech, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-sm"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {visibleProjects[activeProject].links && (
                        <div className="flex gap-3 pt-2">
                          {visibleProjects[activeProject].links?.live && (
                            <Button
                              variant="default"
                              size="lg"
                              asChild
                              className="flex-1"
                            >
                              <a
                                href={visibleProjects[activeProject].links?.live}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Live
                              </a>
                            </Button>
                          )}
                          {visibleProjects[activeProject].links?.github && (
                            <Button
                              variant="outline"
                              size="lg"
                              asChild
                              className="flex-1"
                            >
                              <a
                                href={visibleProjects[activeProject].links?.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4 mr-2" />
                                View Code
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </CardContent>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
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
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <motion.div
                  layoutId={`card-${index}-${id}`}
                  onClick={(e) => handleCardClick(index, e)}
                  className="cursor-pointer h-full"
                >
                  <Card className="h-full flex flex-col hover:shadow-xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                  {/* Card hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/0 group-hover:to-primary/5 transition-all duration-500 pointer-events-none" />
                  
                  <CardHeader className="relative z-10">
                    <motion.div layoutId={`title-${index}-${id}`}>
                      <CardTitle className="text-xl mb-2">{project.name}</CardTitle>
                    </motion.div>
                    <motion.div layoutId={`description-${index}-${id}`}>
                      <CardDescription>{project.description}</CardDescription>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col relative z-10">
                    <ul className="space-y-1 mb-4 flex-1">
                      {project.details.slice(0, 2).map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-foreground mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                      {project.details.length > 2 && (
                        <li className="text-sm text-muted-foreground/60 italic">
                          +{project.details.length - 2} more...
                        </li>
                      )}
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}

