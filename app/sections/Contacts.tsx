import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

export default function Contacts() {
  const contacts = [
    {
      title: "facebook",
      icon: <FaFacebook />,
      className: "facebook text-white",
    },
    {
      title: "Email",
      icon: <BiLogoGmail />,
      href: "mailto:karimoda66@gmail.com",
    },
    {
      title: "linkedin",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/karim248/",
    },

    {
      title: "Whatsapp",
      icon: <FaWhatsapp />,
      href: "https://wa.me/201020096263",
    },
  ];
  return (
    <footer
      id="contact"
      className="h-[20vh] w-full bg-primary flex items-center justify-center gap-6 z-10 relative"
    >
      {contacts.map((contact) => (
        <a
          key={contact.title}
          href=""
          className="flex items-center justify-center text-2xl text-accent/50 hover:text-accent rounded-full transition duration-300"
        >
          {contact.icon}
        </a>
      ))}
    </footer>
  );
}
