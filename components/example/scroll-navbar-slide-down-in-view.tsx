'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const MyContext = createContext<any>(null);

export const ContextStore = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  return <MyContext.Provider value={ref}>{children}</MyContext.Provider>;
};

function ScrollNavbarSlideDown() {
  const myContext = useContext(MyContext);
  const [isShow, setShow] = useState(false);
  const [top, setTop] = useState(0);

  const { scrollY } = useScroll();

  useEffect(() => {
    const { top } = myContext.current.getBoundingClientRect();
    setTop(top);
  }, [myContext]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > top) {
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
            'mx-auto w-full max-w-4xl',
            'py-4',
          )}
        >
          <Link
            href="/"
            className="whitespace-nowrap text-xl text-gray-800 no-underline"
          >
            <svg
              className="h-8 w-auto fill-black dark:fill-white"
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
            'mx-auto w-full max-w-4xl',
            'rounded-full px-8 py-4',
            'left-1/2 top-4 -translate-x-1/2',
          )}
        >
          <Link
            href="/"
            className="whitespace-nowrap text-xl text-gray-800 no-underline"
          >
            <svg
              className="h-8 w-auto fill-black dark:fill-white"
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

function ShowHere() {
  const myContext = useContext(MyContext);

  return (
    <div className="my-10" ref={myContext}>
      Navbar show in here
    </div>
  );
}

export { ScrollNavbarSlideDown, ShowHere };
