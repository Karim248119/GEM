import React from "react";

export default function Logo({ className }: { className: string }) {
  return (
    <div className="flex gap-2 items-end">
      <div
        className={` md:w-10 w-6 aspect-square flex justify-center  bg-accent text-primary rounded-full ${className}`}
      >
        <span className="-mt-2 md:text-5xl text-2xl font-bold ">U</span>
      </div>
      <span className="-mt-2 md:text-3xl text-lg font-bold ">GREEN</span>
    </div>
  );
}
