import React from "react";
import Typo from "./Typo";

export default function Header({
  symbol,
  title,
  dark,
  gold,
  className,
}: {
  symbol?: string;
  title: string;
  dark?: boolean;
  gold?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <Typo
        delay={1}
        className="md:text-[10vw] text-[15vw] text-secondary text-center"
      >
        {symbol}
      </Typo>
      <Typo
        delay={1.5}
        className={`text-xl md:text-7xl mx-auto text-center mb-10 ${
          gold ? "text-secondary" : dark ? "text-primary" : "text-neutral-800"
        }`}
      >
        {title}
      </Typo>
    </div>
  );
}
