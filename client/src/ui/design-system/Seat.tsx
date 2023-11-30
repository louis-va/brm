import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

interface SeatProps {
  available?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export const Seat = ({ selected, available = true, onClick }: SeatProps) => {
  const [isSelected, setIsSelected] = useState(selected || false);

  const defaultStyle =
    "w-[20px] h-[20px] rounded-[5px] cursor-pointer flex justify-center items-center";

  const handleSeatClick = () => {
    if (onClick) {
      onClick(); // Appel de la fonction onClick fournie par le parent, si elle existe
    }
    setIsSelected((prevState) => !prevState); // Inversion de l'état isSelected
  };

  let seatStyle = defaultStyle;
  if (!available) {
    seatStyle += " bg-blackPrimary";
  } else if (available && isSelected) {
    seatStyle += " bg-orangePrimary";
  } else {
    seatStyle += " bg-blackPrimary";
  }

  return (
    <div className={seatStyle} onClick={handleSeatClick}>
      {!available && <FaXmark className="fill-orangePrimary" />}
    </div>
  );
};
