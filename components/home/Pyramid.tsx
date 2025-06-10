"use client";
import { useState } from "react";
import Typo from "../Typo";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { TfiClose } from "react-icons/tfi";
import ReactPlayer from "react-player";

const Items = [
  {
    title: "The Grand Stairway",
    sides: ["/p/11.jpg", "/p/12.jpg", "/p/11.jpg", "/p/12.jpg"],
    vidId: "Lrblq2cjpp4",
  },
  {
    title: "Tutankhamun Immersive Exhibition",
    sides: ["/p/22.jpg", "/p/2.jpg", "/p/22.jpg", "/p/2.jpg"],
    vidId: "l8vC35FZGfw",
  },
  {
    title: "The Official GEM Shop",
    sides: ["/p/31.jpg", "/p/32.jpg", "/p/31.jpg", "/p/32.jpg"],
    vidId: "W7rdJlAOzqE",
  },
];

export default function Pyramid() {
  const [current, setCurrent] = useState(1);
  const [time, setTime] = useState(10);
  const [vidOpen, setVidOpen] = useState(false);

  const next = () => {
    setTime(0.5);
    setCurrent((prev) => (prev + 1) % Items.length);
    setTimeout(() => setTime(10), 600);
  };

  const prev = () => {
    setTime(0.5);
    setCurrent((prev) => (prev - 1 + Items.length) % Items.length);
    setTimeout(() => setTime(10), 600);
  };

  const selectIndex = (index: number) => {
    setTime(0.5);
    setCurrent(index);
    setTimeout(() => setTime(10), 600);
  };
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <section className="lg:mt-20 lg:mb-40 w-full flex flex-col justify-center">
        <div
          key={current}
          className="lg:h-[60vh] h-[100vh] overflow-hidden relative"
        >
          <div className="absolute top-0 left-0 lg:w-1/2 h-full flex flex-col lg:justify-center justify-end items-center lg:items-start lg:px-20 px-5 lg:gap-10 gap-5 lg:mt-10 -mt-20">
            <Typo className="lg:text-5xl text-3xl lg:text-start text-center text-secondary">
              {Items[current].title}
            </Typo>
            <Typo font="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates sequi temporibus deleniti, natus neque adipisci dolor
              quod impedit aliquam? Vitae voluptates ipsa rem veniam adipisci,
              facilis sint rerum illo officiis.
            </Typo>
            <div className="flex gap-5 items-center text-secondary text-4xl z-10">
              <button onClick={prev}>←</button>
              <div className="flex mt-2 gap-2">
                {Items.map((item, idx) => (
                  <button
                    onClick={() => selectIndex(idx)}
                    key={idx}
                    className={`w-2 border border-secondary aspect-square rotate-45 ${
                      idx === current ? "bg-secondary" : "bg-secondary/0"
                    }`}
                  ></button>
                ))}
              </div>
              <button onClick={next}>→</button>
            </div>
          </div>
          <div className="relative mx-auto w-[1200px] aspect-square pyramid-container !-rotate-[5deg]">
            {Items[current].sides.map((side, idx) => (
              <button
                onClick={() => setVidOpen(true)}
                key={idx}
                className={`pyramid-side lg:w-96 w-[75vw] aspect-square absolute lg:right-0 lg:top-28 md:top-0 top-10 md:right-1/2 right-[70%] translate-x-1/2 overflow-hidden origin-top`}
                style={{
                  animationName: "spin-pyramid",
                  animationDuration: `${time}s`,
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                  animationDelay:
                    idx === 0
                      ? `-${time * 0.75}s`
                      : idx === 1
                      ? `0s`
                      : idx === 2
                      ? `-${time * 0.25}s`
                      : `-${time * 0.5}s`,
                }}
              >
                <img
                  src={side}
                  alt=""
                  className="w-full h-full object-cover object-top border-4 border-secondary "
                />
              </button>
            ))}
          </div>
        </div>
        <div
          className={`w-screen h-screen flex justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] ${
            !vidOpen && "pointer-events-none"
          }`}
        >
          <div
            className="w-full h-full fixed top-0 left-0 z-[100]"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              backgroundColor: "rgba(0,0,0,0.5)",
              opacity: vidOpen ? 1 : 0,
            }}
          />
          <button
            className={`w-10 h-10 absolute top-5 right-8 text-3xl text-primary z-[102] duration-300 ${
              vidOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setVidOpen(false)}
          >
            <TfiClose />
          </button>
          <div
            className={`relative z-[101] aspect-square rotate-45 overflow-hidden duration-1000 flex justify-center items-center ${
              vidOpen ? "w-[100vw]" : "w-0"
            }`}
          >
            <div className="w-[70vw] aspect-video absolute -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${Items[current].vidId}`}
                playing={vidOpen}
                controls
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
}
