import '../globals.css';
import type { Metadata } from 'next';
import { site } from '@/libs/site';
import { atkinson, marcellus, robotoMono } from '@/libs/fonts';
import Navbar from '@/components/navbar';
import cn from 'classnames';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: {
    default: site.title,
    template: `%s — ${site.title}`,
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn([
        atkinson.variable,
        marcellus.variable,
        robotoMono.variable,
      ])}
    >
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
