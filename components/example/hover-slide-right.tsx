'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimate, useScroll, useTransform } from 'framer-motion';
import { parse } from 'path';

const list = [
  {
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    name: 'Progressively implement principle-centered niches whereas goal-oriented products',
  },
  {
    image:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    name: 'Intrinsicly negotiate 24/365 platforms via low-risk high-yield manufactured products',
  },
  {
    image:
      'https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1792&q=80',
    name: 'Progressively develop extensive "outside the box" thinking whereas B2B alignments',
  },
];

export default function HoverSlideRight() {
  const [isHovered, setHovered] = useState(list.map(() => false));

  const hoverStart = (index: number) => {
    setHovered((prevState) =>
      prevState.map((item, idx) => (idx === index ? !item : item)),
    );
  };

  const hoverEnd = (index: number) => {
    setHovered((prevState) =>
      prevState.map((item, idx) => (idx === index ? !item : item)),
    );
  };

  return (
    <>
      {list.map((item, idx) => (
        <motion.div
          key={idx}
          className="flex border-t pt-8 mb-8"
          onHoverStart={() => hoverStart(idx)}
          onHoverEnd={() => hoverEnd(idx)}
        >
          <motion.div
            className="w-[400px] mr-8"
            initial={{ opacity: 0, x: -260 }}
            animate={{
              opacity: isHovered[idx] ? 1 : 0,
              x: isHovered[idx] ? 0 : -260,
            }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            <Image
              src={item.image}
              alt={item.name}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ x: -260 }}
            animate={{
              x: isHovered[idx] ? 0 : -260,
            }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            <h3 className="text-3xl font-serif font-bold">{item.name}</h3>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}
