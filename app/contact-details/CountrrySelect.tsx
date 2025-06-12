import React, { useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import Typo from "@/components/Typo";

type CountryData = {
  label: string;
  value: string;
};

const CountrySelect = () => {
  const [value, setValue] = useState<CountryData | null>(null);
  const options = useMemo(() => countryList().getData(), []);

  return (
    <div className="relative -mt-[3px]">
      <Typo font="h2" direction="none" className="text-secondary font-semibold">
        Nationality
      </Typo>
      <div className="border-b border-neutral-700 focus-within:border-secondary">
        <Select
          options={options}
          value={value}
          onChange={setValue}
          className="w-full bg-transparent z-30"
          styles={{
            control: (base) => ({
              ...base,
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
            }),
            menu: (base) => ({
              ...base,
              backgroundColor: "#1c1c1c", // dropdown background color
              zIndex: 50,
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isSelected
                ? "#A67C00"
                : state.isFocused
                ? "#262626"
                : "transparent",
              cursor: "pointer",
              color: state.isSelected ? "#fff" : "#888",
            }),
          }}
        />
      </div>
    </div>
  );
};

export default CountrySelect;
