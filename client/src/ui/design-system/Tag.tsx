interface TagProps {
  bgColor: "orange" | "black" | "white" | string ;
  rounded?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Tag = ({ 
  bgColor, 
  rounded = true, 
  children 
}: TagProps) => {
  let bgColorClasses;
  let borderClasses;

  switch (bgColor) {
    case "orange":
      bgColorClasses = "bg-orangePrimary text-blackPrimary";
      borderClasses = "border-2 border-blackPrimary";
      break;
    case "black":
      bgColorClasses = "bg-blackPrimary text-whitePrimary";
      borderClasses = "border-2 border-blackPrimary";
      break;
    case "white":
      bgColorClasses = "bg-whitePrimary text-blackPrimary";
      borderClasses = "border-2 border-blackPrimary";
      break;
    default:
      bgColorClasses = "";
      borderClasses = "";
      break;
  }

  const roundedClasses = rounded ? "rounded-full" : "";

  const tagClasses = `${bgColorClasses} ${borderClasses} py-1 px-3 h-fit w-fit ${roundedClasses}`;

  return <div className={tagClasses}>{children}</div>;
};
