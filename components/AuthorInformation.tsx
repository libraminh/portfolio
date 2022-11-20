import { avatarUrl } from "helpers/constants";
import Image from "next/image";
import React from "react";
import AvatarImage from "/public/avatar.jpg";

interface Props {}

const AuthorInformation = (props: Props) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start justify-between">
      <div className="flex flex-col flex-1 pr-8">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
          Minh Le
        </h1>

        <h2 className="text-gray-700 dark:text-gray-200 mb-4">
          Frontend Developer at{" "}
          <span className="font-semibold">Construct Digital</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          Hi! My name is Minh Le based in Sai Gon. I am a Web Developer, and I'm
          very passionate and dedicated to my work. With over 5 years experience
          as a professional Web developer, I have acquired the skills and
          knowledge necessary to make your project a success.
        </p>
      </div>

      <div className="w-[80px] sm:w-[176px] sm:basis-[176px] relative mb-8 sm:mb-0">
        <Image
          alt="Minh Le"
          height={176}
          width={176}
          src={AvatarImage}
          sizes="30vw"
          priority
          className="rounded-full filter grayscale"
        />

        {/* eslint-disable-next-line */}
        {/* <img
          src={"/avatar.jpg"}
          alt="avatar"
          className="rounded-full filter grayscale"
        /> */}
      </div>
    </div>
  );
};

export default AuthorInformation;
