import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vowlens-studio.vercel.app"),
  title: "VowLens Studio — Wedding & Event Photography",
  description:
    "A premium wedding and event photography landing page for elegant, emotional, and cinematic visual storytelling.",
  keywords: [
    "wedding photography",
    "event photography",
    "photography landing page",
    "VowLens Studio",
    "cinematic wedding photographer",
  ],
  openGraph: {
    title: "VowLens Studio — Wedding & Event Photography",
    description:
      "Timeless wedding stories captured with cinematic elegance by VowLens Studio.",
    url: "https://vowlens-studio.vercel.app",
    siteName: "VowLens Studio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "VowLens Studio wedding photography landing page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VowLens Studio — Wedding & Event Photography",
    description:
      "A cinematic, premium landing page concept for a modern wedding photography studio.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
