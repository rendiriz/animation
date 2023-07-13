import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="w-full mx-auto max-w-4xl py-10">
      <div className="grid grid-cols-2 gap-4">
        <Link href="/logo-marquee">
          <Card>
            <CardContent className="!p-4">
              <p>Logo Marquee</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
