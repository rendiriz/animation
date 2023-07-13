import Link from 'next/link';
import cn from 'classnames';
import { site } from '@/libs/site';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-[#111010]">
      <div
        className={cn(
          'relative flex flex-wrap items-center justify-center',
          'w-full mx-auto max-w-4xl py-4 px-4',
          'md:py-6',
        )}
      >
        <Link
          href="/"
          className="text-xl text-gray-800 no-underline whitespace-nowrap"
          aria-label={site.title}
        >
          <svg
            className="w-auto h-8 fill-black dark:fill-white"
            viewBox="0 0 75 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="75"
              y="20"
              width="20"
              height="75"
              transform="rotate(90 75 20)"
            ></rect>
            <rect x="10" width="20" height="100"></rect>
          </svg>
        </Link>
      </div>
    </nav>
  );
}
