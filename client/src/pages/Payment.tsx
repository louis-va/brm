import { Header } from "../ui/features/Header";
import MovieCard from "../ui/features/movieCard";
import { Auth } from "../ui/features/Auth";
import { Footer } from "../ui/features/Footer";
import ResaRecap from "../ui/features/ResaRecap";
import PaymentMethod from "../ui/features/PaymentMethod";

export default function Payment() {
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
          <MovieCard
            bgColor="orange"
            noText
            movieData={{
              title: "Call Me By Your Name",
              director: "Luca Guadagnino",
              dateShow: "27/12",
              hourShow: "21:15",
              imgUrl:
                "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4yhbrgOZqmfO7dIp2iO_uoP22H4G7tp2fa6M23zEKGKg7vymr",
            }}
          />
          <div className="bg-orangePrimary p-30 rounded-40 h-fit">
            <ResaRecap />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
