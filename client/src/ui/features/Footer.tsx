import { Input } from "../design-system/Input.tsx";
import { Typography } from "../design-system/Typography.tsx";
import { Logo } from "../design-system/Logo.tsx";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <>
      <footer className={`${className} w-full h-fit p-30 flex flex-col gap-20 bg-orangePrimary`}>
        <div className="flex flex-row">
          <div className="w-1/2 flex flex-row gap-10">
            <Typography
              fontSize="40"
              textColor="black"
              fontFamily="FranklinBold"
              component="h2"
              className="leading-[47px]"
              uppercase
            >
              ADRESSE
            </Typography>
            <Typography
              fontSize="20"
              textColor="black"
              fontFamily="Franklin"
              component="p"
              className="leading-[27px]"
            >
              Av. Adolphe Buyl 345, 1050 Ixelles,
              <br />
              Brussels, BELGIQUE
            </Typography>
          </div>
          <div className="w-1/2 flex flex-row gap-10">
            <Typography
              fontSize="40"
              textColor="black"
              fontFamily="FranklinBold"
              component="h2"
              uppercase
              className="leading-[47px]"
            >
              CONTACT
            </Typography>
            <Typography
              fontSize="20"
              textColor="black"
              fontFamily="Franklin"
              component="p"
              className="leading-[27px]"
            >
              info@br.movies
              <br />
              +32 487 487 230
            </Typography>
          </div>
        </div>

        <div className="w-1/2">
          <Typography
            fontSize="40"
            textColor="black"
            fontFamily="FranklinBold"
            component="h2"
            uppercase
            className="leading-[47px]"
          >
            NEWSLETTER
          </Typography>
          <Input
            type="email"
            placeholder="Email"
            label="Email"
            variant="orange"
          ></Input>
        </div>

        <div className="flex flex-row justify-between">
          <Typography
            fontSize="96"
            textColor="black"
            fontFamily="FranklinBold"
            className="uppercase leading-[12px]"
            component="h1"
            
          >
            Brussels Rooftop Movies
          </Typography>
          <Logo 
            size="small"
            className="flex place-self-end"></Logo>
        </div>
    
      </footer>
    </>
  );
};
