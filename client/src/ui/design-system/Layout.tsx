import { Footer } from "../features/Footer";
import { Header } from "../features/Header";
import CookiesBanner from "../features/cookiesBanner";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-blackPrimary w-full h-full">
      <CookiesBanner />
      <Header />
      <main className="w-full p-30 flex gap-30">{children}</main>
      <Footer />
    </div>
  );
};
