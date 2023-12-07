import { Logo } from "../design-system/Logo.tsx";
import { Button } from "../design-system/Button.tsx";
import { Typography } from "../design-system/Typography.tsx";
import { FaAngleDown } from "react-icons/fa6";

interface NavProps {
  className?: string;
}

export const Nav = ({ className }: NavProps) => {
  return (
    <nav
      className={`${className} sticky top-0 w-full h-fit p-30 bg-orangePrimary flex flex-row justify-between items-center z-10`}
    >
      <Logo size={"small"} />
      <div className="flex gap-5">
        <Button variant="black">
          <Typography fontSize="20" textColor="orange" fontFamily="Franklin">
            Date
          </Typography>
          <FaAngleDown size="15px" />

        </Button>
        <Button variant="black">
          <Typography fontSize="20" textColor="orange" fontFamily="Franklin">
            Genre
          </Typography>
          <FaAngleDown size="15px" />
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
