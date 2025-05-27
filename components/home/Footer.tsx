import React from "react";
import Typo from "../Typo";
import Dot from "../Dot";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

const Contacts = [
  {
    title: "facebook",
    icon: <FaFacebookF />,
    href: "#",
  },
  {
    title: "tiktok",
    icon: <FaTiktok />,
    href: "#",
  },
  {
    title: "youtube",
    icon: <FaYoutube />,
    href: "#",
  },
  {
    title: "instagram",
    icon: <FaInstagram />,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="h-[50vh] w-full bg-neutral-900 text-primar grid md:grid-cols-3 md:grid-rows-1 grid-rows-2 md:px-20"
    >
      <div className=" h-full w-full md:p-10 p-5 space-y-4 md:col-span-2 text-primary text-sm md:text-base">
        <Typo direction="none" className="text-5xl md:text-9xl text-secondary">
          Contact us
        </Typo>
        <div className="flex items-center gap-1">
          <Dot width={8} />
          <a
            href="mailto:Tourism_info@easwaaqmisr.com"
            className="hover:text-secondary duration-300"
          >
            Tourism_info@easwaaqmisr.com
          </a>
        </div>
        <div className="flex items-center gap-1">
          <Dot width={8} />
          <p>+20235317344</p>
        </div>
      </div>
      <div className=" h-full w-full md:pt-24 md:p-10 p-5 flex flex-col justify-between text-sm md:text-base">
        <div className="flex items-center gap-2 font-semibold text-primary">
          A PROJECT POWERD BY
          <a href="https://easwaaqmisr.com/">
            <img
              src="https://easwaaqmisr.com/wp-content/uploads/2022/12/easwaaq.svg"
              alt="easwaaqmisr"
              className="h-6 brightness-0 invert"
            />
          </a>
        </div>
        <div className="flex items-center gap-5 text-primary text-base md:text-lg">
          {Contacts.map((contact) => (
            <a
              href={contact.href}
              key={contact.title}
              className="hover:text-secondary duration-300"
            >
              {contact.icon}
            </a>
          ))}
        </div>
        <div className="self-center md:self-start">
          © 2025 All rights reserved. GEM
        </div>
      </div>
    </footer>
  );
}
