import Div from "@/components/Div";
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
      <div className="w-full h-[50vh] relative">
        <img
          src="/ni2.png"
          alt=""
          className="md:h-[50vh] md:w-auto w-[95vw] m-auto absolute md:top-[0vh] top-[5vh] left-1/2 -translate-x-1/2 brightness-75 z-10"
        />
        <div className="absolute md:top-0 top-[5vh] left-1/2 -translate-x-1/2 md:h-full md:w-auto w-[95vw] aspect-square bg-secondary flex justify-center items-center shape">
          <div className="h-[calc(100%-4px)] aspect-square bg-neutral-900 flex justify-center items-center shape" />
        </div>
      </div>
      <Header
        // symbol="𓏞 𓎞 𓏟"
        title="Discover some of the Masterpieces of the Egyptian Museum"
        gold
        className="md:w-2/3 mx-auto md:mb-32 mt-10 px-5"
      />
      <div className="grid md:grid-cols-2 md:gap-52 gap-24 md:pb-52 pb-28 p-5">
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
                      : "md:w-1/2"
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
                    <button className="h-0 opacity-0 -rotate-45 group-hover:h-[15vh] group-hover:opacity-100 arrowbtn overflow-hidden !aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 border-2 border-secondary duration-500">
                      <div className="w-full h-full relative p-5 flex items-center justify-center">
                        <PiArrowRightThin className="arrow text-5xl" />
                      </div>
                    </button>
                  </div>
                  <Div className="flex gap-3 absolute mt-2">
                    <Dot className="md:mt-3 mt-2 aspect-square" />
                    <Typo
                      direction="none"
                      className="text-lg md:text-4xl text-wrap "
                    >
                      {img.title}
                    </Typo>
                  </Div>
                </div>
              </div>
            );
          });
        })}
      </div>
    </Page>
  );
}
