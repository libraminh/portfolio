import ArrowRight from "components/ArrowRight";
import BlogPostCard from "components/BlogPostCard";
import { bgGradient } from "helpers/constants";
import Link from "next/link";
import React from "react";

interface Props {
  projects: any;
}

const FeaturedProjects = ({ projects }: Props) => {
  const filterTop3FeaturedProjects = projects.filter(
    (proj) => proj.attributes.featured
  );

  console.log("filterTop3FeaturedProjects", filterTop3FeaturedProjects);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
        Featured Projects
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {filterTop3FeaturedProjects?.map((project: any) => (
          <React.Fragment key={project.attributes.uid}>
            <BlogPostCard
              title={project.attributes.name}
              slug={project.attributes.slug}
              gradient={
                bgGradient[Math.floor(Math.random() * bgGradient.length)]
              }
              content={project.attributes.description}
              url={project.attributes.url}
              date={project.attributes.date}
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
