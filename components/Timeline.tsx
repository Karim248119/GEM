"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Typo from "./Typo";
import Dot from "./Dot";
import Div from "./Div";

interface Content {
  h: string;
  p: string;
  imgSrc?: string;
}

interface TimelineEntry {
  title: string;
  content: Content;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (lineRef.current) {
      const rect = lineRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [lineRef]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-primary md:px-10 " ref={containerRef}>
      <div ref={lineRef} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem key={index} title={item.title} content={item.content} />
        ))}

        {/* Vertical Timeline Line */}
        <div
          style={{ height: `${height}px` }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] bg-black/10 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-neutral-900 via-secondary to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export const TimelineItem = ({
  title,
  content,
}: {
  title: string;
  content: Content;
}) => {
  const itemRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 100%", "end 30%"],
  });

  return (
    <div
      ref={itemRef}
      className="w-full flex justify-start pt-10 md:pt-40 md:gap-10 "
    >
      <div className="sticky flex flex-col md:flex-row z-20 items-center top-40 self-start max-w-xs lg:max-w-md md:w-full">
        <div className="h-10 absolute left-3 md:left-[13px] w-10 rounded-full flex items-center justify-center">
          <Dot width={14} className="bg-primary" />
        </div>
        <Typo
          font="h2"
          direction="none"
          className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-secondary"
        >
          {title}
        </Typo>
      </div>

      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-secondary">
          {title}
        </h3>
        <div>
          <Typo
            direction="none"
            className="mb-4 text-lg font-normal text-neutral-800 md:text-2xl"
          >
            {content.h}
          </Typo>
          <div className="flex md:flex-row flex-col-reverse gap-4 w-full">
            <p className="text-sm md:w-1/2 w-full">{content.p}</p>
            {content.imgSrc && (
              <Div direction="right" className="md:w-1/2 w-full aspect-square">
                <img
                  src={content.imgSrc}
                  alt="startup template"
                  width={500}
                  height={500}
                  className="w-full aspect-square object-cover rounded m-auto"
                />
              </Div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
