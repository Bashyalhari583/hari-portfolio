import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { portfolio } from '@/lib/portfolio';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${portfolio.personal.name} — ${portfolio.personal.role}`,
  description: portfolio.personal.tagline,
  keywords: [
    'Hari Bashyal',
    'Full Stack Developer',
    'React Developer',
    'Node.js',
    'n8n automation',
    'SEO',
    'Next.js',
    'Nepal',
  ],
  authors: [{ name: portfolio.personal.name }],
  openGraph: {
    title: `${portfolio.personal.name} — ${portfolio.personal.role}`,
    description: portfolio.personal.tagline,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolio.personal.name} — ${portfolio.personal.role}`,
    description: portfolio.personal.tagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
