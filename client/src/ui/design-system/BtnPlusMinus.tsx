import { Typography } from "./Typography";

interface BtnPlusMinusProps {
  plus?: boolean;
  className?: string;
}

export const BtnPlusMinus = ({ plus, className }: BtnPlusMinusProps) => {
  return (
    <button
      className={`bg-blackPrimary text-whitePrimary flex items-center justify-center w-[20px] h-[20px] rounded-full font-Franklin ${className}`}
    >
      {plus ? (
        <Typography fontFamily="Franklin" fontSize="20" textColor="white">
          +
        </Typography>
      ) : (
        <Typography fontFamily="Franklin" fontSize="20" textColor="white">
          -
        </Typography>
      )}
    </button>
  );
};
