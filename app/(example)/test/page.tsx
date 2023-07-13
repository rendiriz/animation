'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import cn from 'classnames';
import {
  ChevronLeft,
  Facebook,
  Framer,
  Github,
  Instagram,
  Twitter,
} from 'lucide-react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}

function ListItem({ children, className, ...props }: ListItemProps) {
  return (
    <li className={className} {...props}>
      <div className="relative w-[54px] h-[54px] flex-shrink-0">
        <div className="contents">{children}</div>
      </div>
    </li>
  );
}

export default function TestPage() {
  const baseX = useMotionValue(0);

  const mask =
    'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 9%, rgb(0, 0, 0) 91%, rgba(0, 0, 0, 0) 100%)';
  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = 1 * 5 * (delta / 1000);

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <>
      <Card className="fixed top-4 left-4 w-[350px]">
        <CardContent className="!p-4">
          <Link href="/">
            <Button>
              <ChevronLeft className="mr-2 h-4 w-4" />
              <span>Back</span>
            </Button>
          </Link>

          <div className="mt-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* <div className="mx-auto max-w-4xl"> */}
      <div className="relative flex-none w-full h-[80px] opacity-100 z-20">
        <div className="contents">
          <div className="relative w-full h-full opacity-100 overflow-hidden">
            <div className="absolute w-[1200px] left-[calc(50%-1200px/2)] top-0 bottom-0 z-20">
              <section
                className="flex place-items-center w-full h-full max-w-full max-h-full overflow-hidden m-0 p-4"
                style={{
                  WebkitMaskImage: mask,
                  maskImage: mask,
                }}
              >
                <motion.ul
                  className="relative flex flex-row w-full h-full max-w-full max-h-full place-items-center list-none gap-[120px] overflow-hidden will-change-transform m-0 p-0"
                  style={{ x }}
                >
                  {[0, 1, 2].map((_, idx) => (
                    <React.Fragment key={idx}>
                      <ListItem
                        className={cn(idx > 0 && 'contents')}
                        aria-hidden={idx > 0}
                      >
                        <Framer className="inline-block w-full h-full" />
                      </ListItem>
                      <ListItem
                        className={cn(idx > 0 && 'contents')}
                        aria-hidden={idx > 0}
                      >
                        <Github className="inline-block w-full h-full" />
                      </ListItem>
                      <ListItem
                        className={cn(idx > 0 && 'contents')}
                        aria-hidden={idx > 0}
                      >
                        <Twitter className="inline-block w-full h-full" />
                      </ListItem>
                      <ListItem
                        className={cn(idx > 0 && 'contents')}
                        aria-hidden={idx > 0}
                      >
                        <Instagram className="inline-block w-full h-full" />
                      </ListItem>
                      <ListItem
                        className={cn(idx > 0 && 'contents')}
                        aria-hidden={idx > 0}
                      >
                        <Facebook className="inline-block w-full h-full" />
                      </ListItem>
                    </React.Fragment>
                  ))}
                </motion.ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
