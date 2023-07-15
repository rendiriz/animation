'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const list = [
  { name: 'Efficiently' },
  { name: 'Reinvent' },
  { name: 'Professional' },
  { name: 'Opportunities' },
];

export default function HoverLinkUnderline() {
  const linkRef = useRef<Array<HTMLDivElement | null>>([]);
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
      <div className="flex">
        {list.map((item, idx) => (
          <motion.div
            ref={(el) => (linkRef.current[idx] = el)}
            className="mx-4 uppercase"
            key={idx}
            onHoverStart={() => hoverStart(idx)}
            onHoverEnd={() => hoverEnd(idx)}
          >
            <span>{item.name}</span>
            <motion.div
              className="h-[1px] bg-slate-800"
              initial={{ width: 0 }}
              animate={{
                width: isHovered[idx] ? linkRef.current[idx]?.clientWidth : 0,
              }}
              transition={{ ease: 'easeInOut', duration: 0.25 }}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
