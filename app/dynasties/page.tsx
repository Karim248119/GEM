"use client";
import React, { useEffect, useRef, useState } from "react";
import Dynasties from "@/data/dynasties";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typo from "@/components/Typo";
import { motion } from "framer-motion";
import Dot from "@/components/Dot";
import { a } from "framer-motion/client";
gsap.registerPlugin(ScrollTrigger);

export default function DynastiesPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    // Calculate how far the container needs to move left
    // (Total width of all items - width of one screen)
    const totalWidth = container.scrollWidth;
    const viewWidth = window.innerWidth;
    const scrollAmount = totalWidth - viewWidth;

    const ctx = gsap.context(() => {
      const tl = gsap.to(container, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => `+=${scrollAmount}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Update active index based on scroll progress
            const currentProgress = self.progress;
            const index = Math.round(currentProgress * (Dynasties.length - 1));
            setActiveIndex(index);
          },
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Function to handle clicking nav buttons
  const scrollToSection = (index: number) => {
    const scrollAmount = containerRef.current!.scrollWidth - window.innerWidth;
    const targetScroll = (index / (Dynasties.length - 1)) * scrollAmount;

    // Calculate the trigger position
    // Since we pinned the 'wrapper', the scroll distance is relative to its top
    window.scrollTo({
      top: wrapperRef.current!.offsetTop + targetScroll,
      behavior: "smooth",
    });
  };

  const progressPercentage = ((activeIndex + 1) / Dynasties.length) * 100;

  return (
    <div
      ref={wrapperRef}
      className="w-full overflow-hidden bg-neutral-900 text-primary relative"
    >
      <img
        src="/dy.jpg"
        className="fixed w-full h-full object-cover pointer-events-none z-0 grayscale brightness-[0.15]"
      />
      <div
        ref={containerRef}
        className="flex h-screen items-center relative z-10"
        style={{ width: `${Dynasties.length * 100}vw` }}
      >
        {Dynasties.map((dynasty, index) => (
          <>
            <div
              className={`w-0.5 h-1/3 bg-secondary/30 mx-10 ${index === 0 && "opacity-0"}`}
            />

            <div
              key={index}
              className="w-screen h-full flex flex-col md:flex-row  items-center px-10"
            >
              <motion.div
                animate={{
                  clipPath:
                    activeIndex === index
                      ? "inset(0 0 0 0)"
                      : "inset(0% 100% 0% 0%)",
                  //   clipPath:
                  //     activeIndex === index
                  //       ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                  //       : "polygon(49% 3%, 100% 50%, 13% 100%, 0 80%)",
                }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-full md:w-1/2 relative"
              >
                <img
                  src={
                    dynasty.img ||
                    "https://whitebirdtours.com/files/large/8079e70104895c421e9a49eb5f05a84b.jpg"
                  }
                  alt={dynasty.king}
                  className="w-[90%] max-h-[65vh] object-cover object-top grayscale brightness-90"
                />
                {index !== 0 && (
                  <img
                    src="https://cdn.shopify.com/s/files/1/0900/3470/0652/files/Grain.gif?v=1738476637%20here%20you%20go."
                    className=" opacity-30 absolute top-0 left-0 w-[90%] h-full"
                  />
                )}
              </motion.div>
              <div className="w-1/2 gap-14 flex">
                <Typo font="h2" className="text-xl mt-10">
                  C. {dynasty.startdate} BCE
                </Typo>
                <div className="w-full md:w-2/3 space-y-4">
                  <Typo font="h1" className="text-8xl mb-10">
                    {dynasty.name}
                  </Typo>
                  <div className="flex items-center gap-3">
                    <Typo
                      font="h2"
                      className="flex items-center gap-3 text-2xl text-secondary font-bold"
                    >
                      FAMOUS KING
                      <div className="w-[1px] h-10 rotate-12 bg-secondary" />
                    </Typo>

                    <Typo font="h2" className="text-2xl">
                      {dynasty.king}
                    </Typo>
                  </div>
                  <Typo className="text-xl !opacity-60">
                    {dynasty.description}
                  </Typo>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      {/* Navigation UI */}
      <div className="fixed bottom-8 left-0 w-full px-10 md:px-20 z-50 ">
        <div className="relative w-full h-0.5 bg-white/10 mb-1">
          <div
            className="absolute top-0 left-0 h-full bg-secondary transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div className="w-full h-14 flex justify-between items-end">
          {Dynasties.map((dynasty, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`flex flex-col items-center transition-all duration-500 ${
                activeIndex === index
                  ? "scale-110 opacity-100"
                  : "opacity-40 hover:opacity-80"
              }`}
            >
              <Typo
                font="h2"
                className={`mb-1 ${activeIndex === index ? "text-base font-bold text-secondary" : "text-xs text-white "}`}
              >
                {dynasty.startdate}
              </Typo>
              {activeIndex === index ? (
                <Dot width={12} />
              ) : (
                <div
                  className={`bg-white  transition-all aspect-square rotate-45`}
                  style={{ width: 6 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
