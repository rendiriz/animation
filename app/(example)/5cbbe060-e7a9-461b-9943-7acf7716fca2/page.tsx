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
        <Button className="fixed left-4 top-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          <span>Back</span>
        </Button>
      </Link>

      <div className={cn('mx-auto w-full max-w-4xl', 'py-10')}>
        <h1 className="font-serif text-5xl font-extrabold">Hover Slide</h1>
        <h2 className="font-serif text-4xl font-bold">
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
