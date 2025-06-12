"use client";
import { TicketData } from "@/data/ticket";
import React, { useEffect, useRef, useState } from "react";
import { PiMinus, PiPlus } from "react-icons/pi";

const Collapsible = () => {
  return (
    <div className="bg-primary border-t border-neutral-900/20 text-neutral-900 h-full w-full my-10 text-xs md:text-base">
      {TicketData.map((item, index) => (
        <CollapseItem num={index + 1} title={item.title} key={`item-${index}`}>
          <div className="w-full p-2">
            {item.categories.map((category, index) => {
              const [quantity, setQuantity] = useState(0);
              return (
                <div
                  key={`category-${index}`}
                  className="w-full flex justify-between items-center p-2"
                >
                  <p className="w-1/3">{category.title}</p>
                  <p className="w-1/3 text-center">{category.price} EGP</p>
                  <div className="w-1/3 flex items-center justify-end gap-3">
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-5 h-5 flex justify-center items-center border border-secondary hover:bg-secondary hover:text-white duration-300 rotate-45"
                    >
                      <PiPlus size={10} className="-rotate-45" />
                    </button>
                    <p className="md:text-sm text-xs">{quantity}</p>
                    <button
                      onClick={() => {
                        quantity > 0 && setQuantity(quantity - 1);
                      }}
                      className="w-5 h-5 flex justify-center items-center border border-secondary hover:bg-secondary hover:text-white duration-300 rotate-45"
                    >
                      <PiMinus size={10} className="-rotate-45" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </CollapseItem>
      ))}
    </div>
  );
};

export default Collapsible;

const CollapseItem = ({
  num,
  title,
  children,
}: {
  num: number;
  title: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    if (isOpen && ref.current) {
      setHeight(`${ref.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);
  return (
    <div className="relative border-b border-neutral-900/20 group ">
      <button
        onClick={() => {
          setisOpen(!isOpen);
        }}
        className="w-full flex justify-between gap-2 items-center md:py-5 px-2 md:h-auto h-20"
      >
        <div className="flex items-center gap-3">
          <h2
            className={`capitalize md:text-3xl font-extrabold !font-sans ${
              isOpen ? "text-secondary" : "text-outline text-transparent"
            }`}
            style={{
              WebkitTextStrokeWidth: isOpen ? "0" : "1px",
              WebkitTextStrokeColor: "black",
            }}
          >
            {title}
          </h2>
        </div>
        <div className=" relative md:w-8 w-5 aspect-square flex justify-center items-center">
          <div
            className={`md:w-7 w-4 h-[0.5px] group-hover:bg-secondary bg-neutral-900 duration-500 absolute ${
              isOpen && "rotate-90"
            }`}
          />
          <div className="md:w-7 w-4 h-[0.5px] group-hover:bg-secondary bg-neutral-900 duration-500 center" />
        </div>
      </button>
      <div style={{ height }} className="overflow-hidden duration-500 ">
        <div ref={ref}> {children}</div>
      </div>
      <div className="w-0 h-[1px] bg-secondary z-10 group-hover:w-full duration-700 absolute -bottom-[1px]" />
    </div>
  );
};
