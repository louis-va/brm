import { Logo } from "../design-system/Logo.tsx";
import { Button } from "../design-system/Button.tsx";
import { Typography } from "../design-system/Typography.tsx";

interface HeaderProps {
    className?: string;
}

export const Header = ({ 
    className 
}: HeaderProps) => {
    return (
      <header
        className={`${className} w-full h-fit p-30 bg-orangePrimary flex flex-col gap-[100px]`}
      >
        <div className="w-2/3">
            <Typography fontSize="96" textColor="black" fontFamily="FranklinBold" className="uppercase leading-[90px]" component="h1">
                Brussels Rooftop Movies, 
            </Typography>
            <Typography fontSize="96" textColor="black" fontFamily="FranklinBold" className="uppercase leading-[90px]" component="span">
                La meilleure expérience visuelle au sommet de la ville
            </Typography>
        </div>
        <div className="flex flex-row flex-nowrap justify-between items-center">
            <Logo size={"small"} />
            <div className="flex gap-5">
                <Button variant="black">
                    <Typography fontSize="20" textColor="orange" fontFamily="Franklin">
                        Date
                    </Typography>
                </Button>   
                <Button variant="black">
                    <Typography fontSize="20" textColor="orange" fontFamily="Franklin">
                        Genre
                    </Typography>
                </Button>               
                <Button variant="orange">
                    <Typography fontSize="20" textColor="black" fontFamily="Franklin">
                        Se connecter
                    </Typography>
                </Button>    
            </div>
        </div>
      </header>
    );
  };
  