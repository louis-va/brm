import { FaPlus, FaMinus } from "react-icons/fa";

interface BtnPlusMinusProps {
  plus?: boolean;
  className?: string;
  onClick?: () => void;
}

export const BtnPlusMinus = ({
  plus,
  className,
  onClick,
}: BtnPlusMinusProps) => {
  return (
    <button
      className={`bg-blackPrimary text-whitePrimary flex items-center justify-center w-[20px] h-[20px] rounded-full font-Franklin ${className}`}
      onClick={onClick}
    >
      {plus ? <FaPlus size="10px" /> : <FaMinus size="10px" />}
    </button>
  );
};
