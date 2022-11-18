import { PortableText } from '@portabletext/react';
import AuthorInformation from 'components/AuthorInformation';
import BlogPostCard from 'components/BlogPostCard';
import Container from 'components/Container';
import IconLinked from 'components/IconLinked';
import { projectsQuery } from 'lib/queries';
import { getClient } from 'lib/sanity-server';
import Link from 'next/link';
import React from 'react';

const Portfolio = ({ projects }) => {
  return (
    <Container title="Portfolio – Minh Le">
      <div className="max-2-xl md:max-w-5xl w-full mx-auto mb-10">
        <AuthorInformation />
      </div>

      <div className="max-2-xl md:max-w-5xl w-full mx-auto pb-16 text-white">
        <div className="grid md:grid-cols-3 -mx-5 gap-y-10">
          {projects?.map((project) => (
            <div key={project._id}>
              <Link
                className="block group/portfolio text-gray-900 dark:text-gray-200 p-5 relative"
                href={`/portfolio/${project.slug.current}`}
              >
                <div className="flex mb-2 space-x-2 text-lg">
                  {project.title}
                </div>

                <div className="text-sm text-white dark:text-gray-400">
                  <PortableText value={project.content} />
                </div>

                <p className="relative z-10 mt-4 flex items-center text-sm font-medium text-zinc-400 transition group-hover/portfolio:text-teal-500 dark:text-zinc-200">
                  <IconLinked />
                  <span className="ml-2">read more</span>
                </p>

                <div className="absolute inset-0 scale-0 group-hover/portfolio:scale-100 opacity-0 group-hover/portfolio:opacity-100 group-hover/portfolio:bg-zinc-800/50 -z-10 rounded-2xl transition-all"></div>
              </Link>
            </div>
          ))}
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
