import Image from "../design-system/Image";
import { Typography } from "../design-system/Typography";
import { Tag } from "../design-system/Tag";

interface MovieCardProps {
  bgColor?: string;
}

export default function MovieCard({ bgColor }: MovieCardProps) {
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

  const movieData = {
    title: "Call Me By Your Name",
    director: "Luca Guadagnino",
    dateShow: "27/12",
    hourShow: "21:15",
    imgUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4yhbrgOZqmfO7dIp2iO_uoP22H4G7tp2fa6M23zEKGKg7vymr",
  };

  const movieTitle = movieData.title;
  const director = movieData.director;
  const dateShow = movieData.dateShow;
  const hourShow = movieData.hourShow;
  const imgUrl = movieData.imgUrl;

  return (
    <div className="">
      <div
        className={`${bgColorClasses} rounded-25 overflow-hidden relative pb-[150%]`}
      >
        <Image
          src={imgUrl}
          alt={movieTitle}
          className="absolute inset-0 w-full h-full"
        />
      </div>
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
          <Tag bgColor="black">{dateShow}</Tag>
          <Tag bgColor={`${tagBgColor}`}>{hourShow}</Tag>
        </div>
      </div>
    </div>
  );
}
