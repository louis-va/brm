interface TypographyProps {
  fontSize: "12" | "15" | "20" | "32" | "40" | "64" | "96";
  textColor: "orange" | "black" | "white";
  fontFamily: "Franklin" | "FranklinBold";
  uppercase?: boolean;
  component?: "h1" | "h2" | "h3" | "p" | "span" ;
  hoverTextColor?: "orange" | "black" | "white";
  underline?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Typography = ({
  fontSize,
  textColor = "black",
  fontFamily,
  uppercase,
  underline,
  component: Component = "p",
  hoverTextColor,
  children,
  className,
}: TypographyProps) => {
  let fontSizeClass = "";
  let textColorClass = "";
  let hoverTextColorClass = "";

  const underlineClass = underline ? "underline" : "";
  const fontFamilyClass =
    fontFamily === "Franklin" ? "font-franklin" : "font-franklinBold";
  const uppercaseClass = uppercase ? "uppercase" : "";

  switch (fontSize) {
    case "12":
      fontSizeClass = "text-12";
      break;
    case "15":
      fontSizeClass = "text-15";
      break;
    case "20":
      fontSizeClass = "text-20";
      break;
    case "32":
      fontSizeClass = "text-32";
      break;
    case "40":
      fontSizeClass = "text-40";
      break;
    case "64":
      fontSizeClass = "text-64";
      break;
    case "96":
      fontSizeClass = "text-96";
      break;
  }

  switch (textColor) {
    case "orange":
      textColorClass = "text-orangePrimary";
      break;
    case "black":
      textColorClass = "text-blackPrimary";
      break;
    case "white":
      textColorClass = "text-whitePrimary";
      break;
    default:
      textColorClass = "text-blackPrimary";
      break;
  }

  switch (hoverTextColor) {
    case "orange":
      hoverTextColorClass = "hover:text-orangePrimary";
      break;
    case "black":
      hoverTextColorClass = "hover:text-blackPrimary";
      break;
    case "white":
      hoverTextColorClass = "hover:text-whitePrimary";
      break;
  }

  return (
    <Component
      className={`${fontSizeClass} ${textColorClass} ${fontFamilyClass} ${underlineClass} ${className} ${hoverTextColorClass} ${uppercaseClass}`}
    >
      {children}
    </Component>
  );
};
