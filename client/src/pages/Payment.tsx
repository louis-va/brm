import { Header } from "../ui/features/Header";
import MovieCard from "../ui/features/movieCard";
import { Auth } from "../ui/features/Auth";
import { Footer } from "../ui/features/Footer";
import ResaRecap from "../ui/features/ResaRecap";
import { Accordion } from "../ui/features/Accordion";


export default function Payment() {
  return (
    <div className="bg-blackPrimary w-full h-full">
      <Header />

      <div className="w-full p-30 flex gap-30">
        <div className="relative flex flex-col gap-30 w-3/4">
          <Auth className="overlay relative z-20" bgColor="orange"></Auth>
          <div className="absolute w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-10"></ div>
          <div className="flex flex-col gap-30 ">
            <Accordion title="card" />
            <Accordion title="paypal" />
            <Accordion title="amazon" />
            <Accordion title="apple" />
          </div>
        </div>
        <div className="flex flex-col gap-30 w-1/4 h-fit sticky top-36">
          <MovieCard bgColor="orange" noText />
          <div className="bg-orangePrimary p-30 rounded-40 h-fit">
            <ResaRecap />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};



