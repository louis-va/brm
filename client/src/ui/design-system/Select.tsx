import { Typography } from "./Typography";
//import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

interface SelectProps {
  variant?: "orange" | "black" | "white";
  label: string;
  className?: string;
  options: { value: string; label: string }[];
  name: string; // Ajoutez la propriété name
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({
  label,
  className,
  variant = "orange",
  options,
  name,
  onChange
}: SelectProps) => {
  const renderOptions = options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  let selectClasses = "";
  let optionClasses = "";

  if (variant === "orange") {
    selectClasses =
      "border-blackPrimary text-blackPrimary bg-orangePrimary placeholder:text-blackPrimary placeholder:opacity-30 focus:outline-none focus:border-whitePrimary";
    optionClasses = "text-blackPrimary";
  } else if (variant === "black") {
    selectClasses =
      "border-orangePrimary text-orangePrimary bg-blackPrimary placeholder:text-orangePrimary placeholder:opacity-30 focus:outline-none focus:border-whitePrimary";
    optionClasses = "text-orangePrimary";
  } else if (variant === "white") {
    selectClasses =
      "border-blackPrimary text-blackPrimary bg-whitePrimary placeholder:text-blackPrimary focus:outline-none focus:border-orangePrimary";
    optionClasses = "text-orangePrimary";
  }

  return (
    <div className="flex flex-col gap-2 relative">
      <label className="ml-[30px]">
        <Typography fontSize="20" textColor="black" fontFamily="Franklin">
          {label}
        </Typography>
      </label>
      <div className="relative">
        <select
          name={name} 
          onChange={onChange} 
          className={`py-[7px] px-[30px] rounded-full border appearance-none ${selectClasses} ${className}`}
        >
          {renderOptions}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <FaAngleDown size="13px" />
        </div>
      </div>
    </div>
  );
};
