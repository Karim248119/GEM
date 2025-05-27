"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import Typo from "./Typo";

export default function Navbar() {
  const Links = [
    { text: "Home", href: "/" },
    { text: "Master Pieces", href: "/masterpieces" },
    { text: "Time Line", href: "/timeline" },
    { text: "Contact", href: "#contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(true);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY < prevScrollY.current) {
        setShowNavLinks(true);
      } else {
        setShowNavLinks(false);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Link href="/">
        <div className="mix-blend-difference  absolute md:top-4 top-6 md:left-20 left-5 z-30">
          <img
            src="/logo.png"
            alt="logo"
            className="md:h-14 h-10 w-auto mix-blend-difference "
          />
        </div>
        <div className="absolute md:top-4 top-6 md:left-20 left-5 z-30">
          <img
            src="/logotext.png"
            alt="logo"
            className="md:h-14 h-10 w-auto mix-blend-difference "
          />
        </div>
      </Link>
      <div
        className={`flex md:gap-10 gap-2 items-center top-5 md:right-20 right-3 z-50 mix-blend-difference ${
          isOpen ? "fixed" : "absolute"
        }`}
      >
        <button
          className={`md:w-6 w-4 aspect-square md:text-xs text-[8px] relative text-primary flex justify-center items-center duration-500 ${
            isOpen && "opacity-0"
          }`}
        >
          <span className="w-full h-full border border-primary rotate-45 absolute top-0 left-0" />
          <span className="-mt-1 ">ع</span>
        </button>
        <AnimatePresence>
          {showNavLinks && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex gap-10 items-center"
            >
              <div
                className={`w-[1px] bg-primary origin-center duration-300 ease-in-out hidden xl:block ${
                  isOpen ? "h-0" : "h-4"
                }`}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          className="flex md:w-20 z-50 w-12 h-10 flex-col gap-2 overflow-hidden group relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`w-full h-[1px] origin-top bg-primary absolute z-40 top-4 left-0 duration-500 ${
              isOpen
                ? "rotate-45 md:top-4 top-5 left-0"
                : "md:group-hover:left-5"
            }`}
          />
          <div
            className={`w-full h-[1px] z-50 bg-primary absolute bottom-4  left-0 duration-500  ${
              isOpen
                ? "-rotate-45 md:bottom-4 bottom-5"
                : "md:group-hover:-left-5"
            }`}
          />
        </button>
      </div>
      <div
        className={`h-screen overflow-x-hidden bg-neutral-900 fixed left-0 top-0 duration-1000 delay-300 ease-in-out z-30 ${
          isOpen ? "w-screen" : "w-0"
        }`}
      >
        <div className="w-full h-full flex md:flex-row flex-col relative">
          <div className="flex gap-10 md:w-3/4 w-full md:h-full h-3/4 justify-center items-center md:flex-row flex-col ">
            <div className="flex flex-col gap-5 text-primary">
              <AnimatePresence>
                {isOpen &&
                  Links.map((link, index) => (
                    <motion.div
                      key={index}
                      className="group w-fit relative"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.5 + (index + 1) * 0.15,
                      }}
                    >
                      <Link
                        onClick={() => setIsOpen(false)}
                        href={link.href}
                        className="overflow-hidden flex md:gap-10 gap-5 items-center p-3"
                      >
                        <div className="font-light text-sm w-8 flex justify-center items-center aspect-square relative duration-300">
                          <div className="h-full aspect-square absolute -z-10 top-0 left-0 rotate-45 border border-secondary group-hover:bg-secondary duration-300" />
                          <span>{index + 1}</span>
                        </div>
                        <Typo
                          direction="none"
                          font="h2"
                          className="md:text-6xl text-4xl capitalize text-nowrap"
                        >
                          {link.text}
                        </Typo>
                      </Link>
                      <div className="w-0 h-[1px] ml-10 group-hover:w-2/3 bg-secondary duration-700 origin-bottom -rotate-45 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>
          <div
            className={`md:w-[1px] h-[0.5px] bg-primary origin-center duration-300 ease-in-out m-auto ${
              isOpen ? "md:h-[90vh] w-[90vw]" : "md:h-0 w-0"
            }`}
          />
          <div className="relative flex md:w-1/4 w-full md:h-full h-1/4">
            <div className="absolute md:bottom-28 md:left-5 md:translate-x-0 md:translate-y-0 left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 flex flex-col gap-5">
              <button className="flex gap-2 items-center hover:text-secondary duration-300">
                Facebook
                <GoArrowUpRight />
              </button>
              <button className="flex gap-2 items-center hover:text-secondary duration-300">
                Twitter
                <GoArrowUpRight />
              </button>
              <a
                href="mailto:Tourism_info@easwaaqmisr.com"
                className="hover:text-secondary duration-300"
              >
                Tourism_info@easwaaqmisr.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
