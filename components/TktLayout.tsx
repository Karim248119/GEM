import React from "react";
import Header from "./Header";
import Page from "./Page";
import Typo from "./Typo";
import Link from "next/link";

export default function TktLayout({
  children,
  step,
  title,
  next,
  prev,
}: {
  children: React.ReactNode;
  step: number;
  title: string;
  next?: string;
  prev?: string;
}) {
  return (
    <Page className="relative w-full pt-8 pb-12 bg-primary">
      <div>
        <Header title="GEM Ticket" imgurl="/ni2.png" className="text-nowrap" />
      </div>
      <div className="flex gap-2 items-center justify-center">
        {Array.from({ length: 5 }, (_, i) => (
          <>
            <div
              key={`step-${i}`}
              className={`lg:w-7 lg:h-7 w-5 h-5 lg:text-sm text-xs flex justify-center items-center border border-secondary rotate-45 ${
                i + 1 <= step && "bg-secondary text-white"
              }`}
            >
              <div className="-rotate-45">{i + 1}</div>
            </div>
            {i !== 4 && (
              <div
                key={`line-${i}`}
                className="h-[1px] lg:w-10 w-5 bg-secondary"
              />
            )}
          </>
        ))}
      </div>
      <Typo
        font="h2"
        direction="none"
        className="text-center mt-10 mb-5 capitalize text-2xl font-semibold"
      >
        {title}
      </Typo>
      <div>{children}</div>
      <div className="w-full flex justify-around mt-14">
        {prev && (
          <Link
            href={prev}
            className="flex gap-2 items-center font-semibold group p-2"
          >
            <span className=" text-secondary mb-1 group-hover:-translate-x-2 duration-200">
              ←
            </span>
            <Typo font="h2" direction="none">
              PREV
            </Typo>
          </Link>
        )}
        {next && (
          <Link
            href={next}
            className="flex gap-2 items-center font-semibold group p-2"
          >
            <Typo font="h2" direction="none">
              NEXT
            </Typo>
            <span className="text-secondary mb-1 group-hover:translate-x-2 duration-200">
              →
            </span>
          </Link>
        )}
      </div>
    </Page>
  );
}
