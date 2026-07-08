import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./menu-animations.css";

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
      <body>
        {children}
        <Script id="mobile-carousel-active-dot" strategy="lazyOnload">
          {`
            (() => {
              const selectors = [
                '#packages > div > div.grid',
                'section:not(#packages) > div > div.mt-12.grid'
              ];

              const update = (scroller) => {
                const cards = Array.from(scroller.querySelectorAll('article'));
                const parent = scroller.parentElement;
                if (!cards.length || !parent) return;

                const scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2;
                let activeIndex = 0;
                let smallestDistance = Infinity;

                cards.forEach((card, index) => {
                  const cardCenter = card.offsetLeft + card.offsetWidth / 2;
                  const distance = Math.abs(cardCenter - scrollerCenter);
                  if (distance < smallestDistance) {
                    smallestDistance = distance;
                    activeIndex = index;
                  }
                });

                parent.dataset.carouselActive = String(activeIndex);
              };

              const init = () => {
                selectors
                  .flatMap((selector) => Array.from(document.querySelectorAll(selector)))
                  .forEach((scroller) => {
                    update(scroller);
                    let frame = 0;
                    scroller.addEventListener('scroll', () => {
                      cancelAnimationFrame(frame);
                      frame = requestAnimationFrame(() => update(scroller));
                    }, { passive: true });
                    window.addEventListener('resize', () => update(scroller), { passive: true });
                  });
              };

              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', init, { once: true });
              } else {
                init();
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
