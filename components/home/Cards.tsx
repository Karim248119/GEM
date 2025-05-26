import React from "react";
import Typo from "../Typo";
import Dot from "../Dot";

const Items = [
  {
    title: "Exhibition Galleries",
    num: "100",
  },
  {
    title: "Sq. Meter Area",
    num: "10,000",
  },
  {
    title: " Masterpieces",
    num: "100,000",
  },
];

export default function Cards() {
  return (
    <div className="md:h-screen w-full flex flex-col md:gap-32 gap-20 justify-center items-center text-primary mt-20 mb-16">
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-20 gap-10">
        {Items.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full flex flex-col justify-center items-center relative"
            >
              <div
                className={`h-[40vh] aspect-square flex flex-col justify-center items-center gap-4 bg-secondary text-primary shape`}
              >
                {index === 1 && (
                  <div className="w-[calc(100%-4px)] aspect-square -z-10 shape bg-neutral-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                )}
                <Typo
                  font="h2"
                  className=" font-extralight md:text-base text-sm"
                >
                  More Than
                </Typo>
                <Typo
                  font="h2"
                  className="md:text-4xl text-4xl font-bold text-shadow"
                >
                  {item.num}
                </Typo>
              </div>
              <div className="flex items-center absolute bottom-5 right-5 gap-2">
                <Dot />
                <Typo
                  font="p"
                  direction="right"
                  className=" md:text-base text-sm "
                >
                  {item.title}
                </Typo>
              </div>
            </div>
          );
        })}
      </div>
      <Typo className="md:text-6xl text-3xl text-center text-secondary px-5">
        More than just a museum
      </Typo>
    </div>
  );
}
