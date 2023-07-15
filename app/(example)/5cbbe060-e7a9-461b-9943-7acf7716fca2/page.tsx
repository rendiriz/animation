import type { Metadata } from 'next';
import Link from 'next/link';
import cn from 'classnames';
import { ChevronLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Component from '@/components/example/hover-slide-right';

export const metadata: Metadata = {
  title: 'Hover Slide Right',
  description: 'Hover Slide Right',
};

export default function ExamplePage() {
  return (
    <>
      <Link href="/">
        <Button className="fixed top-4 left-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          <span>Back</span>
        </Button>
      </Link>

      <div className={cn('w-full mx-auto max-w-4xl', 'py-10')}>
        <h1 className="text-5xl font-serif font-extrabold">Hover Slide</h1>
        <h2 className="text-4xl font-serif font-bold">
          Globally matrix multidisciplinary imperatives for technically sound
          architectures
        </h2>

        <div className="my-10">
          {[0].map((item, idx) => (
            <p key={idx} className="prose max-w-none">
              Synergistically develop corporate synergy before
              backward-compatible bandwidth. Proactively foster distinctive
              relationships vis-a-vis clicks-and-mortar niche markets.
            </p>
          ))}
        </div>

        <Component />
      </div>
    </>
  );
}
