import { Typography } from "../design-system/Typography.tsx";
import { Nav } from "./Nav.tsx";

interface HeaderProps {
    className?: string;
}

export const Header = ({ 
    className 
}: HeaderProps) => {
    return (
      <header
        className={`${className} w-full h-fit bg-orangePrimary flex flex-col gap-[100px]`}
      >
        <div className="w-2/3 p-30">
            <Typography fontSize="96" textColor="black" fontFamily="FranklinBold" className="uppercase leading-[90px]" component="h1">
                Brussels Rooftop Movies, 
            </Typography>
            <Typography fontSize="96" textColor="black" fontFamily="FranklinBold" className="uppercase leading-[90px]" component="span">
                La meilleure expérience visuelle au sommet de la ville
            </Typography>
            <Typography fontSize="20" textColor="black" fontFamily="Franklin" className="absolute top-0 right-0 p-30" component="p">
                <span className="underline">Av. Adolphe Buyl 345, 1050</span> 
                <br />
                <span className="underline"> Ixelles</span>, +32 487 487 230
            </Typography>
            
        </div>
        <Nav className="sticky top-0"></Nav>
      </header>
    );
};
