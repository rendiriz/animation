import type { Metadata } from 'next';
import Link from 'next/link';
import cn from 'classnames';
import { ChevronLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Component from '@/components/example/hover-link-underline';

export const metadata: Metadata = {
  title: 'Hover Link Underline',
  description: 'Hover Link Underline',
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

      <div className={cn('w-full mx-auto max-w-4xl')}>
        <div className="grid place-items-center h-screen">
          <Component />
        </div>
      </div>
    </>
  );
}
