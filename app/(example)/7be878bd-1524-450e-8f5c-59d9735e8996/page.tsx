import type { Metadata } from 'next';
import Link from 'next/link';
import cn from 'classnames';
import { ChevronLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  BackgroundProvider,
  Banner,
  Background,
} from '@/components/example/scroll-change-background';

export const metadata: Metadata = {
  title: 'Scroll Change Background',
  description: 'Scroll Change Background',
};

export default function ExamplePage() {
  return (
    <BackgroundProvider>
      <Link href="/">
        <Button className="fixed top-4 left-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          <span>Back</span>
        </Button>
      </Link>

      <Banner>
        <div className={cn('w-full mx-auto max-w-4xl', 'py-10')}>
          <h1 className="text-5xl font-serif font-extrabold">
            Banner Scroll Down
          </h1>
          <h2 className="text-4xl font-serif font-bold">
            Globally matrix multidisciplinary imperatives for technically sound
            architectures
          </h2>

          <div className="my-10">
            {[0, 1].map((item, idx) => (
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
      </Banner>

      <Background />

      <div className="bg-foreground relative z-20">
        <div className={cn('w-full mx-auto max-w-4xl', 'py-10')}>
          <h2 className="text-4xl font-serif font-bold text-white">
            Background
          </h2>

          <div className="my-10">
            {[0, 1, 2, 3, 4].map((item, idx) => (
              <p key={idx} className="prose prose-invert max-w-none">
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
      </div>

      <div className="bg-background relative z-30">
        <div className={cn('w-full mx-auto max-w-4xl', 'py-10')}>
          <h2 className="text-4xl font-serif font-bold">Next Section</h2>

          <div className="my-10">
            {[0, 1, 2, 3, 4].map((item, idx) => (
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
      </div>
    </BackgroundProvider>
  );
}
