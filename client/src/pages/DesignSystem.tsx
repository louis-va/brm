import { Typography } from "../ui/design-system/Typography";

export default function DesignSystem() {
  return (
    <div className="bg-blackPrimary w-screen h-screen p-30">
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
    </div>
  );
}
