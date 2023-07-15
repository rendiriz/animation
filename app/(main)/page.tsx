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
                  className="w-full h-auto rounded-2xl"
                />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
