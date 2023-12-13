import { Header } from "../ui/features/Header";
import { Footer } from "../ui/features/Footer";
import MovieCard from "../ui/features/movieCard";
import { EventCard } from "../ui/features/EventCard";
import React from "react";

export default function Home() {
  const [screenings, setScreenings] = React.useState([]);

  fetch("https://api.brm.lou-va.com/screenings/", { method: "GET" })
    .then((response) => response.json())
    .then((result) => setScreenings(result))
    .catch((error) => console.log("error", error));

  return (
    <div className="bg-blackPrimary w-full h-full">
      <Header />
      <div className="w-full p-30 flex flex-wrap gap-y-30">
        {screenings.map((film, index) => {
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
