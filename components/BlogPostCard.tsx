import Link from 'next/link';
import useSWR from 'swr';
import cn from 'classnames';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';

export default function BlogPostCard({
  title,
  slug,
  gradient,
  content,
  pHref
}) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link
      target={'_blank'}
      href={`${pHref}`}
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full bg-gradient-to-r p-1',
        gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col justify-between space-y-2">
          <h4 className="text-lg md:text-lg font-medium w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>

          <p className="text-white text-sm">{content}</p>
        </div>
      </div>
    </Link>
  );
}
