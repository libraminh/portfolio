import Link from "next/link";
import React from "react";
import DownloadCV from "./DownloadCV";
import IconGithub from "./IconGithub";
import LinkedinIcon from "./LinkedinIcon";

interface Props {}

const SocialContact = (props: Props) => {
  return (
    <ul className="list-none p-0 space-y-4">
      <li>
        <a
          href="tel:+84989874007"
          className="inline-flex items-center space-x-2 no-underline group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
            viewBox="0 0 512 512"
          >
            {/*! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
          </svg>

          <span className="text-sm text-gray-600 dark:text-white group-hover:text-teal-500 transition">
            Take a phone call
          </span>
        </a>
      </li>

      <li>
        <a
          href="skype:live:libraminh_1"
          className="inline-flex items-center space-x-2 no-underline group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
            viewBox="0 0 448 512"
          >
            {/*! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
            <path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" />
          </svg>

          <span className="text-sm text-gray-600 dark:text-white group-hover:text-teal-500 transition">
            Connect to Skype
          </span>
        </a>
      </li>

      {/* <li>
        <Link
          target={"_blank"}
          href="https://www.facebook.com/minh.libra"
          className="inline-flex items-center space-x-2 no-underline group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
            viewBox="0 0 320 512"
          >
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
          </svg>

          <span className="text-sm text-gray-600 dark:text-white group-hover:text-teal-500 transition">
            Follow on Facebook
          </span>
        </Link>
      </li> */}

      <li>
        <a
          href="https://github.com/libraminh"
          className="inline-flex items-center space-x-2 no-underline group"
        >
          <IconGithub />

          <span className="text-sm text-gray-600 dark:text-white group-hover:text-teal-500 transition">
            Follow on Github
          </span>
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/minh-le-67a256181"
          className="inline-flex items-center space-x-2 no-underline group"
        >
          <LinkedinIcon />

          <span className="text-sm text-gray-600 dark:text-white group-hover:text-teal-500 transition">
            Follow on Linkedin
          </span>
        </a>
      </li>

      <li>
        <a
          href="mailto:libraminh@gmail.com"
          className="inline-flex items-center space-x-2 no-underline group"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
          >
            <path
              fillRule="evenodd"
              d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
          </svg>

          <span className="text-sm text-gray-600 dark:text-white group-hover:text-teal-500 transition">
            libraminh@gmail.com
          </span>
        </a>
      </li>

      <li>
        <DownloadCV />
      </li>
    </ul>
  );
};

export default SocialContact;
