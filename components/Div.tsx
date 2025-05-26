"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Direction = "top" | "bottom" | "left" | "right" | "none";

interface DivProps {
  children?: React.ReactNode;
  opacity?: number;
  direction?: Direction;
  value?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function Div({
  children,
  opacity = 0,
  direction = "bottom",
  value = 20,
  duration = 0.5,
  delay = 0,
  className = "",
}: DivProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = { opacity };
    switch (direction) {
      case "top":
        fromVars.y = -value;
        break;
      case "bottom":
        fromVars.y = value;
        break;
      case "left":
        fromVars.x = -value;
        break;
      case "right":
        fromVars.x = value;
        break;
      case "none":
      default:
        break;
    }

    gsap.fromTo(el, fromVars, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top-=400",
        end: "bottom-=400",
        once: true,
      },
    });
  }, [direction, value, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
