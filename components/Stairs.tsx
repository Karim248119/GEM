import React from "react";
import { motion } from "framer-motion";
import { IoPlanet } from "react-icons/io5";
export default function Stairs() {
  const animation = {
    initial: { top: "0%" },
    animate: { top: "100%" },
    exit: { top: ["100%", "0%"] },
  };
  const items = [
    ["𓆣", "𓇉", "𓌅"],
    ["𓌞", "𓅈", "𓌵"],
    ["𓎓", "𓄎", "𓇘"],
    ["𓂛", "𓇴", "𓄦"],
    ["𓃕", "𓇣", "𓋣"],
    ["𓋍", "𓃨", "𓋇"],
  ];
  return (
    <div className="w-full h-full flex">
      {items.map((item, index) => {
        return (
          <motion.div
            key={index}
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            className=" h-full w-full relative bg-neutral-900 border border-primary/5 text-secondary/50 flex flex-col justify-around py-20 items-center md:text-8xl text-4xl font-bold z-[1000]"
          >
            {item.map((item, index) => {
              return (
                <div key={index} className="flex justify-center items-center">
                  {item}
                </div>
              );
            })}
          </motion.div>
        );
      })}
    </div>
  );
}
