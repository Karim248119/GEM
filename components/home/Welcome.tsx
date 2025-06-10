"use client";
import React, { useEffect, useRef } from "react";
import Dot from "../Dot";
import Typo from "../Typo";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { motion, useScroll, useTransform } from "framer-motion";

export default function Welcome() {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);
  return (
    <div className="w-full h-[130vh] relative" ref={heroRef}>
      <motion.img
        src="https://cdn.hassanallam.com/app/uploads/2022/08/DJI_0999.jpg"
        initial={{ scale: 3 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 1.5,
          duration: 4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute top-0 w-full h-screen object-cover brightness-50 z-0"
      />

      {/* Foreground Content */}
      <div
        ref={textRef}
        className="absolute top-0 bottom-0 w-full h-screen z-10"
      >
        <div className="w-full md:h-screen h-[115vh] relative justify-center items-center">
          <Typo
            delay={1.5}
            className="z-10 absolute top-[30vh] md:left-[20vw] md:w-[60vw] lef-[5vw] w-[90vw] text-primary md:text-9xl text-4xl text-center text-nowrap"
          >
            The Egyptian History <br /> in one place
          </Typo>

          {/* Bottom Info Section */}
          <div className="w-full px-14 absolute bottom-10 flex md:flex-row flex-col gap-10 md:items-center justify-between">
            {/* Left */}
            <div className=" text-primary/60 flex flex-col gap-2 text-xs ">
              <Typo font="h2" className="text-lg capitalize text-primary">
                Daily except Saturdays and Wednesdays
              </Typo>
              <div className="flex items-center gap-2">
                <Dot width={8} />
                <p>GEM Complex: 8:30 AM – 7 PM</p>
              </div>
              <div className="flex items-center gap-2">
                <Dot width={8} />
                <p>Galleries: 9 AM – 6 PM</p>
              </div>
              <div className="flex items-center gap-2">
                <Dot width={8} />
                <p>Last ticket purchase: 5 PM</p>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <div className="w-8 h-8 relative md:flex hidden justify-center items-center">
                <div className="w-full h-full border rotate-45 absolute top-0 left-0 border-primary" />
                <div className="w-1 h-1 rounded-full bg-primary animate-customBounce" />
              </div>
            </div>

            {/* Right */}
            <div className=" text-primary/60 flex flex-col gap-2 text-sm">
              <Typo font="h2" className="text-lg capitalize text-primary">
                Saturday and Wednesday
              </Typo>
              <div className="flex items-center gap-2">
                <Dot width={8} />
                <p>GEM Complex: 8:30 AM – 7 PM</p>
              </div>
              <div className="flex items-center gap-2">
                <Dot width={8} />
                <p>Galleries: 9 AM – 6 PM</p>
              </div>
              <div className="flex items-center gap-2">
                <Dot width={8} />
                <p>Last ticket purchase: 5 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
