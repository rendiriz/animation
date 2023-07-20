import type { Metadata } from 'next';
import Link from 'next/link';
import cn from 'classnames';
import { ChevronLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  CursorProvider,
  Container,
  Cursor,
  BringBack,
  WithText,
} from '@/components/example/cursor-custom-smooth';

export const metadata: Metadata = {
  title: 'Cursor Custom Smooth',
  description: 'Cursor Custom Smooth',
};

export default function ExamplePage() {
  return (
    <CursorProvider>
      <Container>
        <Link href="/">
          <Button className="fixed left-4 top-4">
            <ChevronLeft className="mr-2 h-4 w-4" />
            <span>Back</span>
          </Button>
        </Link>

        <Cursor />

        <div className={cn('mx-auto w-full max-w-4xl', 'py-10')}>
          <h1 className="font-serif text-5xl font-extrabold">
            Cursor Custom Smooth
          </h1>
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
                Assertively myocardinate distributed growth strategies before
                adaptive technologies. Collaboratively strategize ubiquitous
                alignments. Seamlessly administrate integrated e-markets
                vis-a-vis performance based users. Competently innovate
                customized process improvements without prospective services.
                Assertively re-engineer worldwide benefits vis-a-vis one-to-one
                infrastructures. Intrinsicly whiteboard leading-edge e-services.
                Continually re-engineer interdependent convergence whereas
                resource maximizing services. Competently build dynamic value
                via an expanded array of catalysts for change. Distinctively
                negotiate tactical best practices and premium. Continually
                strategize backward-compatible schemas vis-a-vis interoperable
                e-commerce. Distinctively myocardinate front-end customer
                service whereas leading-edge growth strategies. Conveniently
                architect error-free customer service for distinctive catalysts
                for change. Authoritatively.
              </p>
            ))}
          </div>

          <div className="my-10">
            <BringBack />
          </div>

          <div className="my-10">
            <WithText />
          </div>

          <div className="my-10">
            {[0].map((item, idx) => (
              <p key={idx} className="prose max-w-none">
                Synergistically develop corporate synergy before
                backward-compatible bandwidth. Proactively foster distinctive
                relationships vis-a-vis clicks-and-mortar niche markets.
                Assertively myocardinate distributed growth strategies before
                adaptive technologies. Collaboratively strategize ubiquitous
                alignments. Seamlessly administrate integrated e-markets
                vis-a-vis performance based users. Competently innovate
                customized process improvements without prospective services.
                Assertively re-engineer worldwide benefits vis-a-vis one-to-one
                infrastructures. Intrinsicly whiteboard leading-edge e-services.
                Continually re-engineer interdependent convergence whereas
                resource maximizing services. Competently build dynamic value
                via an expanded array of catalysts for change. Distinctively
                negotiate tactical best practices and premium. Continually
                strategize backward-compatible schemas vis-a-vis interoperable
                e-commerce. Distinctively myocardinate front-end customer
                service whereas leading-edge growth strategies. Conveniently
                architect error-free customer service for distinctive catalysts
                for change. Authoritatively.
              </p>
            ))}
          </div>
        </div>
      </Container>
    </CursorProvider>
  );
}
