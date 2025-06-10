"use client";
import React, { useMemo } from "react";

export default function InkImg({
  imgurl,
  className,
}: {
  imgurl: string;
  className?: string;
}) {
  const maskUrl = useMemo(() => `/ink_lv2.gif?t=${Date.now()}`, []);

  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${imgurl})`,
        WebkitMaskImage: `url("${maskUrl}")`,
        maskImage: `url("${maskUrl}")`,
        WebkitMaskSize: "cover",
        maskSize: "cover",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}
