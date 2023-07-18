'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import cn from 'classnames';

const playbackConst = 500;

export const VideoContext = createContext<any>({});

export const VideoProvider = ({ children }: { children: React.ReactNode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hookedYPostion, setHookedYPosition] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [isBottom, setIsBottom] = useState(false);
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);

  const dimensionsRef = useRef<any>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      dimensionsRef.current = [window.innerWidth, window.innerHeight];
    }
  }, []);

  return (
    <VideoContext.Provider
      value={{
        dimensionsRef,
        sectionRef,
        containerRef,
        wrapperRef,
        videoRef,
        hookedYPostion,
        setHookedYPosition,
        videoHeight,
        setVideoHeight,
        top,
        setTop,
        bottom,
        setBottom,
        isFixed,
        setIsFixed,
        isBottom,
        setIsBottom,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export function Section({ children }: { children: React.ReactNode }) {
  const { sectionRef } = useContext(VideoContext);

  return (
    <div ref={sectionRef} className="relative block">
      {children}
    </div>
  );
}

export function SectionNext({ children }: { children: React.ReactNode }) {
  const { dimensionsRef, sectionRef } = useContext(VideoContext);

  return (
    <div
      ref={sectionRef}
      style={{ marginTop: dimensionsRef.current[1] }}
      className={cn('w-full mx-auto max-w-4xl', 'py-10')}
    >
      {children}
    </div>
  );
}

export function Container({ children }: { children: React.ReactNode }) {
  const {
    containerRef,
    wrapperRef,
    setHookedYPosition,
    top,
    bottom,
    setIsFixed,
    setIsBottom,
  } = useContext(VideoContext);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setHookedYPosition(latest);

    if (latest > top && latest < bottom) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }

    if (latest > bottom) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  });

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        'main',
        'relative block',
        'w-full',
        'm-0 inset-0',
        'z-auto overflow-visible',
      )}
    >
      {children}
    </motion.div>
  );
}

export function Wrapper({ children }: { children: React.ReactNode }) {
  const { dimensionsRef, wrapperRef, videoHeight, isFixed, isBottom } =
    useContext(VideoContext);

  return (
    <div
      ref={wrapperRef}
      style={{
        translate: 'none',
        scale: 'none',
        rotate: 'none',
        maxHeight: dimensionsRef.current[1],
        height: dimensionsRef.current[1],
        transform: isBottom
          ? `translate(0px, ${videoHeight}px)`
          : 'translate(0px, 0px)',
      }}
      className={cn(
        isFixed ? 'fixed' : 'relative',
        'block',
        'w-full',
        'm-0 p-0',
        isFixed ? 'inset-auto' : '',
        isFixed ? 'top-[0.34375px] left-0' : '',
        'translate-x-0 translate-y-0',
      )}
    >
      {children}
    </div>
  );
}

export function Video() {
  const {
    sectionRef,
    containerRef,
    wrapperRef,
    videoRef,
    setVideoHeight,
    top,
    setTop,
    setBottom,
    hookedYPostion,
  } = useContext(VideoContext);

  useEffect(() => {
    const duration = videoRef.current.duration;
    const height = Math.floor(duration) * playbackConst;

    const vidHeight = height;

    containerRef.current.style.height = height + 'px';
    containerRef.current.style.padding = `0px 0px ${vidHeight}px`;

    const { top, bottom } = containerRef.current.getBoundingClientRect();

    setVideoHeight(vidHeight);
    setTop(top + hookedYPostion);
    setBottom(bottom + hookedYPostion);
  });

  useAnimationFrame(() => {
    const frameNumber = (hookedYPostion - top) / playbackConst;
    videoRef.current.currentTime = frameNumber;
  });

  return (
    <video
      ref={videoRef}
      className={cn(
        'relative block',
        'w-full h-full object-cover',
        'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
      )}
      preload="metadata"
      playsInline
    >
      <source
        src="/animation/428ef744-f463-4d34-9500-f448988495fa.mp4"
        type="video/mp4"
      />
    </video>
  );
}
