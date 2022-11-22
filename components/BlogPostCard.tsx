import cn from "classnames";
import Link from "next/link";

import { toPlainText } from "@portabletext/react";
import TextTruncate from "react-text-truncate";

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
  return (
    <Link
      href={`/portfolio/${slug}`}
      className={cn(
        "transform hover:scale-[1.01] transition",
        "rounded-2xl w-full bg-gradient-to-r p-0.5",
        gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-2xl p-4">
        <div className="flex flex-col justify-between space-y-3 divide-y">
          <div>
            <h4 className="text-lg md:text-lg font-medium text-gray-900 dark:text-gray-100 tracking-tight">
              {title}
            </h4>

            <span className="text-xs text-gray-900 dark:text-gray-100">
              {date}
            </span>
          </div>

          <div className="text-sm pt-3 text-gray-600 dark:text-gray-300">
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={toPlainText(content)}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
