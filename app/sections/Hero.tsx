import Spline from "@splinetool/react-spline";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="md:min-h-screen h-[100vh] overflow-hidden w-full pt-14 md:px-20 px-5 flex">
      <div className="h-full w-[5vw] flex flex-col pt-40 gap-8 md:text-base text-xs">
        <p className=" rotate-90 text-nowrap w-2 md:ml-2">Follow us</p>
        <div className="w-[1px] h-8 bg-accent/20 mt-6 md:ml-2 ml-1" />
        <div className="flex flex-col gap-5 w-10">
          <FaYoutube />
          <FaInstagram />
          <FaFacebookF />
        </div>
      </div>
      <div className="h-screen w-[90vw] overflow-hidden relative bg-primary z-20">
        <div className="w-full h-[60vh] flex flex-col justify-end items-center gap-5 absolute top-0 ">
          <h1 className="md:text-9xl text-5xl font-bold text-center text-shadow md:z-10">
            Crystal
          </h1>
          <h1 className="md:text-9xl text-5xl font-bold text-center text-shadow flex md:flex-row flex-col items-end gap-5">
            <span className="z-10">Clear</span>
            <span className="-z-10">Sound</span>
          </h1>
        </div>
        <div className="h-[120vh] ">
          {/* <Spline scene="https://prod.spline.design/EaOxUJR87DMEYSNa/scene.splinecode" /> */}
          <img
            src="/home.png"
            className="md:w-[40vw] w-[100vw] center scale-up z-0 -mt-14"
            alt=""
          />
        </div>
        <div className="w-[10vw] h-[5vh] absolute bottom-0 right-0 bg-primary" />
      </div>
      <div className="h-full w-[5vw]  flex flex-col  items-end pt-40 gap-40 md:text-base text-xs">
        <p className=" rotate-90 text-nowrap w-2">Wireless</p>
        <p className=" rotate-90 text-nowrap w-2">Best Studio 3</p>
      </div>
    </section>
  );
}
