import React from "react";
import Header from "../Header";
import Dot from "../Dot";
import Typo from "../Typo";

export default function Welcome() {
  return (
    <div>
      <img
        src="/ramses.png"
        alt=""
        className="md:h-[90vh] md:w-auto w-[95vw] m-auto absolute md:top-[5vh] top-[10vh] left-1/2 -translate-x-1/2 brightness-75 z-10"
      />
      <div className="absolute md:top-0 top-[10vh] left-1/2 -translate-x-1/2 md:h-[95vh] md:w-auto w-[95vw] aspect-square bg-secondary flex justify-center items-center shape">
        <div className="h-[calc(100%-4px)] aspect-square bg-neutral-900 flex justify-center items-center shape" />
      </div>
      <div className="w-full md:h-screen h-[115vh] relative justify-center items-center">
        <Typo
          delay={1.5}
          className="z-10 absolute top-[45vh] md:left-[20vw] md:w-[60vw] lef-[5vw] w-[90vw] text-primary md:text-9xl text-4xl text-center text-nowrap"
        >
          The Egyptian History <br /> in one place
        </Typo>
        <div className="w-full px-14 absolute bottom-10 flex md:flex-row flex-col gap-10 md:items-center justify-between">
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
  );
}
