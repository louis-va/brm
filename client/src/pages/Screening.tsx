import FoodMenu from "../ui/features/FoodMenu";
import { Header } from "../ui/features/Header";
import Synopsis from "../ui/features/Synopsis";
import Video from "../ui/features/Video";

export default function Screening() {
  return (
    <div className="bg-blackPrimary w-full h-full">
      <Header />
      <div className="w-full p-30 flex gap-30">
        <div className="flex flex-col gap-30 w-3/4">
          <Synopsis />
          <Video />
          <FoodMenu />
        </div>
        <div className="w-1/4">RECAP PANIER FIXED</div>
      </div>
    </div>
  );
}
