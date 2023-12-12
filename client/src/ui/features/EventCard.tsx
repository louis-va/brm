import { Tag } from "../design-system/Tag";
import { Typography } from "../design-system/Typography";

interface EventCardProps {
  eventType: "event" | "promo";
  title: string;
  tagText: string;
  children?: React.ReactNode;
}

export const EventCard = ({
  eventType,
  title,
  tagText,
  children,
}: EventCardProps) => {
  const defaultStyle =
    "w-full h-full relative flex flex-col items-center p-30 gap-20 rounded-25";

  let eventCardStyle = defaultStyle;
  let eventTypeText = "";
  let graphicElementColor = "";
  let tagColor = "";

  if (eventType === "event") {
    eventCardStyle += " bg-whitePrimary";
    eventTypeText = "Événement";
    graphicElementColor = " bg-orangePrimary";
    tagColor = "orange";
  } else {
    eventCardStyle += " bg-orangePrimary";
    eventTypeText = "Promotion";
    graphicElementColor = " bg-blackPrimary";
    tagColor = "white";
  }

  return (
    <div className={eventCardStyle}>

      <div className="w-full absolute flex items-center px-30 justify-between">
        <Typography
          fontSize="20"
          textColor="black"
          fontFamily="FranklinBold"
          uppercase
        >
          {eventTypeText}
        </Typography>
        <div
          className={`w-[20px] h-[20px] rounded-full ${graphicElementColor}`}
        ></div>
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center gap-5">
        <Tag bgColor={tagColor} rounded>
          {tagText}
        </Tag>
        <Typography
          fontSize="64"
          fontFamily="FranklinBold"
          textColor="black"
          uppercase
          className="text-center leading-none whitespace-pre"
        >
          {title}
        </Typography>
        {children}
      </div>
    </div>
  );
};
