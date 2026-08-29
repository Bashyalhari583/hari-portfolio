import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/lib/portfolio";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = "https://haribashyal.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${portfolio.personal.name} — ${portfolio.personal.role}`,
  description: portfolio.personal.tagline,
  keywords: [
    "Hari Bashyal",
    "Full Stack Developer",
    "React Developer",
    "Node.js",
    "n8n automation",
    "SEO",
    "Next.js",
    "Nepal",
  ],
  authors: [{ name: portfolio.personal.name }],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `${portfolio.personal.name} — ${portfolio.personal.role}`,
    description: portfolio.personal.tagline,
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${portfolio.personal.name} — Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${portfolio.personal.name} — ${portfolio.personal.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.personal.name} — ${portfolio.personal.role}`,
    description: portfolio.personal.tagline,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
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
