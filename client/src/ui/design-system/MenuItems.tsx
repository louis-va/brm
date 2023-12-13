import { useEffect, useState } from "react";
import { BtnPlusMinus } from "./BtnPlusMinus";
import { Typography } from "./Typography";

interface MenuItemProps {
  title: string;
  price: number;
  className?: string;
}

export const MenuItem = ({ title, price }: MenuItemProps) => {
  const localStorageKey = `quantity_${title}`;
  const [quantity, setQuantity] = useState(() => {
    const storedQuantity = localStorage.getItem(localStorageKey);
    return storedQuantity ? Number(storedQuantity) : 0;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, String(quantity));
  }, [quantity, localStorageKey]);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-between border-b-2 border-blackPrimary py-2 first-of-type:border-t-2">
      <div className="flex w-2/5 justify-between">
        <Typography fontSize="15" textColor="black" fontFamily="Franklin">
          {title}
        </Typography>
        <Typography fontSize="15" textColor="black" fontFamily="Franklin">
          {price}€
        </Typography>
      </div>
      <div className="flex justify-between gap-5">
        <BtnPlusMinus onClick={decrement} />
        <Typography fontSize="15" textColor="black" fontFamily="Franklin">
          {quantity}
        </Typography>
        <BtnPlusMinus onClick={increment} plus />
      </div>
    </div>
  );
};
