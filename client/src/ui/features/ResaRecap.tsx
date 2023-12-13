import { Button } from "../design-system/Button";
import { Tag } from "../design-system/Tag";
import { Typography } from "../design-system/Typography";

interface FilmData {
  title: string;
  date: string;
}

export default function ResaRecap(data: FilmData) {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <Typography
          fontSize="32"
          fontFamily="FranklinBold"
          textColor="black"
          uppercase
          className="text-center"
        >
          {data.title}
        </Typography>
        <div className="flex justify-around">
          <Tag bgColor="orange">{}</Tag>
          <Tag bgColor="black">{}</Tag>
        </div>
      </div>
      <Typography
        fontSize="20"
        fontFamily="Franklin"
        textColor="black"
        className="text-center"
      >
        Veuillez sélectionner votre place assise avant d'effectuer le paiement
      </Typography>
      <Button variant="black" className="flex justify-center">
        <Typography fontSize="20" fontFamily="Franklin" textColor="orange">
          Réserver
        </Typography>
      </Button>
    </div>
  );
}
