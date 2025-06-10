import React from "react";
import Typo from "./Typo";
import InkImg from "./InkImg";

export default function Header({
  imgurl,
  title,
  dark,
  gold,
  className,
}: {
  imgurl?: string;
  title: string;
  dark?: boolean;
  gold?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`w-full flex items-center justify-center flex-col md:flex-row mb-20 md:mb-10 gap-10 md:gap-5 lg:gap-0 ${className}`}
    >
      {imgurl && (
        <div className="w-full h-[50vh] relative ">
          <InkImg
            imgurl={imgurl}
            className="md:h-[50vh] md:w-auto w-[95vw] m-auto absolute md:top-[0vh] top-[5vh] left-1/2 -translate-x-1/2 brightness-75 inset-0 z-10 bg-cover bg-center"
          />
          <div className="absolute md:top-0 top-[5vh] left-1/2 -translate-x-1/2 md:h-full md:w-auto w-[95vw] aspect-square bg-secondary flex justify-center items-center shape">
            <div
              className={`h-[calc(100%-4px)] aspect-square  flex justify-center items-center shape ${
                !dark ? "bg-primary" : "bg-neutral-900"
              }`}
            />
          </div>
        </div>
      )}
      <Typo
        delay={1.5}
        direction="left"
        className="text-xl md:text-7xl text-secondary"
      >
        {title}
      </Typo>
    </div>
  );
}
