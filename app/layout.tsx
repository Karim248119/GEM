import type { Metadata } from "next";
import "./globals.css";
import NavTransition from "@/components/NavTransition";
import ReactLenis from "lenis/react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";
import { Fonts } from "@/lib/fonts";
import PageTransition from "@/components/PageTransition";
import LenisProvider from "@/components/LenisProvider";
import Preloader from "@/components/Preload";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "GEM",
  description: "The grand egyptian museum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" cz-shortcut-listen="true" suppressHydrationWarning>
      <body
        className={`${Fonts.base.className} antialiased bg-neutral-900 text-neutral-600`}
      >
        <Suspense fallback={null}>
          <PageTransition>
            <LenisProvider>
              <Preloader>
                <Navbar />
                {children}
              </Preloader>
            </LenisProvider>
          </PageTransition>
        </Suspense>
      </body>
    </html>
  );
}
