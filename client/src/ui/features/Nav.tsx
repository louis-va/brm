import { Logo } from "../design-system/Logo.tsx";
import { Button } from "../design-system/Button.tsx";
import { Typography } from "../design-system/Typography.tsx";
import { RiArrowDropDownLine } from "react-icons/ri";

interface NavProps {
  className?: string;
}

export const Nav = ({ className }: NavProps) => {
  return (
    <nav
      className={`${className} sticky top-0 w-full h-fit p-30 bg-orangePrimary flex flex-row justify-between items-center`}
    >
      <Logo size={"small"} />
      <div className="flex gap-5">
        <Button variant="black">
          <Typography fontSize="20" textColor="orange" fontFamily="Franklin">
            Date
          </Typography>
          <RiArrowDropDownLine size="30px" />
        </Button>
        <Button variant="black">
          <Typography fontSize="20" textColor="orange" fontFamily="Franklin">
            Genre
          </Typography>
          <RiArrowDropDownLine size="30px" />
        </Button>
        <Button variant="orange" icon>
          <Typography fontSize="20" textColor="black" fontFamily="Franklin">
            Se connecter
          </Typography>
        </Button>
      </div>
    </nav>
  );
};
