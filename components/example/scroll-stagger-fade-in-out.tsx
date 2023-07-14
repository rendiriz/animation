'use client';

import { useEffect } from 'react';
import { useAnimate, useInView, stagger } from 'framer-motion';

const staggerItems = stagger(0.1);

export default function ScrollStaggerFadeInOut() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    amount: 'some',
    margin: '-100px',
  });

  useEffect(() => {
    if (isInView) {
      animate(
        '.div',
        {
          opacity: 1,
          y: 0,
        },
        {
          duration: 1.5,
          delay: staggerItems,
        },
      );
    } else {
      const { bottom } = scope.current.getBoundingClientRect();
      const isBelowScreenBottom = bottom > window.innerHeight;

      if (isBelowScreenBottom) {
        animate(
          '.div',
          {
            opacity: 0,
            y: 100,
          },
          {
            duration: 1.5,
            delay: staggerItems,
          },
        );
      }
    }
  }, [isInView]);

  return (
    <>
      <div className="flex my-10" ref={scope}>
        {[0, 1, 2].map((item, idx) => (
          <div key={idx} className="div">
            <h2 className="text-4xl font-serif font-bold">
              Globally matrix multidisciplinary imperatives for technically
              sound architectures
            </h2>
          </div>
        ))}
      </div>
    </>
  );
}
