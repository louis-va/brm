import { Button } from "../design-system/Button";
import { Typography } from "../design-system/Typography";
import { Input } from "../design-system/Input";
import { Select } from "../design-system/Select";
import { useState } from "react";

interface AuthProps {
  bgColor: "orange" | "white";
  className?: string;
  children?: React.ReactNode;
}

const options = [
  { value: "homme", label: "Homme" },
  { value: "femme", label: "Femme" },
  { value: "autre", label: "Autre" },
];

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
        <div className="flex justify-between items-end">
          <a href="">
            <Typography
              fontSize="15"
              textColor="black"
              fontFamily="Franklin"
              component="p"
              underline
            >
              Mot de passe oublié ?
            </Typography>
          </a>
          <Button variant="black">
            <Typography 
            fontSize="20" 
            textColor="orange" 
            fontFamily="Franklin">
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
          <Input type="text" placeholder="Nom" label="Nom" variant="white" />
          <Input type="text" placeholder="Prénom" label="Prénom" variant="white" />
          <Input
            type="email"
            placeholder="Adresse email"
            label="Adresse email"
            variant="white"
          />
          <Select label="Genre" variant="white" options={options} />
          <Input
            type="password"
            placeholder="Mot de passe"
            label="Mot de passe"
            variant="white"
          />
          <Input
            type="email"
            placeholder="Confirmation adresse email"
            label="Confirmation mot de passe"
            variant="white"
          />
        </div>
        <div className="flex justify-between items-end">
          <Typography
            fontSize="15"
            textColor="black"
            fontFamily="Franklin"
            className="w-2/3"
          >
            Le mot de passe doit contenir au moins 8 caractères, une majuscule,
            une minuscule et un chiffre.
          </Typography>
          <Button variant="black" className="w-fit">
            <Typography 
            fontSize="20" 
            textColor="white" 
            fontFamily="Franklin">
              S'inscrire
            </Typography>
          </Button>
        </div>
      </div>
    ),
  },
];
export const Auth = ({ bgColor, className, children }: AuthProps) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [bgColorState, setBgColor] = useState<"orange" | "white">(bgColor);

  let bgColorClasses;

  switch (bgColorState) {
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
      <div className="flex justify-center">
        {tabsData.map((obj, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedTab(index);
              if (tabsData[index].buttonContent === "S'inscrire") {
                setBgColor("white");
              } else {
                setBgColor("orange");
              }
            }}
            className={`p-2 ${
              selectedTab === index ? "underline" : ""
            }`}
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