import React from "react";
import Header from "../Header";
import Dot from "../Dot";
import Typo from "../Typo";

export default function Welcome() {
  return (
    <div>
      <img
        src="/maat.png"
        alt=""
        className="h-screen w-auto m-auto absolute top-0 left-1/2 -translate-x-1/2 brightness-50 z-10"
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-screen aspect-square bg-secondary flex justify-center items-center shape">
        <div className="h-[calc(100%-4px)] aspect-square bg-neutral-900 flex justify-center items-center shape" />
      </div>
      <div className="w-full h-screen relative">
        <Typo className="z-10 absolute top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 text-secondary text-9xl text-center text-nowrap">
          The Egyptian History <br /> in one place
        </Typo>
        <div className="absolute bottom-10 left-5 text-primary/60 flex flex-col gap-2 text-xs">
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
        <div className="absolute bottom-10 right-5 text-primary/60 flex flex-col gap-2 text-sm">
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
  );
}
