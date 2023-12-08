import React, { useState } from "react";
import {
  FaCcMastercard,
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcPaypal,
  FaCcVisa,
  FaPlus,
  FaMinus,
} from "react-icons/fa6";
import { Typography } from "../design-system/Typography";
import { Button } from "../design-system/Button";
import { Input } from "../design-system/Input";

interface AccordionProps {
  title: "card" | "amazon" | "paypal" | "apple";
  className?: string;
}

export const Accordion = ({ title }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  let content;
  let iconProvider;
  let titleText;
  let sizeLogo = 45;

  switch (title) {
    case "card":
      titleText = (
        <Typography
          fontSize="20"
          fontFamily="Franklin"
          textColor="black"
          className={isActive ? "text-orangePrimary" : "text-blackPrimary"}
        >
          Carte de crédit/débit
        </Typography>
      );
      content = 
      <form action="" className="flex flex-col gap-10">
        <div className="flex gap-4">
          <Input 
          type="text" 
          placeholder="John Doe" 
          label="Nom du titulaire" 
          variant="white"
          className="grow"
          />
          <Input 
          type="text" 
          placeholder="1234 5678 9012 3456" 
          label="Numéro de carte"
          variant="white" />
          <Input 
          type="number" 
          placeholder="MM/YY" 
          label="Date d'expiration" 
          variant="white" />
          <Input type="number" 
          placeholder="123" 
          label="Code de sécurité" 
          variant="white" />
        </div>
      </form>

     ;
      iconProvider = (
        <div className="flex gap-2">
          <FaCcVisa
            size={sizeLogo}
            className={isActive ? "text-orangePrimary" : "text-blackPrimary"}
          />
          <FaCcMastercard
            size={sizeLogo}
            className={isActive ? "text-orangePrimary" : "text-blackPrimary"}
          />
        </div>
      );
      break;
    case "paypal":
      titleText = (
        <Typography
          fontSize="20"
          fontFamily="Franklin"
          textColor="black"
          className={isActive ? "text-orangePrimary" : "text-blackPrimary"}
        >
          Paypal
        </Typography>
      );
      content = 
      <div> 
        <Button variant="orange" borderNone>
            <Typography fontSize="20" textColor="white" fontFamily="Franklin">
              Payer via Paypal
            </Typography>
        </Button>
      </div>;
      iconProvider = (
        <div className="flex gap-2">
          <FaCcPaypal
            size={sizeLogo}
            className={isActive ? "text-orangePrimary" : "text-blackPrimary"}
          />
        </div>
      );
      break;
    case "amazon":
      titleText = (
        <Typography
          fontSize="20"
          fontFamily="Franklin"
          textColor="black"
          className={isActive ? "text-orangePrimary" : "text-blackPrimary"}
        >
          Amazon Pay
        </Typography>
      );
      content = 
      <div> 
      <Button variant="orange" borderNone>
          <Typography fontSize="20" textColor="white" fontFamily="Franklin">
            Payer via Amazon Pay
          </Typography>
      </Button>
    </div>;
      iconProvider = (
        <div className="flex gap-2">
          <FaCcAmazonPay
            size={sizeLogo}
            className={isActive ? "text-orangePrimary" : "text-blackPrimary"}
          />
        </div>
      );
      break;
    case "apple":
      titleText = (
        <Typography
          fontSize="20"
          fontFamily="Franklin"
          textColor="black"
          className={isActive ? "text-orangePrimary" : "text-blackPrimary"}
        >
          Apple Pay
        </Typography>
      );
      content = 
      <div> 
      <Button variant="orange" borderNone>
          <Typography fontSize="20" textColor="white" fontFamily="Franklin">
            Payer via Apple Pay
          </Typography>
      </Button>
    </div>;
      iconProvider = (
        <div className="flex gap-2">
          <FaCcApplePay
            size={sizeLogo}
            className={isActive ? "text-orangePrimary" : "text-blackPrimary"}
          />
        </div>
      );
      break;
  }

  return (
    <>
      <div className="accordion p-30 bg-whitePrimary rounded-25 gap-30 w-full">
        <div className="accordion-item flex flex-col gap-5">
          <div
            className="accordion-title flex justify-between items-center"
            onClick={() => setIsActive(!isActive)}
          >
            <div className="flex gap-2 items-center">
              <div
                className={`${
                  isActive
                    ? "bg-orangePrimary border-orangePrimary"
                    : "bg-whitePrimary border-blackPrimary"
                } w-[17px] h-[17px] rounded-full border border-blackPrimary`}
              ></div>
              <div>{titleText}</div>
            </div>
            <div>{iconProvider}</div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
      </div>
    </>
  );
};
