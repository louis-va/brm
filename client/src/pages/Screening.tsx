import { Header } from "../ui/features/Header";
import Synopsis from "../ui/features/Synopsis";

export default function Screening() {
  return (
    <div className="bg-blackPrimary w-full h-full">
      <Header />
      <div className="w-full p-30">
        <Synopsis />
      </div>
    </div>
  );
}
