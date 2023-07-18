'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import cn from 'classnames';

export const BackgroundContext = createContext<any>({});

export const BackgroundProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [bottom, setBottom] = useState(0);

  return (
    <BackgroundContext.Provider value={{ ref, bottom, setBottom }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export function Banner({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, setBottom } = useContext(BackgroundContext);

  useEffect(() => {
    const { bottom } = ref.current.getBoundingClientRect();
    setBottom(bottom);
  }, [ref]);

  return (
    <div className={cn(className)} ref={ref}>
      {children}
    </div>
  );
}

export function Background() {
  const { ref, bottom } = useContext(BackgroundContext);

  const { scrollY } = useScroll({
    container: ref.current,
    offset: ['start end', 'end end'],
  });

  const scaleY = useTransform(scrollY, [0, bottom], [1, 3]);

  return (
    <motion.div
      className={cn(
        'bg-foreground text-white',
        'absolute',
        'w-full h-screen',
        'z-10',
      )}
      initial={{ scaleY: 1 }}
      style={{ scaleY }}
    ></motion.div>
  );
}
