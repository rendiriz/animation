'use client';

import React, { createContext, useContext, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

import { useFollowPointer } from '@/hooks/use-follow-pointer';

export const CursorContext = createContext<any>({});

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');

  return (
    <CursorContext.Provider
      value={{
        ref,
        cursorText,
        setCursorText,
        cursorVariant,
        setCursorVariant,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export function Cursor() {
  const { ref, cursorText } = useContext(CursorContext);

  const mouse = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className={cn(
        'bg-green-800 text-base text-white',
        'fixed flex flex-row items-center justify-center text-center',
        'h-[20px] w-[20px]',
        'pointer-events-none rounded-full',
        'left-0 top-0 z-[100]',
      )}
      style={{ x: mouse.x, y: mouse.y }}
    >
      <span className="cursorText">{cursorText}</span>
    </motion.div>
  );
}
