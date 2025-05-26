import React from "react";
import Typo from "../Typo";
import { Button } from "../Button";
import Div from "../Div";

const animationValue = 1000;

export default function Ticket() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Section 1 */}
      <div className="w-full min-h-screen py-10 grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-10 gap-12">
        {/* Text Section */}
        <div className="flex-1 h-full flex flex-col justify-center gap-8 md:gap-12 md:order-none order-2">
          <Typo className="text-primary text-4xl md:text-6xl">
            GEM Main Galleries
          </Typo>
          <Typo
            font="p"
            direction="left"
            className="text-primary/60 text-sm md:text-base"
          >
            Step back in time and explore the wonders of ancient Egypt at the
            Grand Egyptian Museum. Marvel at the world's only Hanging Obelisk,
            the breathtaking Grand Hall, the majestic Grand Staircase Gallery
            with over 60 remarkable artefacts, and the awe-inspiring Main
            Galleries. <br />
            Within the twelve meticulously curated exhibition halls of the Main
            Galleries, explore Egypt’s rich history, spanning from prehistoric
            times to the Roman era. Delve into the lives, spirituality, and
            burial practices of the Egyptian people as you experience millennia
            of their extraordinary civilisation. <br />
            You can choose to embark on this journey at your own pace or through
            a 90-minute guided tour.
          </Typo>
          <Button>BOOK YOUR TICKET</Button>
        </div>

        {/* Image Section */}
        <div className="relative md:w-full w-[120vw] aspect-square md:ml-52 scale-x-[-1] ">
          <Div
            direction="left"
            value={animationValue}
            duration={1}
            opacity={0.5}
            className="w-full aspect-square object-cover shape absolute top-0 left-0 bg-secondary"
          />
          <Div
            direction="left"
            value={animationValue}
            opacity={0.5}
            duration={1}
            delay={0.2}
          >
            <img
              src="/t1.jpg"
              alt=""
              className="w-full aspect-square object-cover shape absolute top-0 left-5 md:left-20 z-10"
            />
          </Div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full min-h-screen py-10 grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-10 gap-12">
        {/* Image Section */}
        <div className="relative md:w-full w-[120vw] aspect-square md:-ml-52 ml-[-35vw]">
          <Div
            direction="left"
            value={animationValue}
            duration={1}
            opacity={0.5}
            className="w-full aspect-square object-cover shape absolute top-0 left-0 bg-secondary"
          />
          <Div
            direction="left"
            value={animationValue}
            opacity={0.5}
            duration={1}
            delay={0.2}
          >
            <img
              src="/t2.jpg"
              alt=""
              className="w-full aspect-square object-cover shape absolute top-0 left-5 md:left-20 z-10"
            />
          </Div>
        </div>

        {/* Text Section */}
        <div className="flex-1 h-full flex flex-col justify-center items-end gap-8 md:gap-12 text-end">
          <Typo className="text-primary text-4xl md:text-6xl">
            GEM Children Museum
          </Typo>
          <Typo
            font="p"
            direction="right"
            className="text-primary/60 text-sm md:text-base"
          >
            An experience designed to ignite your child’s curiosity about their
            heritage through hands-on learning experiences tailored for young
            minds. The visual, auditory, and sensorial setup of the museum makes
            it an intriguing and captivating space for children to appreciate
            and admire the glory of the ancient Egyptian civilisation. <br />
            General admission tickets allow children to explore at their own
            pace with a chaperone, parent, or guardian. An informative guidebook
            helps them make the most of their visit. Guided tours are also
            available for those who prefer a deeper dive into ancient Egyptian
            life with one of our knowledgeable Egyptologists.
          </Typo>
          <Button>BOOK YOUR TICKET</Button>
        </div>
      </div>
    </div>
  );
}
