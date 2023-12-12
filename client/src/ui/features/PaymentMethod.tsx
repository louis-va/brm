import React, { useState } from "react";
import { Typography } from "../design-system/Typography";
import { Button } from "../design-system/Button";
import { Input } from "../design-system/Input";
import {
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcPaypal,
  FaCcVisa,
} from "react-icons/fa6";

const paymentMethods: PaymentOption[] = [
  {
    id: "card",
    title: "Carte de crédit/débit",
    icon: <FaCcVisa size={40} />,
    paymentForm: (
      <form action="" className="flex flex-col gap-10 mt-5">
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="John Doe"
            label="Nom du titulaire"
            variant="white"
          />
          <Input
            type="text"
            placeholder="1234 5678 9012 3456"
            label="Numéro de carte"
            variant="white"
          />
          <Input
            type="number"
            placeholder="MM/YY"
            label="Date d'expiration"
            variant="white"
          />
          <Input
            type="number"
            placeholder="123"
            label="Code de sécurité"
            variant="white"
          />
        </div>
      </form>
    ),
  },
  {
    id: "paypal",
    title: "PayPal",
    icon: <FaCcPaypal size={40} />,
    paymentForm: (
      <Button variant="orange" borderNone className="mt-5">
        <Typography fontSize="20" textColor="white" fontFamily="Franklin">
          Payer via Paypal
        </Typography>
      </Button>
    ),
  },
  {
    id: "amazonPay",
    title: "Amazon Pay",
    icon: <FaCcAmazonPay size={40} />,
    paymentForm: (
      <Button variant="orange" borderNone className="mt-5">
        <Typography fontSize="20" textColor="white" fontFamily="Franklin">
          Payer via Amazon Pay
        </Typography>
      </Button>
    ),
  },
  {
    id: "applePay",
    title: "Apple Pay",
    icon: <FaCcApplePay size={40} />,
    paymentForm: (
      <Button variant="orange" borderNone className="mt-5">
        <Typography fontSize="20" textColor="white" fontFamily="Franklin">
          Payer via Apple Pay
        </Typography>
      </Button>
    ),
  },
];

interface PaymentOption {
  id: string;
  title: string;
  icon: JSX.Element;
  paymentForm?: JSX.Element;
}

const PaymentMethod: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handleMethodSelect = (methodId: string) => {
    setSelectedMethod(methodId === selectedMethod ? null : methodId);
  };

  return (
    <div className="w-full flex flex-col gap-30">
      {paymentMethods.map((method) => (
        <div className="w-full" key={method.id}>
          <div className="flex w-full">
            {/* Real Radio Button */}
            <input
              type="radio"
              id={method.id}
              name="paymentMethod"
              checked={selectedMethod === method.id}
              onChange={() => handleMethodSelect(method.id)}
              className="hidden"
            />
            <label
              htmlFor={method.id}
              className="w-full bg-whitePrimary cursor-pointer p-30 rounded-25"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {/* Fake Radio button */}
                  <div
                    className={`w-[17px] h-[17px] rounded-full border border-blackPrimary first-letter:
                ${
                  selectedMethod === method.id
                    ? "bg-orangePrimary border-none"
                    : "bg-whitePrimary"
                }`}
                  ></div>
                  <Typography
                    fontSize="20"
                    fontFamily="Franklin"
                    textColor="black"
                    className={`${
                      selectedMethod === method.id
                        ? "text-orangePrimary"
                        : "text-black"
                    }`}
                  >
                    {method.title}
                  </Typography>
                </div>
                {/* Icone */}
                <span
                  className={`${
                    selectedMethod === method.id
                      ? "text-orangePrimary"
                      : "text-black"
                  }`}
                >
                  {method.icon}
                </span>
              </div>

              {/* Form / Redirection button */}
              <div>
                {selectedMethod === method.id && (
                  <div>{method.paymentForm}</div>
                )}
              </div>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethod;
