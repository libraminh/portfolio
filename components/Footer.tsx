import Link from "next/link";

import NowPlaying from "components/NowPlaying";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-2-xl md:max-w-5xl  mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      {/* <NowPlaying /> */}
      <div className="w-full max-2-xl md:max-w-5xl pb-16">
        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row justify-between items-baseline">
          <figure className="flex space-x-4">
            <Link
              href="/"
              className="text-sm dark:text-white text-gray-600 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm dark:text-white text-gray-600 transition"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-sm dark:text-white text-gray-600 transition"
            >
              Portfolio
            </Link>
          </figure>

          <figure className="text-sm text-gray-600 dark:text-white">
            © 2022 Minh Le. All rights reserved.
          </figure>
        </div>

        {/* <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/leeerob">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/leerob">GitHub</ExternalLink>
          <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
            YouTube
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link
            href="/uses"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Uses
          </Link>
          <Link
            href="/guestbook"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Guestbook
          </Link>
          <Link
            href="/snippets"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Snippets
          </Link>
          <Link
            href="/tweets"
            className="text-gray-500 hover:text-gray-600 transition"
          >
            Tweets
          </Link>
        </div> */}
      </div>
    </footer>
  );
}
