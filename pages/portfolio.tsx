import BlogPostCard from 'components/BlogPostCard';
import Container from 'components/Container';
import { projectsQuery } from 'lib/queries';
import { getClient } from 'lib/sanity-server';
import Link from 'next/link';
import React from 'react';

const Portfolio = ({ projects }) => {
  return (
    <Container title="Portfolio – Minh Le">
      <div className="max-w-3xl w-full mx-auto pb-16 text-white">
        <h2 className="text-3xl font-bold">Projects...</h2>

        <div className="grid divide-y divide-dashed divide-gray-600">
          {projects?.map((project) => (
            // <BlogPostCard
            //   key={project._id}
            //   title={project.title}
            //   slug={project.slug.current}
            //   gradient="from-[#D8B4FE] to-[#818CF8]"
            //   content={project.content}
            //   url={project.url}
            //   date={project.date}
            // />
            <>
              <div>
                <Link
                  className="block py-5 text-gray-900 dark:text-gray-200"
                  href={`/portfolio/${project.slug.current}`}
                >
                  {project.title}
                </Link>
              </div>
            </>
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
