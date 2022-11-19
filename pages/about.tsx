import Image from 'next/image';

import Container from 'components/Container';
import SocialContact from 'components/SocialContact';
import avatarBW from 'public/avatar-bw.jpg';
import avatar from 'public/avatar.jpg';

export default function About() {
  return (
    <Container title="About – Minh Le">
      <div className="flex flex-col justify-center items-start max-2-xl md:max-w-5xl  mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-16 text-black dark:text-white">
          About Me
        </h1>

        <div className="grid grid-cols-2 gap-5">
          <figure>
            <Image
              alt="Minh Le headshot"
              width={400}
              src={avatar}
              className="rounded-2xl aspect-square rotate-3 mb-16"
            />
            <SocialContact />
          </figure>

          <div className="mb-8 prose prose-a:m-0 dark:prose-dark leading-6">
            <h2>Bio</h2>
            <h3>Job Title</h3>
            <p>Minh Le, VP of Developer Experience at Vercel</p>
            <h3>Long, 3rd Person</h3>
            <p>
              Minh Le is the VP of Developer Experience at{' '}
              <a href="http://vercel.com/">Vercel</a>, where he helps developers
              build a faster web and leads the Next.js community. He leads the
              community for the React framework Next.js and is an open-source
              contributor. An educator, writer, and speaker, Lee has created
              courses on React, Next.js, and web development.
            </p>
            <h3>Long, 1st Person</h3>
            <p>
              Hey, I'm Lee. I'm the VP of Developer Experience at{' '}
              <a href="https://vercel.com/">Vercel</a>, where my team helps
              developers build a faster web. I'm a Next.js contributor and help
              lead our open-source communities. I'm passionate about frontend
              development and have created courses on React, Next.js, and web
              development. I'm an advisor and investor in early stage startups.
            </p>
            <h3>Short, 3rd Person</h3>
            <p>
              Minh Le is the VP of Developer Experience at{' '}
              <a href="http://vercel.com/">Vercel</a>, where he helps developers
              build a faster web.
            </p>
            <h3>Short, 1st Person</h3>
            <p>
              Hey, I'm Lee. I'm the VP of Developer Experience at{' '}
              <a href="https://vercel.com/">Vercel</a>, where my team helps
              developers build a faster web.
            </p>
            <h3>Education</h3>
            <p>
              Minh Le graduated from Iowa State University with a B.S. in
              Computer Engineering.
            </p>
            <h2>Headshots</h2>
            <div className="flex space-x-8">
              <a href="/avatar.jpg">
                <Image
                  alt="Minh Le headshot"
                  width={400}
                  quality={100}
                  src={avatar}
                  className="rounded-md"
                />
              </a>
              <a href="/avatar-bw.jpg">
                <Image
                  alt="Minh Le headshot"
                  width={400}
                  quality={100}
                  src={avatarBW}
                  className="rounded-md"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
