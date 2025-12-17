"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { workExperience } from "@/lib/data";
import { Calendar, MapPin, Building2, ChevronDown, ChevronUp } from "lucide-react";

const INITIAL_VISIBLE_ITEMS = 3;

export function Experience() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Building impactful web applications and leading frontend development
            </p>
          </div>

          {/* Timeline layout */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block"></div>

            <div className="space-y-8">
              {workExperience.map((exp, index) => {
                const isExpanded = expandedItems.has(index);
                const hasMoreMainItems = exp.responsibilities.length > INITIAL_VISIBLE_ITEMS;
                const hasGroupedItems = exp.groupedResponsibilities && exp.groupedResponsibilities.length > 0;
                const hasMoreItems = hasMoreMainItems || hasGroupedItems;
                const visibleResponsibilities = isExpanded
                  ? exp.responsibilities
                  : exp.responsibilities.slice(0, INITIAL_VISIBLE_ITEMS);

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="relative pl-12 md:pl-20"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10"></div>

                    {/* Content card */}
                    <div className="bg-card rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20 overflow-hidden">
                      <div className="p-5 md:p-6">
                        {/* Header */}
                        <div className="mb-4">
                          <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <Building2 className="h-4 w-4" />
                              <span className="font-medium text-foreground">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            {exp.location && (
                              <div className="flex items-center gap-1.5">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Main Responsibilities - Single column */}
                        <div className="mb-4">
                          <ul className="space-y-2 text-base text-muted-foreground">
                            <AnimatePresence mode="wait">
                              {visibleResponsibilities.map((responsibility, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, y: -5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -5 }}
                                  transition={{ duration: 0.2 }}
                                  className="flex items-start gap-2"
                                >
                                  <span className="text-primary mt-1.5 font-bold flex-shrink-0">•</span>
                                  <span className="leading-relaxed">{responsibility}</span>
                                </motion.li>
                              ))}
                            </AnimatePresence>
                          </ul>
                        </div>

                        {/* Grouped Responsibilities (Sub-sections) - Only show when expanded */}
                        {isExpanded && exp.groupedResponsibilities && exp.groupedResponsibilities.length > 0 && (
                          <div className="space-y-4 mb-4">
                            {exp.groupedResponsibilities.map((group, groupIdx) => (
                              <div key={groupIdx} className="border-l-2 border-primary/30 pl-4">
                                <h4 className="font-semibold text-base mb-2 text-foreground">
                                  {group.title}
                                </h4>
                                <ul className="space-y-1.5 text-base text-muted-foreground">
                                  {group.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex items-start gap-2">
                                      <span className="text-primary mt-1.5 font-bold flex-shrink-0">•</span>
                                      <span className="leading-relaxed">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Expand/Collapse button */}
                        {hasMoreItems && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpand(index)}
                            className="mb-4 text-primary hover:text-primary/80 hover:bg-primary/10"
                          >
                            {isExpanded ? (
                              <>
                                <ChevronUp className="h-4 w-4 mr-1" />
                                Show Less
                              </>
                            ) : (
                              <>
                                <ChevronDown className="h-4 w-4 mr-1" />
                                Show More
                              </>
                            )}
                          </Button>
                        )}

                        {/* Tech Stack */}
                        {exp.techStack && exp.techStack.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-4 border-t">
                            {exp.techStack.map((tech, idx) => (
                              <Badge
                                key={idx}
                                variant="secondary"
                                className="text-xs px-2.5 py-1 hover:bg-primary/10 hover:text-primary transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

