import Image from "../design-system/Image";
import { Typography } from "../design-system/Typography";
import { Tag } from "../design-system/Tag";
import { Link } from "react-router-dom";

interface Movie {
  title: string;
  director: string[];
  poster: string;
}

interface ScreeningData {
  movie: Movie;
  date: string;
  _id: string;
}

interface MovieCardProps {
  bgColor?: string;
  noText?: boolean;
  screeningData: ScreeningData;
}

export default function MovieCard({
  bgColor,
  noText,
  screeningData,
}: MovieCardProps) {
  let bgColorClasses;
  let tagBgColor = "";

  // Formatage date
  const formattedDate = new Date(screeningData.date);
  const month = formattedDate.getMonth() + 1;
  const year = formattedDate.getFullYear() % 100;

  // Formatage heure
  const formattedTime = formattedDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  switch (bgColor) {
    case "orange":
      bgColorClasses = "bg-orangePrimary text-blackPrimary";
      tagBgColor = "orange";
      break;
    case "white":
      bgColorClasses = "bg-whitePrimary text-blackPrimary";
      tagBgColor = "white";
      break;
    default:
      bgColorClasses = "";
      break;
  }

  return (
    <Link to={`/screening/${screeningData._id}`}>
      <div className="">
        <div
          className={`${bgColorClasses} rounded-25 overflow-hidden relative pb-[150%]`}
        >
          <Image
            src={screeningData.movie.poster}
            alt={screeningData.movie.title}
            className="absolute inset-0 w-full h-full"
          />
        </div>
        {!noText && (
          <div
            className={`${bgColorClasses} p-[15px] rounded-25 flex flex-col gap-6`}
          >
            <div>
              <Typography
                fontSize="32"
                textColor="black"
                fontFamily="FranklinBold"
                uppercase
                className="text-center"
                component="h2"
              >
                {screeningData.movie.title}
              </Typography>
              <Typography
                fontSize="20"
                textColor="black"
                fontFamily="FranklinBold"
                uppercase
                className="text-center"
                component="h3"
              >
                {screeningData.movie.director.join(", ")}
              </Typography>
            </div>
            <div className="flex justify-between">
              <Tag bgColor="black">
                {month}/{year}
              </Tag>
              <Tag bgColor={tagBgColor}>{formattedTime}</Tag>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
