import Container from 'components/Container';
import { mdxToHtml } from 'lib/mdx';
import { projectQuery, projectsSlugsQuery } from 'lib/queries';
import { getClient, sanityClient } from 'lib/sanity-server';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import Image from 'next/image';

// Barebones lazy-loaded image component
const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <div className="relative">
      <Image
        fill
        src={urlBuilder()
          .image(value)
          .width(isInline ? 100 : 800)
          .fit('max')
          .auto('format')
          .url()}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? 'inline-block' : 'block',

          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height
        }}
      />
    </div>
  );
};

const components = {
  types: {
    image: SampleImageComponent
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  }
};

const PortfolioPage = ({ project }) => {
  return (
    <Container title={`Portfolio | ${project.title}`}>
      <div className="max-w-3xl w-full mx-auto pb-16 text-white space-y-5">
        <div className="flex justify-between space-x-5">
          <h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white flex-1">
            {project.title}
          </h1>

          <div className="basis-24">
            <Link
              href={project.url}
              target="_blank"
              className="transform ring-2 ring-offset-2 ring-offset-white/50 hover:ring-offset-white transition-all py-2 px-3 inline-flex justify-center items-center rounded-lg text-sm text-center"
            >
              Visit Site
            </Link>
          </div>
        </div>

        <p>Date: {project.date}</p>

        <article className="space-y-1">
          <p>Desctipion:</p>

          <PortableText value={project.content} components={components} />
        </article>
      </div>
    </Container>
  );
};

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(projectsSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { project } = await getClient(preview).fetch(projectQuery, {
    slug: params.slug
  });

  if (!project) {
    return { notFound: true };
  }

  // const { html, tweetIDs, readingTime } = await mdxToHtml(project.content);
  // const tweets = await getTweets(tweetIDs);

  return {
    props: {
      project: {
        ...project
        // content: html
        // tweets,
        // readingTime
      }
    }
  };
}

export default PortfolioPage;
