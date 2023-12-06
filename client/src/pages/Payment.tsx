import { Header } from "../ui/features/Header";
import MovieCard from "../ui/features/movieCard";
import { Auth } from "../ui/features/Auth";
import { Footer } from "../ui/features/Footer";
import ResaRecap from "../ui/features/ResaRecap";
import { PaymentMethod } from "../ui/design-system/PaymentMethod";

export default function Payment() {
  return (
    <div className="bg-blackPrimary w-full h-full">
      <Header />
      <div className="w-full p-30 flex gap-30">
        <div className="flex flex-col gap-30 w-3/4">
          <Auth bgColor="orange"></Auth>
          <div className="flex flex-col gap-30 ">
          <PaymentMethod title="creditCard" bgColor="white"></PaymentMethod>
          <PaymentMethod title="amazonPay" bgColor="white"></PaymentMethod>
          <PaymentMethod title="googlePay" bgColor="white"></PaymentMethod>
          <PaymentMethod title="applePay" bgColor="white"></PaymentMethod>
          <PaymentMethod title="paypal" bgColor="white"></PaymentMethod>
          
          </div>
        </div>
        <div className="flex flex-col gap-30 w-1/4 h-fit sticky top-36">
          <MovieCard bgColor="orange" />
          <div className="bg-orangePrimary p-30 rounded-40 h-fit">
            <ResaRecap />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
