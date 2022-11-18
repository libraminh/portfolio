import Link from 'next/link';
import useSWR from 'swr';
import cn from 'classnames';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import { PortableText } from '@portabletext/react';

interface Props {
  title: string;
  slug: string;
  gradient?: string;
  content: any;
  url?: string;
  date?: string;
}

export default function BlogPostCard({
  title,
  slug,
  gradient,
  content,
  url,
  date
}: Props) {
  // const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  // const views = data?.total;

  return (
    <Link
      href={`/portfolio/${slug}`}
      className={cn(
        'transform ', // hover:scale-[1.01] transition-all
        'rounded-xl w-full bg-gradient-to-r p-1',
        'ring-2 ring-offset-2'
        // gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col justify-between space-y-3 divide-y">
          <div>
            <h4 className="text-lg md:text-lg font-medium text-gray-900 dark:text-gray-100 tracking-tight">
              {title}
            </h4>

            <span className="text-xs text-gray-900 dark:text-gray-100">
              {date}
            </span>
          </div>

          <div className="text-gray-900 dark:text-gray-100 text-sm pt-3">
            <PortableText value={content} />
          </div>
        </div>
      </div>
    </Link>
  );
}
