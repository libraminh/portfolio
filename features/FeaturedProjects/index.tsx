import ArrowRight from "components/ArrowRight";
import BlogPostCard from "components/BlogPostCard";
import { bgGradient } from "helpers/constants";
import Link from "next/link";
import React from "react";

interface Props {
  projects: any;
}

const FeaturedProjects = ({ projects }: Props) => {
  const filterTop3FeaturedProjects = projects.filter((proj) => proj.featured);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
        Featured Projects
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {filterTop3FeaturedProjects?.map((project: any) => (
          <React.Fragment key={project._id}>
            <BlogPostCard
              title={project.title}
              slug={project.slug.current}
              gradient={
                bgGradient[Math.floor(Math.random() * bgGradient.length)]
              }
              content={project.content}
              url={project.url}
              date={project.date}
            />
          </React.Fragment>
        ))}
      </div>

      <div className="mb-16">
        <Link
          href="/portfolio"
          className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all"
        >
          Read all projects
          <ArrowRight />
        </Link>
      </div>
    </>
  );
};

export default FeaturedProjects;
