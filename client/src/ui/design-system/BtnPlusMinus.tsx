import { FaPlus, FaMinus } from "react-icons/fa";

interface BtnPlusMinusProps {
  plus?: boolean;
  className?: string;
}

export const BtnPlusMinus = ({ plus, className }: BtnPlusMinusProps) => {
  return (
    <button
      className={`bg-blackPrimary text-whitePrimary flex items-center justify-center w-[20px] h-[20px] rounded-full font-Franklin ${className}`}
    >
      {plus ? <FaPlus size="6px" /> : <FaMinus size="6px" />}
    </button>
  );
};
