import { Button } from "../design-system/Button";
import { Tag } from "../design-system/Tag";
import { Typography } from "../design-system/Typography";

interface Movie {
  title: string;
  poster: string;
}

interface Screening {
  movie: Movie;
  date: string;
  _id: string;
}

interface ResaRecapProps {
  title: string;
  date: string | Date;
  screeningData: Screening; // Utilisation du type Screening pour screeningData
}

export default function ResaRecap({
  title,
  date,
  screeningData,
}: ResaRecapProps) {
  const formattedDate = date instanceof Date ? date : new Date(date);
  const month = formattedDate.getMonth() + 1;
  const year = formattedDate.getFullYear() % 100;
  const formattedTime = formattedDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleReservation = () => {
    window.location.href = `/payment/${screeningData._id}`;
  };

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
          {title}
        </Typography>
        <div className="flex justify-around">
          <Tag bgColor="orange">
            {month}/{year}
          </Tag>
          <Tag bgColor="black">{formattedTime}</Tag>
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
      <Button
        variant="black"
        className="flex justify-center"
        onClick={handleReservation}
      >
        <Typography fontSize="20" fontFamily="Franklin" textColor="orange">
          Réserver
        </Typography>
      </Button>
    </div>
  );
}