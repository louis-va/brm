import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FoodMenu from "../ui/features/FoodMenu";
import { Footer } from "../ui/features/Footer";
import { Header } from "../ui/features/Header";
import ResaRecap from "../ui/features/ResaRecap";
import Synopsis from "../ui/features/Synopsis";
import TicketsAndPlacement from "../ui/features/TicketsAndPlacement";
import Video from "../ui/features/Video";

export default function Screening() {
  const { id } = useParams<{ id: string }>();

  const [screening, setScreening] = React.useState({
    movie: {
      title: "",
      director: [],
      casting: [],
      genres: [],
      synopsis: "",
      poster: "",
      backdrop: "",
      trailer: "",
    },
    date: "",
    _id: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`https://api.brm.lou-va.com/screenings/${id}`, { method: "GET" })
      .then((response) => response.json())
      .then((result) => setScreening(result))
      .catch((error) => console.log("error", error));
  }, []); 

  return (
    <div className="bg-blackPrimary w-full h-full">
      <Header />
      <div className="w-full p-30 flex gap-30">
        <div className="flex flex-col gap-30 w-3/4">
          <Synopsis
            key={screening._id}
            title={screening.movie.title}
            director={screening.movie.director}
            casting={screening.movie.casting}
            genres={screening.movie.genres}
            synopsis={screening.movie.synopsis}
            date={new Date(screening.date)}
          />
          <Video
            backdrop={screening.movie.backdrop}
            title={screening.movie.title}
            videoUrl={screening.movie.trailer}
          />
          <TicketsAndPlacement />
          <FoodMenu />
        </div>
        <div className="w-1/4 bg-orangePrimary p-30 rounded-40 h-fit sticky top-36">
          <ResaRecap title={screening.movie.title} date={screening.date} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
