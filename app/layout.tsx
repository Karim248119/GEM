import type { Metadata } from "next";
import "./globals.css";
import NavTransition from "@/components/NavTransition";
import ReactLenis from "lenis/react";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/Nav";
import { Fonts } from "@/lib/fonts";
import PageTransition from "@/components/PageTransition";

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
        <NavTransition />
        <PageTransition>
          <ReactLenis root>
            <Navbar />
            {children}
            <Footer />
          </ReactLenis>
        </PageTransition>
      </body>
    </html>
  );
}
