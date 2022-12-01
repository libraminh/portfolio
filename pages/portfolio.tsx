import AuthorInformation from "components/AuthorInformation";
import Container from "components/Container";
import IconLinked from "components/IconLinked";
import { bgGradient } from "helpers/constants";
import { projectsQuery } from "lib/queries";
import { getClient } from "lib/sanity-server";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { toPlainText } from "@portabletext/react";
import TextTruncate from "react-text-truncate";
import { motion } from "framer-motion";

const Portfolio = ({ projects }) => {
  const [filterd, setFilterd] = useState("");
  const [projectFiltered, setProjectFiltered] = useState([]);

  useEffect(() => {
    if (filterd.trim().length === 0 || filterd === "all") {
      setProjectFiltered(projects);
      return;
    }

    const filterdProjects = projects?.filter(
      (project) => project.genre === filterd,
    );

    setProjectFiltered(filterdProjects);
  }, [filterd, projects]);

  return (
    <Container title="Portfolio – Minh Le">
      <div className="max-2-xl md:max-w-5xl w-full mx-auto mb-16">
        <AuthorInformation />
      </div>

      <div className="max-2-xl md:max-w-5xl w-full mx-auto pb-16 text-white">
        <ul className="flex space-x-5 mb-5">
          <li
            className="border-2 border-solid border-white px-5 py-1 rounded-full cursor-pointer"
            onClick={() => setFilterd("all")}
          >
            All
          </li>

          <li
            className="border-2 border-solid border-white px-5 py-1 rounded-full cursor-pointer"
            onClick={() => setFilterd("template")}
          >
            Template
          </li>

          <li
            className="border-2 border-solid border-white px-5 py-1 rounded-full cursor-pointer"
            onClick={() => setFilterd("webApp")}
          >
            Web app
          </li>
        </ul>

        <motion.div className="grid md:grid-cols-3 md:-mx-5 gap-8" layout>
          {projectFiltered?.map((project) => (
            <motion.div
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              key={project._id}
            >
              <Link
                className={`${
                  bgGradient[Math.floor(Math.random() * bgGradient.length)]
                } bg-gradient-to-r md:dark:bg-zinc-900 md:bg-transparent block border md:border-0 rounded-2xl md:border-white group/portfolio text-gray-900 dark:text-gray-200 relative p-0.5 md:p-0`}
                href={`/portfolio/${project.slug.current}`}
              >
                <figure className="dark:bg-zinc-900 bg-white p-5 h-full rounded-2xl md:rounded-none">
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
                </figure>

                <div className="absolute inset-0 scale-0 group-hover/portfolio:scale-100 opacity-0 group-hover/portfolio:opacity-100 bg-zinc-100 dark:bg-zinc-800/50 z-10 rounded-2xl transition-all"></div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
};

export async function getStaticProps({ preview = false }) {
  const projects = await getClient(preview).fetch(projectsQuery);

  return { props: { projects } };
}

export default Portfolio;
