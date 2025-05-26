import React from "react";

export default function Dot({
  width = 10,
  className,
}: {
  width?: number;
  className?: string;
}) {
  return (
    <div
      className={`border border-secondary rotate-45 flex justify-center items-center shrink-0 ${className}`}
      style={{ width, height: width }}
    >
      <div className="w-1/2 h-1/2 bg-secondary" />
    </div>
  );
}
