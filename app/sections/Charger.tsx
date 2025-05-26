import Spline from "@splinetool/react-spline";
import React from "react";

export default function Charger() {
  return (
    <section id="accessories" className="min-h-screen w-full ">
      <div className="w-full h-full md:grid grid-cols-2 flex flex-col-reverse">
        <div className="bg-primary z-20 flex flex-col justify-center md:gap-10 gap-5 md:px-20 px-5">
          <h1 className="md:text-7xl text-4xl font-bold text-shadow">
            Fast recharger
          </h1>
          <p className=" font-extralight md:text-base text-sm">
            Get back to your music in no time with ultra-fast charging. A few
            minutes of charge gives you hours of uninterrupted playback,
            ensuring your earbuds are always ready when you are.
          </p>
        </div>
        <div className="h-screen w-full overflow-hidden relative bg-primary z-20">
          <div className="h-[80vh] overflow-hidden w-full flex justify-center items-center">
            <div className="h-screen w-full">
              <Spline
                scene="https://prod.spline.design/VQCQUdYxQ9u72Fp0/scene.splinecode"
                className="md:-ml-8 h-[100vh]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
