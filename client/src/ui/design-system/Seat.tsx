import { FaXmark } from "react-icons/fa6";

interface SeatProps {
  available?: boolean;
  selected?: boolean;
}

export const Seat = ({ selected, available = true }: SeatProps) => {
  const defaultStyle = "w-[20px] h-[20px] rounded-[5px] cursor-pointer";

  if (!available) {
    return (
      <div
        className={`${defaultStyle} bg-blackPrimary flex items-center justify-center`}
      >
        <FaXmark className="fill-orangePrimary" size="lg" />
      </div>
    );
  } else if (available && selected) {
    return <div className={`${defaultStyle} bg-orangePrimary`}></div>;
  } else {
    return <div className={`${defaultStyle} bg-blackPrimary`}></div>;
  }
};
