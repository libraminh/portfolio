import { PortableText } from '@portabletext/react';
import useIsMobile from 'hooks/useIsMobile';
import { ReactNode } from 'react';
import IconWork from './IconWork';

interface Props {
  position: string;
  company: string;
  content: any;
  date: string;
}

const ExperienceDate = ({ children }: { children: ReactNode }) => {
  return (
    <div className="inline-flex items-center justify-center rounded-full border boder-solid border-gray-500 dark:border-0 px-5 py-2 dark:bg-gray-400 bg-white dark:text-white text-gray-900 text-sm">
      {children}
    </div>
  );
};

const ExperiencePost = ({ position, company, content, date }: Props) => {
  const isMobile = useIsMobile();

  return (
    <article className="flex flex-col md:flex-row text-black dark:text-white space-y-3 md:space-y-0">
      <div className="flex justify-between">
        <IconWork />

        {isMobile && <ExperienceDate>{date}</ExperienceDate>}
      </div>

      <div className="hidden md:block w-[1px] flex mx-4 dark:bg-white bg-gray-500"></div>

      <figure className="space-y-5 flex-1">
        {!isMobile && <ExperienceDate>{date}</ExperienceDate>}

        <div className="flex items-baseline space-x-2">
          <h3 className="text-lg md:text-2xl font-semibold">{company}</h3>
          <span>{'-'}</span>
          <p className="text-sm md:text-base capitalize">{position}</p>
        </div>

        <div className="font-light prose-sm md:prose-base text-gray-600 dark:text-white prose-p:!m-0">
          <PortableText value={content} />
        </div>
      </figure>
    </article>
  );
};

export default ExperiencePost;
