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
      <Typo className="text-[10vw] text-secondary text-center"> {symbol}</Typo>
      <Typo
        className={`text-lg md:text-7xl mx-auto text-center mb-10 ${
          gold ? "text-secondary" : dark ? "text-primary" : "text-neutral-800"
        }`}
      >
        {title}
      </Typo>
    </div>
  );
}
