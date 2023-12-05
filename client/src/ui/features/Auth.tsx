import { Button } from "../design-system/Button";
import { Typography } from "../design-system/Typography";
import { Input } from "../design-system/Input";
import { useState } from "react";

interface AuthProps {
  bgColor: "orange" | "white";
  className?: string;
  children?: React.ReactNode;
}

const tabsData = [
  {
    buttonContent: "Se connecter",
    content: (
      <div className="flex flex-col gap-10">
        <div className="flex gap-10">
          <div className="w-1/2">
            <Input
              type="text"
              placeholder="Adresse email"
              label="Adresse email"
            />
          </div>
          <div className="w-1/2">
            <Input
              type="password"
              placeholder="Mot de passe"
              label="Mot de passe"
            />
          </div>
        </div>
        <div>
          <Button variant="black">
            <Typography fontSize="20" textColor="orange" fontFamily="Franklin">
              Se connecter
            </Typography>
          </Button>
        </div>
      </div>
    ),
  },
  {
    buttonContent: "S'inscrire",
    content: (
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-4">
          <Input type="text" placeholder="Nom" label="Nom" />
          <Input type="text" placeholder="Prénom" label="Prénom" />
          <Input
            type="email"
            placeholder="Adresse email"
            label="Adresse email"
          />
          <Input type="text" placeholder="Genre" label="Genre" />
          <Input
            type="password"
            placeholder="Mot de passe"
            label="Mot de passe"
          />
          <Input
            type="email"
            placeholder="Confirmation adresse email"
            label="Confirmation mot de passe"
          />
        </div>
        <Button variant="black" className="w-fit">
          <Typography fontSize="20" textColor="orange" fontFamily="Franklin">
            S'inscrire
          </Typography>
        </Button>
      </div>
    ),
  },
];

export const Auth = ({ bgColor, className, children }: AuthProps) => {
  const [selectedTab, setSelectedTab] = useState(0);

  let bgColorClasses;

  switch (bgColor) {
    case "orange":
      bgColorClasses = "bg-orangePrimary text-blackPrimary";
      break;
    case "white":
      bgColorClasses = "bg-whitePrimary text-blackPrimary";
      break;
    default:
      bgColorClasses = "";
      break;
  }

  return (
    <div
      className={`${bgColorClasses} ${className} w-3/4 h-auto rounded-25 p-30 flex flex-col gap-10`}
    >
      <div className="flex">
        {tabsData.map((obj, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`m-auto ${selectedTab === index ? "underline" : ""}`}
          >
            <Typography
              fontSize="40"
              textColor="black"
              fontFamily="FranklinBold"
              component="h2"
              uppercase
            >
              {tabsData[index].buttonContent}
            </Typography>
          </button>
        ))}
      </div>
      <div className="">{tabsData[selectedTab].content}</div>
      {children}
    </div>
  );
};
