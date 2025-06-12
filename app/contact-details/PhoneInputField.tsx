import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Typo from "@/components/Typo";

interface PhoneInputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const PhoneInputField = ({ label, value, onChange }: PhoneInputFieldProps) => {
  return (
    <div className="relative">
      <Typo font="h2" direction="none" className="text-secondary font-semibold">
        {label}
      </Typo>
      <div className="border-b border-neutral-700 focus-within:border-secondary">
        <PhoneInput
          country={"eg"}
          value={value}
          onChange={onChange}
          inputClass="!w-full !bg-transparent !border-none !outline-none !focus:ring-0"
          containerClass="!w-full"
          buttonClass="!bg-transparent"
        />
      </div>
    </div>
  );
};

export default PhoneInputField;
