import { Header } from "../ui/features/Header";
import { Footer } from "../ui/features/Footer";
import MovieCard from "../ui/features/movieCard";
import { EventCard } from "../ui/features/EventCard";

const films = [
  {
    title: "Call Me By Your Name",
    director: "Luca Guadagnino",
    dateShow: "27/12",
    hourShow: "21:15",
    imgUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4yhbrgOZqmfO7dIp2iO_uoP22H4G7tp2fa6M23zEKGKg7vymr",
  },
  {
    title: "Augure",
    director: "	Baloji",
    dateShow: "28/12",
    hourShow: "20:30",
    imgUrl:
      "https://www.cinema-palace.be/sites/default/files/styles/max_popup/public/media/06275585ed2876e8de88f321fb9f86fe057de1ef.png?itok=nz0sGgFv",
  },
  {
    title: "Titane",
    director: "Julia Ducournau",
    dateShow: "02/12",
    hourShow: "20:30",
    imgUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTU_NQSKKotq7OO7cBBX04iIhXeF23IUwPoSwcYUALWaHXzvtfr",
  },
  {
    title: "Anatomie d'une chute",
    director: "Justin Triet",
    dateShow: "04/12",
    hourShow: "14:20",
    imgUrl:
      "https://www.cinema-palace.be/sites/default/files/styles/max_popup/public/media/0be7e136375ed9181c0abff6c0e6bfbee0b4e58b.jpeg?itok=pZKIPEdq",
  },
  {
    title: "How to have sex",
    director: "Molly Manning Walker",
    dateShow: "04/12",
    hourShow: "21:10",
    imgUrl:
      "https://www.cinema-palace.be/sites/default/files/styles/max_popup/public/media/6706497be948bdc0eddd1d68f758da68de316d86.jpeg?itok=rnZ_oM-L",
  },
  {
    title: "How to have sex",
    director: "Molly Manning Walker",
    dateShow: "04/12",
    hourShow: "21:10",
    imgUrl:
      "https://www.cinema-palace.be/sites/default/files/styles/max_popup/public/media/6706497be948bdc0eddd1d68f758da68de316d86.jpeg?itok=rnZ_oM-L",
  },
  {
    title: "How to have sex",
    director: "Molly Manning Walker",
    dateShow: "04/12",
    hourShow: "21:10",
    imgUrl:
      "https://www.cinema-palace.be/sites/default/files/styles/max_popup/public/media/6706497be948bdc0eddd1d68f758da68de316d86.jpeg?itok=rnZ_oM-L",
  },
  {
    title: "How to have sex",
    director: "Molly Manning Walker",
    dateShow: "04/12",
    hourShow: "21:10",
    imgUrl:
      "https://www.cinema-palace.be/sites/default/files/styles/max_popup/public/media/6706497be948bdc0eddd1d68f758da68de316d86.jpeg?itok=rnZ_oM-L",
  },
  {
    title: "How to have sex",
    director: "Molly Manning Walker",
    dateShow: "04/12",
    hourShow: "21:10",
    imgUrl:
      "https://www.cinema-palace.be/sites/default/files/styles/max_popup/public/media/6706497be948bdc0eddd1d68f758da68de316d86.jpeg?itok=rnZ_oM-L",
  },
  {
    title: "How to have sex",
    director: "Molly Manning Walker",
    dateShow: "04/12",
    hourShow: "21:10",
    imgUrl:
      "https://www.cinema-palace.be/sites/default/files/styles/max_popup/public/media/6706497be948bdc0eddd1d68f758da68de316d86.jpeg?itok=rnZ_oM-L",
  },
  {
    title: "How to have sex",
    director: "Molly Manning Walker",
    dateShow: "04/12",
    hourShow: "21:10",
    imgUrl:
      "https://www.cinema-palace.be/sites/default/files/styles/max_popup/public/media/6706497be948bdc0eddd1d68f758da68de316d86.jpeg?itok=rnZ_oM-L",
  },
];

import React from "react";

export default function Home() {
  return (
    <div className="bg-blackPrimary w-full h-full">
      <Header />
      <div className="w-full p-30 flex flex-wrap gap-y-30">
        {films.map((film, index) => {
          const bgColor = index % 2 === 0 ? "orange" : "white"; // Alternance de couleurs pour les films

          return (
            <React.Fragment key={index}>
              <div className="w-1/4 px-4">
                <MovieCard bgColor={bgColor} movieData={film} />
              </div>

              {/* Insérer l'EventCard après le quatrième film */}
              {index === 3 && (
                <div className="w-1/2 px-4">
                  <EventCard
                    eventType="promo"
                    title={"1 place achetée\n1 place offerte"}
                    tagText="TOUS LES MARDI"
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
