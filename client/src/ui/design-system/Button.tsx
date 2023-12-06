interface ButtonProps {
  icon?: boolean;
  type?: "button" | "submit" ;
  variant: "orange" | "black";
  fontColor?: "white" | "black" | "orange";
  borderNone?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
export const Button = ({
  icon,
  type,
  variant,
  borderNone,
  children,
  className,
}: ButtonProps) => {
  let variantClasses;

  switch (variant) {
    case "orange":
      variantClasses =
        "bg-orangePrimary text-blackPrimary rounded-full py-[7px] px-30";
      break;
    case "black":
      variantClasses =
        "bg-blackPrimary text-orangePrimary rounded-full py-[7px] px-30";
      break;
  }

  const borderClass = borderNone ? "border-0" : "border-2 border-blackPrimary";

  const buttonContent = (
    <div className="flex items-center gap-2">
      {icon && variant === "orange" && (
        <div className="bg-blackPrimary w-[17px] h-[17px] rounded-full"></div>
      )}
      {icon && variant === "black" && (
        <div className="bg-orangePrimary w-[17px] h-[17px] rounded-full"></div>
      )}
      {children}
    </div>
  );

  return (
    <button
      type={type}
      className={`${className} ${variantClasses} ${borderClass}`}
    >
      {buttonContent}
    </button>
  );
};
