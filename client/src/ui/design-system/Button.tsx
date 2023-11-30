interface ButtonProps {
  icon?: boolean;
  type?: "button" | "submit";
  variant?: "orange" | "black";
  fontColor?: "white" | "black" | 'orange';
  children?: React.ReactNode;
  className?: string;
}

export const Button = ({ icon, variant, children, type, className }: ButtonProps) => {
  let variantClasses;

  switch (variant) {
    case "orange":
      variantClasses =
        "bg-orangePrimary text-blackPrimary border-2 border-blackPrimary rounded-full py-[7px] px-30";
      break;
    case "black":
      variantClasses =
        "bg-blackPrimary text-orangePrimary border-2 border-blackPrimary rounded-full py-[7px] px-30";
      break;
  }

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
    <button type={type} className={`${className} ${variantClasses}`}>
      {buttonContent}
    </button>
  );
};
