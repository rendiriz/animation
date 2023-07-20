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
        <Button className="fixed left-4 top-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          <span>Back</span>
        </Button>
      </Link>

      <div className={cn('mx-auto w-full max-w-4xl')}>
        <div className="grid h-screen place-items-center">
          <Component />
        </div>
      </div>
    </>
  );
}
