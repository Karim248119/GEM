"use client";
import TktLayout from "@/components/TktLayout";
import React, { useState } from "react";
import PhoneInputField from "./PhoneInputField";
import CountrySelect from "./CountrrySelect";
import ContactInput from "./ContactInput";

export default function page() {
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  return (
    <TktLayout step={4} title="Contact Details" next="/checkout" prev="/addons">
      <div className="md:w-2/3 px-2 mx-auto">
        <p className="font-semibold">
          Tickets will be sent to the email address you provide. Please make
          sure to enter a valid email address.
        </p>
        <form action="" className="grid md:grid-cols-2 gap-10 my-12">
          <ContactInput type="text" label="First Name" />
          <ContactInput type="text" label="Last Name" />
          <ContactInput type="email" label="Email" />
          <ContactInput type="email" label="Confirm Email" />
          <CountrySelect />
          <PhoneInputField
            label="Phone Number"
            value={phone}
            onChange={setPhone}
          />
        </form>
      </div>
    </TktLayout>
  );
}
