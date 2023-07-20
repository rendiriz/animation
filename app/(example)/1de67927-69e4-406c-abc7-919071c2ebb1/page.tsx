import styles from './page.module.css';

import * as React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import cn from 'classnames';
import {
  ChevronLeft,
  Codepen,
  Codesandbox,
  Dribbble,
  Figma,
  Framer,
  Github,
  Gitlab,
  Twitter,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Logo Marquee',
  description: 'Logo Marquee',
};

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {}

function ListItem({ children, className, ...props }: ListItemProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        'bg-slate-50',
        'rounded-lg p-8',
        styles.marquee__list,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default function LogoMarqueePage() {
  return (
    <>
      <Link href="/">
        <Button className="fixed left-4 top-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          <span>Back</span>
        </Button>
      </Link>

      <div
        className={cn(
          'grid content-center',
          'min-h-screen w-full',
          'text-gray-800',
          'overflow-hidden',
        )}
      >
        <div
          className={cn('flex', 'select-none overflow-hidden', styles.marquee)}
        >
          {[0, 1].map((_, idx) => (
            <div
              key={idx}
              className={cn(
                'flex flex-shrink-0 items-center justify-around',
                'min-w-full',
                styles.marquee__group,
              )}
              aria-hidden={idx > 0}
            >
              <ListItem>
                <Github className={cn('h-[54px] w-[54px]')} />
              </ListItem>
              <ListItem>
                <Gitlab className={cn('h-[54px] w-[54px]')} />
              </ListItem>
              <ListItem>
                <Figma className={cn('h-[54px] w-[54px]')} />
              </ListItem>
              <ListItem>
                <Framer className={cn('h-[54px] w-[54px]')} />
              </ListItem>
              <ListItem>
                <Dribbble className={cn('h-[54px] w-[54px]')} />
              </ListItem>
              <ListItem>
                <Codepen className={cn('h-[54px] w-[54px]')} />
              </ListItem>
              <ListItem>
                <Codesandbox className={cn('h-[54px] w-[54px]')} />
              </ListItem>
              <ListItem>
                <Twitter className={cn('h-[54px] w-[54px]')} />
              </ListItem>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
