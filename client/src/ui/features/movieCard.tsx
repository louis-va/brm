import Image from "../design-system/Image";
import { Typography } from "../design-system/Typography";
import { Tag } from "../design-system/Tag";

interface MovieCardProps {
  bgColor?: string;
  imageUrl: string;
  movieTitle: string;
  director: string;
}

export default function MovieCard({
  bgColor,
  imageUrl,
  movieTitle,
  director,
}: MovieCardProps) {
  let bgColorClasses;
  let tagBgColor;

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
    <div className="w-1/4">
      <div
        className={`${bgColorClasses} rounded-25 overflow-hidden relative pb-[150%]`}
      >
        <Image
          src={imageUrl}
          alt={movieTitle}
          className="absolute inset-0 w-full h-full"
        />
      </div>
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
            {movieTitle}
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
            <Tag bgColor="black">27/12</Tag>
            <Tag bgColor= {`${tagBgColor}`}>21:15</Tag>
        </div>
      </div>

    </div>
  );
}
