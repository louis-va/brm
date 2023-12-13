import { Tag } from "../design-system/Tag";
import { Typography } from "../design-system/Typography";

interface SynopsisProps {
  title: string;
  director: string[];
  casting: string[];
  genres: string[];
  synopsis: string;
  date: Date;
}

export default function Synopsis(data: SynopsisProps) {
  // Formater la date
  const formattedDate = data.date instanceof Date ? data.date : new Date(data.date);
  const month = formattedDate.getMonth() + 1;
  const year = formattedDate.getFullYear() % 100;
  //Formater l'heure
  const formattedTime = formattedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });



  return (
    <>
      <div className="flex flex-col bg-whitePrimary p-30 rounded-40 w-full gap-5">
        <div className="flex gap-5 w-full">
          <Tag bgColor="white">{month}/{year}</Tag>
          <Tag bgColor="black">{formattedTime}</Tag>
        </div>

        <div className="leading-none">
          <Typography
            fontSize="40"
            fontFamily="FranklinBold"
            textColor="black"
            uppercase
            className="text-center"
          >
            {data.title}
          </Typography>
          <Typography
            fontSize="20"
            fontFamily="FranklinBold"
            textColor="black"
            uppercase
            className="text-center"
          >
            by {data.director.join(", ")}
          </Typography>
        </div>

        <div className="flex flex-col gap-8">
          <Typography
            fontSize="32"
            fontFamily="FranklinBold"
            textColor="black"
            uppercase
          >
            Avec {data.casting.join(", ")}
          </Typography>
          <div className="flex gap-5">
            {data.genres.map((genre) => (
              <Tag bgColor="black" rounded={false}>
                {genre}
              </Tag>
            ))}
          </div>
          <Typography fontSize="20" fontFamily="Franklin" textColor="black">
            {data.synopsis}
          </Typography>
        </div>
      </div>
    </>
  );
}
