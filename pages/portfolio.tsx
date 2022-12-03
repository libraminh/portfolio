import AuthorInformation from "components/AuthorInformation";
import Container from "components/Container";
import IconLinked from "components/IconLinked";
import { bgGradient } from "helpers/constants";
import { projectsQuery } from "lib/queries";
import { getClient } from "lib/sanity-server";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

import { toPlainText } from "@portabletext/react";
import TextTruncate from "react-text-truncate";
import { AnimatePresence, motion } from "framer-motion";

import { DrawingPinFilledIcon } from "@radix-ui/react-icons";

const Portfolio = ({ projects }) => {
  const [filterd, setFilterd] = useState("all");
  const [projectFiltered, setProjectFiltered] = useState([]);

  const activeNav = useCallback(
    (type: string) => {
      if (type !== filterd) return;
      return "bg-gray-600 dark:bg-white text-white dark:text-black";
    },
    [filterd],
  );

  useEffect(() => {
    const sortFeaturedProjects = projects?.reduce(
      (acc, current) =>
        current.featured ? [current, ...acc] : [...acc, current],
      [],
    );

    if (filterd.trim().length === 0 || filterd === "all") {
      setProjectFiltered(sortFeaturedProjects);
      return;
    }

    const filterdProjects = sortFeaturedProjects?.filter((project) =>
      project.genre.includes(filterd),
    );
    setProjectFiltered(filterdProjects);
  }, [filterd, projects]);

  return (
    <Container title="Portfolio – Minh Le">
      <div className="max-2-xl md:max-w-5xl w-full mx-auto mb-16">
        <AuthorInformation />
      </div>

      <div className="max-2-xl md:max-w-5xl w-full mx-auto pb-16 dark:text-white text-gray-600">
        <ul className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 mb-10">
          <Tooltip.Provider delayDuration={200}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <li
                  className={`border-2 border-solid border-gray-600 dark:border-white text-center inline-flex items-center justify-center px-5 py-3 md:py-1 rounded-full cursor-pointer ${activeNav(
                    "all",
                  )}`}
                  onClick={() => setFilterd("all")}
                >
                  All
                </li>
              </Tooltip.Trigger>

              <Tooltip.Portal>
                <Tooltip.Content
                  className="dark:bg-white/20 dark:text-white px-5 py-2 rounded-full text-xs"
                  sideOffset={5}
                >
                  Show all type of projects.
                  <Tooltip.Arrow className="TooltipArrow" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>

          <Tooltip.Provider delayDuration={200}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <li
                  className={`border-2 border-solid border-gray-600 dark:border-white text-center inline-flex items-center justify-center px-5 py-3 md:py-1 rounded-full cursor-pointer ${activeNav(
                    "template",
                  )}`}
                  onClick={() => setFilterd("template")}
                >
                  Template
                </li>
              </Tooltip.Trigger>

              <Tooltip.Portal>
                <Tooltip.Content
                  className="dark:bg-white/20 dark:text-white px-5 py-2 rounded-full text-xs"
                  sideOffset={5}
                >
                  Show all template projects. (HTML/CSS)
                  <Tooltip.Arrow className="TooltipArrow" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>

          <Tooltip.Provider delayDuration={200}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <li
                  className={`border-2 border-solid border-gray-600 dark:border-white text-center inline-flex items-center justify-center px-5 py-3 md:py-1 rounded-full cursor-pointer ${activeNav(
                    "webApp",
                  )}`}
                  onClick={() => setFilterd("webApp")}
                >
                  Web app
                </li>
              </Tooltip.Trigger>

              <Tooltip.Portal>
                <Tooltip.Content
                  className="dark:bg-white/20 dark:text-white px-5 py-2 rounded-full text-xs"
                  sideOffset={5}
                >
                  Show all non-template projects.
                  <Tooltip.Arrow className="TooltipArrow" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </ul>

        <div className="grid md:grid-cols-3 md:-mx-5 gap-8">
          <AnimatePresence>
            {projectFiltered?.map((project) => (
              <motion.div
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ overflow: "hidden" }}
                key={project._id}
              >
                <Link
                  className={`${
                    bgGradient[Math.floor(Math.random() * bgGradient.length)]
                  } bg-gradient-to-r md:dark:bg-zinc-900 md:bg-transparent block border md:border-0 rounded-2xl md:border-white group/portfolio text-gray-900 dark:text-gray-200 relative p-0.5 md:p-0`}
                  href={`/portfolio/${project.slug.current}`}
                >
                  <motion.figure className="dark:bg-zinc-900 bg-white p-5 h-full rounded-2xl md:rounded-none">
                    <div className="flex mb-2 space-x-2 text-lg relative z-20">
                      {project.title}
                    </div>

                    {project?.content ? (
                      <div className="text-sm text-gray-600 dark:text-gray-400 relative z-20">
                        <TextTruncate
                          line={2}
                          element="span"
                          truncateText="…"
                          text={toPlainText(project?.content)}
                        />
                      </div>
                    ) : null}

                    <p className="relative z-20 mt-4 flex items-center text-sm font-medium text-zinc-500 transition group-hover/portfolio:text-teal-500 dark:text-zinc-200">
                      <IconLinked />
                      <span className="ml-2">read more</span>
                    </p>
                  </motion.figure>

                  {project.featured ? (
                    <div className="rounded-full flex items-center justify-center md:border md:border-teal-500 absolute top-2 right-2 p-1.5 z-50">
                      <DrawingPinFilledIcon className="text-teal-500" />
                    </div>
                  ) : null}

                  <div className="absolute inset-0 scale-0 group-hover/portfolio:scale-100 opacity-0 group-hover/portfolio:opacity-100 bg-zinc-100 dark:bg-zinc-800/50 z-10 rounded-2xl transition-all"></div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticProps({ preview = false }) {
  const projects = await getClient(preview).fetch(projectsQuery);

  return { props: { projects } };
}

export default Portfolio;
