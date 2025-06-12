"use client";
import TktLayout from "@/components/TktLayout";
import Typo from "@/components/Typo";
import { AdditionalInfo } from "@/data/ticket";
import React from "react";
import { PiMinus, PiPlus } from "react-icons/pi";

export default function page() {
  const [quantity, setQuantity] = React.useState(0);
  return (
    <TktLayout
      step={3}
      title="Optional Addons"
      next="/contact-details"
      prev="/AdmissionTkt/ticket"
    >
      <div className="md:w-2/3 px-2 mx-auto flex gap-5 md:flex-row flex-col">
        <img
          src="https://visit-gem.com/storage/informations/childaddon.JPG"
          alt=""
          className="md:w-52 w-full object-cover"
        />
        <div>
          <Typo
            direction="none"
            font="h2"
            className="text-secondary text-3xl font-bold"
          >
            GEM discovery challenge :
          </Typo>
          <p>
            Make the most of your visit to the GEM by participating in the GEM
            Discovery Challenge with your friends and family. Learn about a
            selection of artefacts currently on display at the Grand Egyptian
            Museum by seeking clues, solving puzzles, and deciphering the hidden
            treasure's key. The winners of the challenge get to go home with a
            souvenir.
          </p>
          <p>The game is offered daily at 12 PM, 2 PM, 4 PM</p>
          <div className="flex my-6 md:w-1/2">
            <div className="w-1/2 font-semibold">Price: 120 EGP</div>
            <div className="w-1/2 flex items-center justify-end gap-3">
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-5 h-5 flex justify-center items-center border border-secondary hover:bg-secondary hover:text-white duration-300 rotate-45"
              >
                <PiPlus size={10} className="-rotate-45" />
              </button>
              <p className="md:text-base text-xs">{quantity}</p>
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
          <div>
            <Typo
              direction="none"
              font="h2"
              className="text-secondary text-xl font-bold"
            >
              Additional Information:
            </Typo>
            {AdditionalInfo.map((item, index) => (
              <div key={index} className="pl-4 my-2 flex gap-2">
                <span className="h-1 w-1 mt-2 rotate-45 shrink-0 bg-neutral-700"></span>
                <p className="text-sm"> {item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TktLayout>
  );
}
