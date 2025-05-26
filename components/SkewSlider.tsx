"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typo from "./Typo";
import { PiArrowRightThin } from "react-icons/pi";
import Dot from "./Dot";
import { Button } from "./Button";
import Link from "next/link";
import { i } from "framer-motion/client";

interface Photo {
  url: string;
  title: string;
}

interface Photo {
  url: string;
  title: string;
}

gsap.registerPlugin(ScrollTrigger);

const SkewSlider = ({ images }: { images: Photo[] }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useLayoutEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const [widths, setWidths] = useState<number[]>([]);

  useLayoutEffect(() => {
    const newWidths = imageRefs.current.map((img) => img?.clientWidth || 0);
    setWidths(newWidths);
  }, [images]);

  useLayoutEffect(() => {
    if (!containerRef.current || !sliderRef.current) return;

    const container = containerRef.current;
    const slider = sliderRef.current;
    const totalScroll = slider.scrollWidth - container.clientWidth;

    const ctx = gsap.context(() => {
      const scrollTween = gsap.to(slider, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${totalScroll}`,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const velocity = self.getVelocity(); // scroll velocity
            const skew = gsap.utils.clamp(-50, 50, velocity / 200); // limit skew

            // apply skew to all image blocks
            imageRefs.current.forEach((el) => {
              gsap.to(el, {
                skewX: skew,
                duration: 0.3,
                ease: "power3.out",
              });
            });
          },
        },
      });

      // Reset skewX when scroll stops
      ScrollTrigger.addEventListener("scrollEnd", () => {
        imageRefs.current.forEach((el) => {
          gsap.to(el, {
            skewX: 0,
            duration: 0.6,
            ease: "power3.out",
          });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full h-[100vh] text-primary my-32"
    >
      <Typo className="text-secondary w-full text-center md:text-6xl text-4xl mx-auto absolute top-[10vh] left-1/2 !-translate-x-1/2">
        Discover some of the Masterpieces of the Egyptian Museum
      </Typo>
      <div
        ref={sliderRef}
        className="flex h-full items-center gap-5 select-none px-[3vw] mt-[15vh]"
        style={{
          width: isSmallScreen
            ? `${images.length * 100 + 10}vw`
            : `${images.length * 20 + 10}vw`,
        }}
      >
        {images.map((photo, idx) => (
          <div
            ref={(el) => {
              if (el) imageRefs.current[idx] = el;
            }}
            key={idx}
            className="relative h-[50vh] group"
          >
            <button className="h-0 -rotate-45 group-hover:h-[15vh] arrowbtn overflow-hidden !aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 border-2 border-secondary duration-500">
              <div className="w-full h-full relative p-5 flex items-center justify-center">
                <PiArrowRightThin className=" arrow text-5xl" />
              </div>
            </button>
            <img
              src={photo.url}
              alt={photo.title}
              className="md:w-auto w-screen h-full object-cover"
              style={{ width: `${widths[idx]}px` }}
            />
            <div className="flex items-end absolute top-0 bg-black/70 px-3 py-1 w-full h-full opacity-0 group-hover:opacity-100 duration-500">
              <div className="flex ">
                <Dot className="mt-[6px]" />
                <Typo font="h2" className="px-2 text-primary">
                  {photo.title}
                </Typo>
              </div>
            </div>
          </div>
        ))}
        <Link href="/masterpieces">
          <Button className="w-52 h-52">
            {isSmallScreen ? "true" : "false"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SkewSlider;
