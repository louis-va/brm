import QRCode from "react-qr-code";
import Image from "../design-system/Image";
import { Tag } from "../design-system/Tag";
import { Typography } from "../design-system/Typography";

interface TicketsProps {
  actif: boolean;
  title: string;
  date: string;
  hour: string;
  img: string;
}

let bWImg;
let bgColor;
let textColorStyle;
let dateTagStyle;
let hourTagStyle;
let qrColor;
let beforeColor;
let designPoint;

export const Tickets = ({ actif, title, date, hour, img }: TicketsProps) => {
  if (actif) {
    bWImg = false;
    bgColor = "bg-orangePrimary";
    textColorStyle = "black";
    dateTagStyle = "black";
    hourTagStyle = "orange";
    qrColor = "#111111";
    beforeColor = "before:border-blackPrimary";
    designPoint = "bg-blackPrimary";
  } else {
    bgColor = "bg-blackPrimary";
    textColorStyle = "white";
    dateTagStyle = "white";
    hourTagStyle = "blackBorderWhite";
    qrColor = "#ffffff";
    bWImg = true;
    beforeColor = "before:border-whitePrimary";
    designPoint = "bg-whitePrimary";
  }

  return (
    <div className="flex">
      <div className="w-1/3 grow">
        <Image
          src={img}
          alt={title}
          className={`rounded-25 object-cover h-full ${
            bWImg ? "filter grayscale" : ""
          }`}
        />
      </div>

      <div
        className={`${bgColor} rounded-25 w-2/3 p-30 flex flex-col justify-between relative`}
      >
        <div
          className={`flex justify-between before:content-['']  before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-[2px] before:h-[84%]  ${beforeColor} before:border-2 before:border-dashed`}
        >
          <div className="flex gap-2">
            <Tag bgColor={dateTagStyle}>{date}</Tag>
            <Tag bgColor={hourTagStyle}>{hour}</Tag>
          </div>
          <div
            className={`w-[10px] h-[10px] rounded-full ${designPoint}`}
          ></div>
        </div>
        <Typography
          fontSize="64"
          fontFamily="FranklinBold"
          textColor={textColorStyle}
          uppercase
        >
          {title}
        </Typography>
        <div className="w-full">
          <QRCode value="test" bgColor="none" fgColor={qrColor} size={100} />
        </div>
      </div>
    </div>
  );
};
