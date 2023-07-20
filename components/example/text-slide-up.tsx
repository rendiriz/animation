'use client';

import { useEffect } from 'react';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';

const staggerItems = stagger(0.1);

const list = [
  { name: 'Compellingly envisioneer interdependent synergy' },
  { name: 'Interdependent synergy rather than next-generation' },
  { name: 'Objectively pursue frictionless e-business after' },
  { name: 'Assertively foster business markets and flexible' },
  { name: 'Rapidiously drive customized e-business whereas' },
  { name: 'Dynamically facilitate go forward technologies' },
];

export default function ScrollFlipImage() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    amount: 'some',
    margin: '-250px',
  });

  useEffect(() => {
    if (isInView) {
      animate(
        '.h3',
        {
          y: 0,
        },
        {
          duration: 0.5,
          delay: staggerItems,
        },
      );
    } else {
      const { bottom } = scope.current.getBoundingClientRect();
      const isBelowScreenBottom = bottom > window.innerHeight;

      if (isBelowScreenBottom) {
        animate(
          '.h3',
          {
            y: 150,
          },
          {
            duration: 0.5,
            delay: staggerItems,
          },
        );
      }
    }
  }, [isInView]);

  return (
    <>
      <div className="my-10" ref={scope}>
        {list.map((item, idx) => (
          <div key={idx} className="overflow-hidden">
            <h3 className="h3 font-serif text-3xl font-bold uppercase leading-normal">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}
