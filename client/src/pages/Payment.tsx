import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../ui/features/Header";
import MovieCard from "../ui/features/movieCard";
import { Auth } from "../ui/features/Auth";
import { Footer } from "../ui/features/Footer";
import ResaRecap from "../ui/features/ResaRecap";
import PaymentMethod from "../ui/features/PaymentMethod";

export default function Payment() {
  const { id } = useParams<{ id: string }>();

  const [screening, setScreening] = React.useState({
    movie: {
      title: "",
      director: [],
      poster: "",
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
          <Auth></Auth>
          <div className="flex flex-col gap-30 ">
            <PaymentMethod />
          </div>
        </div>
        <div className="flex flex-col gap-30 w-1/4 h-fit sticky top-36">
          <MovieCard bgColor="orange" noText screeningData={screening} />
          <div className="bg-orangePrimary p-30 rounded-40 h-fit">
            <ResaRecap
              title={screening.movie.title}
              date={screening.date}
              screeningData={screening}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
