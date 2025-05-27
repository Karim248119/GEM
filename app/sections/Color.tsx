import Spline from "@splinetool/react-spline";
import React from "react";

export default function Color() {
  return (
    <section id="models" className="min-h-screen w-full ">
      <div className="w-full h-full md:grid grid-cols-2 ">
        <div className="h-screen w-full overflow-hidden relative bg-primary z-20">
          <div className=" w-full h-screen flex justify-center items-center">
            <div className="md:h-[60vh] h-[65vh] md:w-[25vw] overflow-hidden flex justify-center items-center">
              <Spline
                scene="https://prod.spline.design/cVtwg880JECXupT1/scene.splinecode"
                className=" md:scale-100 m-auto w-1/2 "
              />
            </div>
          </div>
        </div>
        <div className="bg-primary z-20 flex flex-col justify-center md:gap-10 gap-5 md:px-20 px-5">
          <h1 className="md:text-7xl text-4xl font-bold text-shadow">
            Varaity
            <br />
            of colors
          </h1>
          <p className=" font-extralight md:text-base text-sm">
            Express yourself with a range of vibrant colors. Whether you prefer
            a sleek, classic look or a bold, standout style, our earbuds come in
            shades that match your personality.
          </p>
        </div>
      </div>
    </section>
  );
}
