"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Img({ props, src }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    const container = containerRef.current;
    const image = imageRef.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        image,
        { y: "-100%" },
        {
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            scrub: 1,
            start: "top-=400",
            end: "bottom-=400",
            toggleActions: "play none none reverse", // optional
          },
          duration: 1,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full overflow-hidden">
      <img
        ref={imageRef}
        src={src}
        className="w-full h-full object-contain"
        {...props}
      />
    </div>
  );
}
