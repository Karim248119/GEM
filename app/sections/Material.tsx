import Spline from "@splinetool/react-spline";
import React from "react";

export default function Material() {
  return (
    <section
      id="features"
      className="h-[300vh] w-full md:flex justify-center items-center hidden  relative"
    >
      <div className=" fixed -top-14 ">
        <div className="h-screen w-full overflow-hidden relative ">
          <div className="m-auto h-[80vh] flex flex-col justify-end  absolute left-1/2 -translate-x-1/2 gap-10 top-0">
            <div className="flex gap-5">
              <h1 className="text-8xl font-bold text-center text-nowrap text-shadow">
                High Quality
              </h1>
              <h2 className="text-8xl font-bold text-center text-transparent">
                Material
              </h2>
            </div>
            <p className="font-extralight md:text-base text-sm w-1/2">
              Designed for durability and comfort, our earbuds feature premium
              materials that ensure a lightweight yet sturdy build. Experience a
              perfect blend of style, strength, and long-lasting performance.
            </p>
          </div>

          <div className=" ">
            <Spline scene="https://prod.spline.design/hwmHHfsbVRJhbWDQ/scene.splinecode" />
          </div>
          <div className="w-[10vw] h-[10vh] absolute bottom-0 right-0 bg-primary" />
        </div>
      </div>
    </section>
  );
}
