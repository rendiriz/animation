import type { Metadata } from 'next';
import Link from 'next/link';
import cn from 'classnames';
import { ChevronLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  VideoProvider,
  Section,
  Container,
  Wrapper,
  Video,
  SectionNext,
} from '@/components/example/scroll-video-play';

export const metadata: Metadata = {
  title: 'Scroll Video Play',
  description: 'Scroll Video Play',
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
        <h1 className="font-serif text-5xl font-extrabold">
          Scroll Video Play
        </h1>
        <h2 className="font-serif text-4xl font-bold">
          Globally matrix multidisciplinary imperatives for technically sound
          architectures
        </h2>

        <div className="p-4 pt-2">asd</div>

        <div className="my-10">
          {[0, 1].map((item, idx) => (
            <p key={idx} className="prose max-w-none">
              Synergistically develop corporate synergy before
              backward-compatible bandwidth. Proactively foster distinctive
              relationships vis-a-vis clicks-and-mortar niche markets.
              Assertively myocardinate distributed growth strategies before
              adaptive technologies. Collaboratively strategize ubiquitous
              alignments. Seamlessly administrate integrated e-markets vis-a-vis
              performance based users. Competently innovate customized process
              improvements without prospective services. Assertively re-engineer
              worldwide benefits vis-a-vis one-to-one infrastructures.
              Intrinsicly whiteboard leading-edge e-services. Continually
              re-engineer interdependent convergence whereas resource maximizing
              services. Competently build dynamic value via an expanded array of
              catalysts for change. Distinctively negotiate tactical best
              practices and premium. Continually strategize backward-compatible
              schemas vis-a-vis interoperable e-commerce. Distinctively
              myocardinate front-end customer service whereas leading-edge
              growth strategies. Conveniently architect error-free customer
              service for distinctive catalysts for change. Authoritatively.
            </p>
          ))}
        </div>
      </div>

      <VideoProvider>
        <Section>
          <Container>
            <Wrapper>
              <Video />
            </Wrapper>
          </Container>
        </Section>

        <SectionNext>
          <h2 className="font-serif text-4xl font-bold">
            Globally matrix multidisciplinary imperatives for technically sound
            architectures
          </h2>

          <div className="my-10">
            {[0, 1, 2, 3, 4, 5].map((item, idx) => (
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
        </SectionNext>
      </VideoProvider>
    </>
  );
}
