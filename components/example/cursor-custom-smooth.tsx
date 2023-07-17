'use client';

import React, { createContext, useContext, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import cn from 'classnames';

import useMouse from '@react-hook/mouse-position';
import { useFollowPointer } from '@/hooks/use-follow-pointer';

const listBringBack = [
  { name: 'Perfume 1', image: '58ceca9c-177c-4c77-b80d-cf245ae09dae-01.png' },
  { name: 'Perfume 2', image: '58ceca9c-177c-4c77-b80d-cf245ae09dae-02.png' },
];

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

export function Container({ children }: { children: React.ReactNode }) {
  const { ref } = useContext(CursorContext);

  return <div ref={ref}>{children}</div>;
}

export function Cursor() {
  const { ref, cursorText, cursorVariant } = useContext(CursorContext);
  const cursorRef = useRef(null);

  const { x, y } = useFollowPointer(cursorRef);

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = x;
  let mouseYPosition = y;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX || 0;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY || 0;
  }

  const variants = {
    default: {
      opacity: 1,
      width: 20,
      height: 20,
      x: mouseXPosition - 20 / 2,
      y: mouseYPosition - 20 / 2,
      transition: {
        type: 'spring',
        mass: 0.5,
      },
    },
    bringback: {
      opacity: 0.5,
      width: 150,
      height: 150,
      x: mouseXPosition - 150 / 2,
      y: mouseYPosition - 150 / 2,
    },
    withtext: {
      opacity: 1,
      width: 100,
      height: 100,
      x: mouseXPosition - 100 / 2,
      y: mouseYPosition - 100 / 2,
    },
  };

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28,
  };

  return (
    <motion.div
      ref={cursorRef}
      variants={variants}
      className={cn(
        'bg-green-800 text-white text-base',
        'fixed flex flex-row items-center justify-center text-center',
        'w-[20px] h-[20px]',
        'rounded-full pointer-events-none',
        'top-0 left-0 z-[100]',
      )}
      animate={cursorVariant}
      transition={spring}
    >
      <span className="cursorText">{cursorText}</span>
    </motion.div>
  );
}

export function BringBack() {
  const { setCursorVariant } = useContext(CursorContext);

  function mouseEnter() {
    setCursorVariant('bringback');
  }

  function mouseLeave() {
    setCursorVariant('default');
  }

  return (
    <>
      <h4 className="text-2xl font-serif font-bold">Bring Back</h4>
      <div className="grid grid-cols-2 gap-4">
        {listBringBack.map((item, idx) => (
          <div
            className="p-16 z-[101]"
            key={idx}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <Image
              src={`/animation/${item.image}`}
              alt={item.name}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export function WithText() {
  const { setCursorText, setCursorVariant } = useContext(CursorContext);

  function mouseEnter() {
    setCursorText('Hallo');
    setCursorVariant('withtext');
  }

  function mouseLeave() {
    setCursorText('');
    setCursorVariant('default');
  }

  return (
    <>
      <h4
        className="text-2xl font-serif font-bold"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        With Text Hover Me
      </h4>
    </>
  );
}
