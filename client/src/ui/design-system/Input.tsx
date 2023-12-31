import { Typography } from "./Typography";
import { ChangeEvent } from "react";
//import { useState } from "react";

interface InputProps {
  type:  "search" | "text" | "password" | "email" | "number" | "time" | "date";
  variant?: "orange" | "black" | "white";
  label: string;
  placeholder: string;
  value?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string; // Ajoutez la propriété name
}

export const Input = ({
  type,
  placeholder,
  value,
  label,
  className,
  variant = "orange",
  onChange,
  name,
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e); // Appeler la fonction onChange si elle est définie
    }
  };

  switch (variant) {
    case "orange":
      return (
        <div className="flex flex-col gap-2 w-full">
          <label className="ml-[30px]">
            <Typography fontSize="20" textColor="black" fontFamily="Franklin">
              {label}
            </Typography>
          </label>
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            name={name} 
            onChange={handleChange} // Utiliser handleChange pour écouter les changements
            className="py-[7px] px-[30px] rounded-full border border-blackPrimary text-blackPrimary bg-orangePrimary placeholder:text-blackPrimary placeholder:opacity-30 focus:outline-none focus:border-whitePrimary"
          />
        </div>
      );
    case "black":
      return (
        <div className={`${className} flex flex-col gap-2`}>
          <label className="ml-[30px]">
            <Typography fontSize="20" textColor="black" fontFamily="Franklin">
              {label}
            </Typography>
          </label>
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            className={`py-[7px] px-[30px] rounded-full border border-orangePrimary text-orangePrimary bg-blackPrimary placeholder:text-orangePrimary placeholder:opacity-30 focus:outline-none focus:border-whitePrimary ${className}`}
          />
        </div>
      );
    case "white":
      return (
        <div className={`${className} flex flex-col gap-2`}>
          <label className="ml-[30px]">
            <Typography fontSize="20" textColor="black" fontFamily="Franklin">
              {label}
            </Typography>
          </label>
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            className="py-[7px] px-[30px] rounded-full border border-blackPrimary text-blackPrimary bg-whitePrimary placeholder:text-blackPrimary placeholder:opacity-30 focus:outline-none focus:border-orangePrimary"
          />
        </div>
      );
  }
};
