import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const example = [
  {
    id: '1de67927-69e4-406c-abc7-919071c2ebb1',
    name: 'Logo Marquee',
  },
  {
    id: '235ebc7f-6b58-42dc-aaab-00fba3d9a363',
    name: 'Scroll Stagger Fade In Out',
  },
  {
    id: 'e9d1419a-03c9-41c6-9355-fd3db6350a54',
    name: 'Scroll Flip Image',
  },
  {
    id: '5cbbe060-e7a9-461b-9943-7acf7716fca2',
    name: 'Hover Slide Right',
  },
  {
    id: 'ff5f56c9-ed2e-41cc-bf7a-82f033279a39',
    name: 'Text Slide Up',
  },
  {
    id: '4e3bc3f3-902b-4ebd-b7e4-a8bea920c3b4',
    name: 'Hover Link Underline',
  },
  {
    id: '388470e8-40bc-47c3-824e-683e2461bded',
    name: 'Scroll Navbar Slide Down',
  },
  {
    id: '578894fa-071f-4de7-a33c-919e0f92491f',
    name: 'Scroll Navbar Slide Down In View',
  },
  {
    id: 'd6eea4f8-d144-4afa-b1b6-02b0241618a0',
    name: 'Cursor Custom',
  },
  {
    id: '58ceca9c-177c-4c77-b80d-cf245ae09dae',
    name: 'Cursor Custom Smooth',
  },
  {
    id: '7be878bd-1524-450e-8f5c-59d9735e8996',
    name: 'Scroll Change Background',
  },
];

export default function HomePage() {
  return (
    <div className="w-full mx-auto max-w-4xl py-10">
      <div className="grid grid-cols-2 gap-4">
        {example.map((item, idx) => (
          <Link key={idx} href={`/${item.id}`}>
            <Card>
              <CardContent className="!p-4">
                <Image
                  src={`/animation/${item.id}.png`}
                  alt={item.name}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
