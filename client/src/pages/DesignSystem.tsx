import { Button } from "../ui/design-system/Button";
import { Typography } from "../ui/design-system/Typography";

export default function DesignSystem() {
  return (
    <div className="bg-blackPrimary w-screen h-screen p-30 flex flex-col gap-50">
      <div className="p-30 bg-orangePrimary rounded-25">
        <Typography
          fontSize="96"
          textColor="black"
          fontFamily="FranklinBold"
          uppercase={true}
          hoverTextColor="white"
        >
          Title 1
        </Typography>
        <Typography
          fontSize="64"
          textColor="black"
          fontFamily="FranklinBold"
          uppercase={true}
        >
          Title 2
        </Typography>
        <Typography
          fontSize="40"
          textColor="black"
          fontFamily="FranklinBold"
          uppercase={true}
        >
          Title 3
        </Typography>
        <Typography fontSize="32" textColor="black" fontFamily="Franklin">
          Texte 1
        </Typography>
        <Typography fontSize="20" textColor="black" fontFamily="Franklin">
          Texte 2
        </Typography>
      </div>
      <div className="p-30 bg-orangePrimary rounded-25 flex gap-10">
        <Button variant="orange" >
          <Typography fontSize="20" textColor="black" fontFamily="Franklin">
            Bouton 1
          </Typography>
        </Button>
        <Button variant="black">
          <Typography fontSize="20" textColor="orange" fontFamily="Franklin">
            Bouton 2
          </Typography>
        </Button>
        <Button variant="orange" icon>
          <Typography fontSize="20" textColor="black" fontFamily="Franklin">
            Bouton 3
          </Typography>
        </Button>
        <Button variant="black" icon>
          <Typography fontSize="20" textColor="orange" fontFamily="Franklin">
            Test
          </Typography>
        </Button>
      </div>
    </div>
  );
}
