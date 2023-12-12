import { Link } from "react-router-dom";
import { Button } from "../ui/design-system/Button";
import { Typography } from "../ui/design-system/Typography";
import { FaArrowLeft } from "react-icons/fa6";

export default function PageNotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-30">
      <Typography
        component="h1"
        fontSize="96"
        fontFamily="FranklinBold"
        textColor="blackPrimary"
        className="leading-none"
      >
        404
      </Typography>
      <Typography
        component="h1"
        fontSize="64"
        fontFamily="Franklin"
        textColor="blackPrimary"
        uppercase
      >
        Page not found
      </Typography>
      <Link to={"/"}>
        <Button variant="black">
          <FaArrowLeft />
          Retour
        </Button>
      </Link>
    </div>
  );
}
