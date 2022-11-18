import Image from 'next/image';
import React from 'react';

interface Props {}

const AuthorInformation = (props: Props) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start">
      <div className="flex flex-col pr-8">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
          Minh Le
        </h1>

        <h2 className="text-gray-700 dark:text-gray-200 mb-4">
          Frontend Developer at{' '}
          <span className="font-semibold">Construct Digital</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-16">
          Hello, I'm a Front-end developer based in Sai Gon, over 5 years
          professional experience.
        </p>
      </div>

      <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
        <Image
          alt="Minh Le"
          height={176}
          width={176}
          src="/avatar.jpg"
          sizes="30vw"
          priority
          className="rounded-full filter grayscale"
        />
      </div>
    </div>
  );
};

export default AuthorInformation;
