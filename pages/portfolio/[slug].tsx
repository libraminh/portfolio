import Container from "components/Container";
import { mdxToHtml } from "lib/mdx";
import { projectQuery, projectsSlugsQuery } from "lib/queries";
import { getClient, sanityClient } from "lib/sanity-server";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";

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
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || " "}
        loading="lazy"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",

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
      <div className="max-2-xl md:max-w-5xl  w-full mx-auto pb-16 text-white space-y-10">
        <div className="max-w-2xl mb-20">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl md:!leading-[56px]">
            Things I’ve made trying to put my dent in the universe.
          </h1>

          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’ve worked on tons of little projects over the years but these are
            the ones that I’m most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:space-x-5 space-y-5 md:space-y-0">
          <h1 className="text-2xl font-bold tracking-tight text-black md:text-3xl dark:text-white flex-1">
            {project.title}
          </h1>

          <div className="md:basis-32">
            <Link
              href={project.url}
              target="_blank"
              className="transform ring-2 ring-offset-2 ring-offset-white/50 hover:ring-offset-white transition-all py-3 px-5 inline-flex justify-center items-center rounded-xl text-sm text-center dark:text-white text-gray-600"
            >
              Visit Site
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <div className="bg-white flex items-center justify-center w-10 h-10 rounded-full">
            <Image
              alt="Minh Le"
              height={22}
              width={22}
              src="/calender-icon.svg"
              priority
            />
          </div>
          <span className="dark:text-white text-gray-600">{project.date}</span>
        </div>

        <article className="space-y-1">
          <h2 className="text-lg font-semibold mb-5 dark:text-white text-gray-600">
            Project in detail:
          </h2>

          <div className="prose dark:prose-dark max-w-none prose-ul:pl-10 prose-ul:mt-0 prose-p:mb-2">
            <PortableText value={project.content} components={components} />
          </div>
        </article>
      </div>
    </Container>
  );
};

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(projectsSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking"
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { project } = await getClient(preview).fetch(projectQuery, {
    slug: params.slug
  });

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      project
    }
  };
}

export default PortfolioPage;
