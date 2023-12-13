import Image from "../design-system/Image";
import { Typography } from "../design-system/Typography";
import { Tag } from "../design-system/Tag";
import { Link } from "react-router-dom";

interface MovieData {
  movie: {
    title: string;
    director: string[];
    poster: string;
  };
  date: Date;
  _id: string;
}

interface MovieCardProps {
  bgColor?: string;
  noText?: boolean;
  movieData: MovieData;
}

export default function MovieCard({
  bgColor,
  noText,
  movieData,
}: MovieCardProps) {
  let bgColorClasses;
  let tagBgColor = "";

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
    <Link to={`/screening/${movieData._id}`}>
      <div className="">
        <div
          className={`${bgColorClasses} rounded-25 overflow-hidden relative pb-[150%]`}
        >
          <Image
            src={movieData.movie.poster}
            alt={movieData.movie.title}
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
                {movieData.movie.title}
              </Typography>
              <Typography
                fontSize="20"
                textColor="black"
                fontFamily="FranklinBold"
                uppercase
                className="text-center"
                component="h3"
              >
                {movieData.movie.director.join(", ")}
              </Typography>
            </div>
            <div className="flex justify-between">
              <Tag bgColor="black">{}</Tag>
              <Tag bgColor={tagBgColor}>{}</Tag>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
