import { Typography } from "./Typography";
import { useState } from "react";

interface InputProps {
  type: "text" | "password" | "email";
  variant?: "orange" | "black";
  label: string;
  placeholder: string;
  value?: string;
  className?: string;
}

export const Input = ({
  type,
  placeholder,
  value,
  label,
  className,
  variant = "orange",
}: InputProps) => {
  switch (variant) {
    case "orange":
      return (
        <div className="flex flex-col gap-2">
          <label className="ml-[30px]">
            <Typography fontSize="20" textColor="black" fontFamily="Franklin">
              {label}
            </Typography>
          </label>
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            className="py-[7px] px-[30px] rounded-full border border-blackPrimary text-blackPrimary bg-orangePrimary placeholder:text-blackPrimary placeholder:opacity-30 focus:outline-none focus:border-whitePrimary"
          />
        </div>
      );
    case "black":
      return (
        <div className="flex flex-col gap-2">
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
  }
};
