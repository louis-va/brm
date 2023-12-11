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
    "w-full h-full rounded-25 flex flex-col justify-between items-center p-30 gap-20";

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
      <div className="flex items-center justify-between w-full h-1/6">
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

      <div className="flex flex-col items-center  w-full h-5/6 gap-5">
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
