'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const banner = `https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80`;

export default function ScrollFlipImage() {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end end'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], [-25, 0]);

  return (
    <>
      <motion.div
        style={{
          rotateX,
          translateY,
        }}
        transformTemplate={({ rotateX, translateY }) =>
          `perspective(1200px) rotateX(${rotateX}) translateY(${translateY})`
        }
        ref={imageRef}
      >
        <Image
          src={banner}
          alt="Picture of banner"
          width="0"
          height="0"
          sizes="100vw"
          className="h-auto w-full rounded-2xl"
        />
      </motion.div>
    </>
  );
}
