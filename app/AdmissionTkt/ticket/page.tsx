"use client";
import TktLayout from "@/components/TktLayout";
import Collapsible from "./Collapsible";
import Typo from "@/components/Typo";
import { TicketNotes } from "@/data/ticket";
import Dot from "@/components/Dot";

export default function Page() {
  return (
    <TktLayout
      step={2}
      title="Select Ticket"
      next="/addons"
      prev="/AdmissionTkt"
    >
      <div className="md:w-2/3 px-2 mx-auto">
        <Collapsible />
        <div>
          <Typo font="h1" className="text-secondary text-3xl font-bold">
            Important Informations :
          </Typo>
          <div>
            {TicketNotes.map((item, index) => (
              <div key={`item-${index}`} className="my-2">
                <Typo
                  direction="none"
                  font="h2"
                  className="font-semibold flex gap-2"
                >
                  <Dot className="mt-[6px]" /> {item.point}
                </Typo>
                {item.subpoints &&
                  item.subpoints.map((subitem, subindex) => (
                    <div
                      key={`subitem-${subindex}`}
                      className="pl-4 my-2 flex gap-2"
                    >
                      <span className="h-1 w-1 mt-2 rotate-45 shrink-0 bg-neutral-700"></span>
                      <p className="text-sm"> {subitem}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </TktLayout>
  );
}
