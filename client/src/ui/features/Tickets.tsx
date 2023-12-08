//Importations des libraires et des fichiers
import Image from "../design-system/Image";
import { Tag } from "../design-system/Tag";
import { Typography } from "../design-system/Typography";
import QRCode from "react-qr-code";

const tickets = [
  {
    title: "Monka",
    date: "12/12",
    hour: "22:00",
    img: "https://www.themoviedb.org/t/p/w440_and_h660_face/aKK2C3SErXIhNdT9gI93as2b8GV.jpg",
  },
  {
    title: "Oppenheimer",
    date: "11/01",
    hour: "17:00",
    img: "https://www.themoviedb.org/t/p/w440_and_h660_face/boAUuJBeID7VNp4L7LNMQs8mfQS.jpg",
  },
  {
    title: "Top Gun : Maverick",
    date: "08/12",
    hour: "17:00",
    img: "https://www.themoviedb.org/t/p/w440_and_h660_face/kTh1s6I6yUyk2OGiRoGkDTYTS6K.jpg",
  },
];

export default function Tickets() {
  function estAnterieure(dateStr: string, hourStr: string): boolean {
    const [day, month] = dateStr.split("/");
    const [hour, minute] = hourStr.split(":");

    const ticketDate = new Date(
      new Date().getFullYear(),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hour),
      parseInt(minute)
    );
    const currentDate = new Date();

    console.log("ticketDate", ticketDate);
    return ticketDate < currentDate;
  }

  return (
    <>
      {tickets.map((item, index) => {
        // Variables pour le style de chaque ticket
        let bWImg = false;
        let bgColor = "bg-orangePrimary";
        let textColorStyle = "black";
        let dateTagStyle = "black";
        let hourTagStyle = "orange";
        let qrColor = "#111111";
        let beforeColor = "before:border-blackPrimary";
        let designPoint = "bg-blackPrimary";

        const isPast = estAnterieure(item.date, item.hour);

        if (isPast) {
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
          <div className="flex" key={index}>
            <div className="w-1/3 grow">
              <Image
                src={item.img}
                alt={item.title}
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
                  <Tag bgColor={dateTagStyle}>{item.date}</Tag>
                  <Tag bgColor={hourTagStyle}>{item.hour}</Tag>
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
                {item.title}
              </Typography>
              <div className="w-full">
                <QRCode
                  value="test"
                  bgColor="none"
                  fgColor={qrColor}
                  size={100}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
