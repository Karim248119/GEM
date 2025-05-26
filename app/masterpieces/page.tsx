import Dot from "@/components/Dot";
import Header from "@/components/Header";
import Img from "@/components/Img";
import Page from "@/components/Page";
import Typo from "@/components/Typo";
import { Items } from "@/data";
import React from "react";
import { PiArrowRightThin } from "react-icons/pi";

export default function page() {
  const rows = [];

  for (let i = 0; i < Items.length; i += 2) {
    const pair = Items.slice(i, i + 2);
    rows.push(pair);
  }

  return (
    <Page className="relative w-full overflow-clip pt-14 bg-neutral-900 text-primary">
      <Header
        symbol="𓊣"
        title="Discover some of the Masterpieces of the Egyptian Museum"
        dark
        className="w-2/3 mx-auto mb-32"
      />
      <div className="grid grid-cols-2 gap-52 pb-52 p-5">
        {rows.map((pair, rowIndex) => {
          const isEvenRow = rowIndex % 2 === 0;
          const orderedPair = isEvenRow ? pair : [pair[1], pair[0]];

          return orderedPair.map((img, i) => {
            const actualIndex = rowIndex * 2 + i;
            const isFirst = i === 0;

            return (
              <div key={actualIndex} className="flex flex-col w-full">
                <div
                  className={`h-auto object-contain ${
                    (isEvenRow && isFirst) || (!isEvenRow && !isFirst)
                      ? "w-full"
                      : "w-1/2"
                  }
                  ${isEvenRow && !isFirst && "self-end"}
                  `}
                >
                  <div className="relative group overflow-hidden">
                    <Img
                      src={img.url}
                      alt={img.title}
                      width={500}
                      height={500}
                      className="w-full object-contain !max-h-screen"
                    />
                    <div className="w-full h-full bg-black/0 group-hover:bg-neutral-900/80 absolute top-0 duration-300" />
                    <button className="h-0 -rotate-45 group-hover:h-[15vh] arrowbtn overflow-hidden !aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 border-2 border-secondary duration-500">
                      <div className="w-full h-full relative p-5 flex items-center justify-center">
                        <PiArrowRightThin className="arrow text-5xl" />
                      </div>
                    </button>
                  </div>
                  <div className="flex gap-3 absolute mt-2">
                    <Dot width={14} className="mt-3" />
                    <Typo className="text-lg md:text-4xl text-wrap ">
                      {img.title}
                    </Typo>
                  </div>
                </div>
              </div>
            );
          });
        })}
      </div>
    </Page>
  );
}
