import Link from "next/link";
import React, { Suspense } from "react";

import ArrowRight from "components/ArrowRight";
import AuthorInformation from "components/AuthorInformation";
import Experience from "components/Experience";
import KeySkills from "components/KeySkills";
import { bgGradient } from "helpers/constants";
import { experiencesQuery, projectsQuery } from "lib/queries";
import { getClient } from "lib/sanity-server";
import BlogPostCard from "../components/BlogPostCard";
import Container from "../components/Container";
import VideoCard from "../components/VideoCard";

export default function Home({ projects, experiences }) {
  const filterTop3FeaturedProjects = projects.filter((proj) => proj.featured);

  return (
    <Suspense fallback={null}>
      <Container>
        <div className="max-2-xl md:max-w-5xl w-full mx-auto mb-16">
          <AuthorInformation />
        </div>

        <div className="flex flex-col justify-center items-start max-2-xl md:max-w-5xl  border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <KeySkills />

          <Experience experiences={experiences} />

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured Projects
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {filterTop3FeaturedProjects?.map((project: any, projectIndex) => (
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

          {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Learn React & Next.js
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Build and deploy a modern SaaS application using the most popular
            open-source software. This course is 12 hours long and is completely
            live streamed.
          </p>
          <VideoCard
            index="01"
            href="https://www.youtube.com/watch?v=MxR5I5_hOKk&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=2"
            length="1:02:45"
            title="Introduction to React 2025"
          />
          <VideoCard
            index="02"
            href="https://www.youtube.com/watch?v=AGl52moyISU&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=3"
            length="54:22"
            title="Firestore, Chakra UI, Absolute Imports"
          />
          <VideoCard
            index="03"
            href="https://www.youtube.com/watch?v=3g6-v3_BNbM&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=4"
            length="1:08:30"
            title="Designing & Building the Dashboard"
          />
          <VideoCard
            index="04"
            href="https://www.youtube.com/watch?v=u8iv_yhSRI8&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=5"
            length="1:13:45"
            title="Firebase Admin with Next.js + SWR"
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/playlist?list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            Watch all videos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a> */}
          {/* <span className="h-16" /> */}
          {/* <Subscribe /> */}
        </div>
      </Container>
    </Suspense>
  );
}

export async function getStaticProps({ preview = false }) {
  const projects = await getClient(preview).fetch(projectsQuery);
  const experiences = await getClient(preview).fetch(experiencesQuery);

  return { props: { projects, experiences } };
}
