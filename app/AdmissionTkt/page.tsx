"use client";
import TktLayout from "@/components/TktLayout";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // You can remove this if overriding fully
import "./calendar.css";
import Typo from "@/components/Typo";
export default function Page() {
  const [date, setDate] = useState<any>(new Date());

  return (
    <TktLayout
      step={1}
      title="Select Date"
      next="/AdmissionTkt/ticket"
      prev="/"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <Calendar
          onChange={setDate}
          value={date}
          className="!bg-primary !border-none !lg:w-1/2"
          tileClassName={({ date: tileDate }) => {
            const isSelected = tileDate.toDateString() === date.toDateString();

            return `text-center  !text-neutral-600 !hover:bg-neutral-800/10 py-2 
              ${isSelected ? "!bg-secondary text-white font-bold" : ""}`;
          }}
          next2Label={null}
          prev2Label={null}
          showNeighboringMonth={false}
        />
      </div>
      <div className="flex items-center justify-center gap-2  mt-10">
        <Typo
          direction="none"
          className="text-2xl text-secondary font-semibold"
        >
          Selected :
        </Typo>
        <span className="text-lg">{date.toDateString()}</span>
      </div>
    </TktLayout>
  );
}
