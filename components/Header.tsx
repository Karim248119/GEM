import React from "react";
import Typo from "./Typo";
import InkImg from "./InkImg";

export default function Header({
  imgurl,
  title,
  subtitle,
  dark,
  className,
  imgClassName,
}: {
  imgurl?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={`w-full h-screen flex items-center justify-center flex-col md:flex-row md:w-2/3 mx-auto  px-5 gap-5 mb-20 text-primary ${className}`}
    >
      {imgurl && (
        <div className="aspect-square h-[50vh] relative">
          <InkImg
            imgurl={imgurl}
            className={`md:h-[70vh] w-full m-auto absolute md:top-[0vh] top-[5vh] left-1/2 -translate-x-1/2 brightness-75 inset-0 z-10 bg-cover bg-center ${imgClassName}`}
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
      <div>
        <div>
          <Typo
            font="span"
            delay={1.5}
            direction="left"
            className="mb-2 text-2xl!"
          >
            {subtitle}
          </Typo>
        </div>
        <Typo
          delay={1.5}
          font="h1"
          direction="left"
          className="text-xl md:text-7xl max-w-1/2"
        >
          {title}
        </Typo>
      </div>
    </div>
  );
}
