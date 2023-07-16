'use client';

import { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

export default function ScrollNavbarSlideDown() {
  const { scrollY } = useScroll();
  const [isShow, setShow] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <>
      <nav>
        <div
          className={cn(
            'relative flex flex-wrap items-center justify-between',
            'w-full mx-auto max-w-4xl',
            'py-4',
          )}
        >
          <Link
            href="/"
            className="text-xl text-gray-800 no-underline whitespace-nowrap"
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

          <div className="flex items-center space-x-4">
            <div>Distinctively</div>
            <div>Foster</div>
            <div>Compelling</div>
          </div>
        </div>
      </nav>

      <nav>
        <motion.div
          initial={{ y: -150 }}
          animate={{
            y: isShow ? 0 : -150,
            x: '-50%',
          }}
          transition={{
            duration: 0.75,
          }}
          className={cn(
            'fixed flex flex-wrap items-center justify-between',
            'bg-slate-50/30 backdrop-blur-lg',
            'w-full mx-auto max-w-4xl',
            'px-8 py-4 rounded-full',
            'top-4 left-1/2 -translate-x-1/2',
          )}
        >
          <Link
            href="/"
            className="text-xl text-gray-800 no-underline whitespace-nowrap"
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

          <div className="flex items-center space-x-4">
            <div>Distinctively</div>
            <div>Foster</div>
            <div>Compelling</div>
          </div>
        </motion.div>
      </nav>
    </>
  );
}
