import Image from "../design-system/Image";
import { Typography } from "../design-system/Typography";
import { Tag } from "../design-system/Tag";

interface MovieData {
  title: string;
  director: string;
  dateShow: string;
  hourShow: string;
  imgUrl: string;
}

interface MovieCardProps {
  bgColor?: string;
  noText?: boolean;
  movieData: MovieData;
}

export default function MovieCard({ bgColor, noText, movieData }: MovieCardProps) {
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

  const { title, director, dateShow, hourShow, imgUrl } = movieData;

  return (
    <div className="">
      <div className={`${bgColorClasses} rounded-25 overflow-hidden relative pb-[150%]`}>
        <Image src={imgUrl} alt={title} className="absolute inset-0 w-full h-full" />
      </div>
      {!noText && (
        <div className={`${bgColorClasses} p-[15px] rounded-25 flex flex-col gap-6`}>
          <div>
            <Typography
              fontSize="32"
              textColor="black"
              fontFamily="FranklinBold"
              uppercase
              className="text-center"
              component="h2"
            >
              {title}
            </Typography>
            <Typography
              fontSize="20"
              textColor="black"
              fontFamily="FranklinBold"
              uppercase
              className="text-center"
              component="h3"
            >
              {director}
            </Typography>
          </div>
          <div className="flex justify-between">
            <Tag bgColor="black">{dateShow}</Tag>
            <Tag bgColor={tagBgColor}>{hourShow}</Tag>
          </div>
        </div>
      )}
    </div>
  );
}
