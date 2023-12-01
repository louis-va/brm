import { BtnPlusMinus } from "./BtnPlusMinus";
import { Typography } from "./Typography";

interface MenuItemProps {
  title: string;
  price: number;
}

export const MenuItem = ({ title, price }: MenuItemProps) => {
  return (
    <div className="flex justify-between border-b-2 border-blackPrimary py-2">
      <div className="flex w-1/2 justify-between">
        <Typography fontSize="15" textColor="black" fontFamily="Franklin">
          {title}
        </Typography>
        <Typography fontSize="15" textColor="black" fontFamily="Franklin">
          {price}€
        </Typography>
      </div>
      <div className="flex justify-between gap-5">
        <BtnPlusMinus />
        <Typography fontSize="15" textColor="black" fontFamily="Franklin">
          2
        </Typography>
        <BtnPlusMinus plus />
      </div>
    </div>
  );
};
