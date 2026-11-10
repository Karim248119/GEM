"use client";
import { Fonts } from "@/lib/fonts";
import React from "react";
import { motion } from "framer-motion";
import Dot from "./Dot";

type Direction = "top" | "left" | "right" | "bottom" | "none";

export default function Typo({
  className,
  style,
  children,
  font,
  direction = "bottom",
  delay = 0,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  font?: "h1" | "h2" | "p" | "base" | "span";
  direction?: Direction;
  delay?: number;
}) {
  const fontClass =
    font === "h1"
      ? Fonts.header1.className
      : font === "h2"
        ? Fonts.header2.className
        : Fonts.base.className;

  const getInitialPosition = (dir: Direction) => {
    switch (dir) {
      case "top":
        return { opacity: 0, y: -40 };
      case "bottom":
        return { opacity: 0, y: 40 };
      case "left":
        return { opacity: 0, x: -40 };
      case "right":
        return { opacity: 0, x: 40 };
      case "none":
      default:
        return { opacity: 1 };
    }
  };

  const getAnimatePosition = (dir: Direction) => {
    switch (dir) {
      case "top":
      case "bottom":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "none":
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition(direction)}
      whileInView={getAnimatePosition(direction)}
      transition={{ duration: 1, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.5 }}
      className={`
        ${fontClass} 
        ${font === "p" ? "md:text-sm text-xs" : ""}
        ${className} 
      `}
      style={style}
    >
      {font === "span" ? (
        <span
          className={`flex items-center gap-2 text-sm font-semibold text-secondary ${Fonts.header1.className}`}
        >
          <Dot /> {children}
        </span>
      ) : (
        children
      )}
    </motion.div>
  );
}
