"use client";
import AnimatedImg from "@/components/AnimatedImg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Typo from "@/components/Typo";
import { Items } from "@/data";
import React, { useState } from "react";

export default function page() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div className="relative w-full overflow-clip bg-neutral-900 text-primary">
      <div>
        <Header
          imgurl="/ni2.png"
          title="The Treasures of Ancient Egypt"
          subtitle="Masterpieces"
          dark
        />
      </div>
      <div className="w-full relative columns-3 gap-40 space-y-40 px-20">
        {Items.map((img, i) => (
          <div
            key={i}
            className={`w-full break-inside-avoid overflow-hidden ${index === i && "scale-110"} duration-500`}
          >
            <AnimatedImg
              key={i}
              src={img.url}
              alt={img.title}
              onMouseEnter={() => setIndex(i)}
              onMouseLeave={() => setIndex(null)}
              className={`w-full object-contain bg-neutral-200 ${index !== i && index !== null && "opacity-10"} ${index === i && "scale-125"} duration-500 ease-in-out`}
            />
          </div>
        ))}
      </div>
      {index !== null && (
        <div className="sticky inset-0 w-full h-screen pointer-events-none flex flex-col gap-5 justify-center px-32 bg-black/40">
          <Typo font="span" className="text-sm text-secondary">
            {Items[index]?.age}
          </Typo>
          <Typo font="h2" className="text-6xl w-2/3">
            {Items[index]?.title}
          </Typo>
          <Typo font="p" className="md:text-xl w-2/3 !opacity-60">
            {Items[index]?.description}
          </Typo>
        </div>
      )}
      <Footer />
    </div>
  );
}
