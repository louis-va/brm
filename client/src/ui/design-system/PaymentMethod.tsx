import { Typography } from "./Typography";
import {
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcPaypal,
  FaCcVisa,
} from "react-icons/fa6";

interface PaymentMethodProps {
  title: "creditCard" | "amazonPay" | "applePay" | "paypal";
  bgColor?: "orange" | "white";
  className?: string;
  children?: React.ReactNode;
}

export const PaymentMethod = ({
  title,
  className = "",
  children,
  bgColor = "white",
}: PaymentMethodProps) => {
  const defaultStyle =
    "h-auto rounded-25 flex flex-col justify-between items-center p-30 gap-20";

  let logoContent: React.ReactNode = null;
  let titleContent = "";
  let sizeLogo = 40

  switch (title) {
    case "creditCard":
      titleContent = "Carte de crédit";
      logoContent = <FaCcVisa size={sizeLogo} />;
      break;
    case "amazonPay":
      titleContent = "Amazon Pay";
      logoContent = <FaCcAmazonPay size={sizeLogo} />;
      break;
    case "applePay":
      titleContent = "Apple Pay";
      logoContent = <FaCcApplePay size={sizeLogo} />;
      break;
    case "paypal":
      titleContent = "Paypal";
      logoContent = <FaCcPaypal size={sizeLogo} />;
      break;
    default:
      titleContent = "Méthode de paiement inconnue";
      break;
  }

  const bgColorClass =
    bgColor === "orange" ? "bg-orangePrimary" : "bg-whitePrimary";
  const combinedClassName = `${className} ${defaultStyle} ${bgColorClass}`;

  return (
    <div className={combinedClassName}>
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="bg-whitePrimary w-[17px] h-[17px] rounded-full border border-blackPrimary"></div>
          <Typography fontSize="20" fontFamily="Franklin" textColor="black">
            {titleContent}
          </Typography>
        </div>
        <div>
          {logoContent && <div className="logo-container">{logoContent} </div>}
        </div>
      </div>
      {children}
    </div>
  );
};
