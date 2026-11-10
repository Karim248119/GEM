"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { Fonts } from "@/lib/fonts";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // 1. Handle Progress Increment
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // 2. Trigger Exit Animation only when progress is 100
  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline({
        onComplete: () => setIsLoading(false),
      });

      tl.to("#preloader-content", {
        opacity: 0,
        y: -20,
        duration: 0.5,
      }).to("#preloader-bg", {
        height: 0,
        duration: 1,
        ease: "expo.inOut",
      });
    }
  }, [progress]);

  return (
    <>
      {isLoading && (
        <div
          id="preloader-bg"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-neutral-900 overflow-hidden"
        >
          <div id="preloader-content" className="relative w-40 h-40">
            {/* Background shapes */}
            <div className="w-full h-full bg-secondary shape center" />
            <div className="w-[98%] aspect-square bg-neutral-900 shape center" />

            {/* Progress Fill Logic */}
            <div className="w-full h-full shape flex justify-center pr-10 pt-8 center overflow-hidden">
              <div
                className="w-full h-full bg-secondary absolute left-0 top-full transition-transform duration-75 ease-linear"
                style={{ transform: `translateY(-${progress}%)` }}
              />
              <p
                className={`text-neutral-900 text-outline z-20 text-xl italic font-bold leading-none ${Fonts.AR.className}`}
                dir="rtl"
              >
                المتحف
                <br />
                المصــري
                <br />
                الـــكـبيـــــر
              </p>
            </div>

            {/* Static Labels */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1">
              <div className="h-8 w-0.5 bg-secondary" />
              <p className="text-secondary text-xs leading-none font-bold">
                GRAND <br /> EGYPTIAN <br /> MUSEUM
              </p>
            </div>
          </div>
        </div>
      )}
      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        {children}
      </div>
    </>
  );
}
