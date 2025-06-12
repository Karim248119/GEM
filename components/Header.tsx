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
      className={`w-full flex items-center justify-center flex-col md:flex-row md:w-2/3 mx-auto md:mb-32 mt-10 px-5 gap-5 mb-20 ${className}`}
    >
      {imgurl && (
        <div className="aspect-square h-[50vh] relative">
          <InkImg
            imgurl={imgurl}
            className="md:h-[50vh] w-full m-auto absolute md:top-[0vh] top-[5vh] left-1/2 -translate-x-1/2 brightness-75 inset-0 z-10 bg-cover bg-center"
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
        className="text-xl md:text-7xl text-secondary max-w-1/2"
      >
        {title}
      </Typo>
    </div>
  );
}
