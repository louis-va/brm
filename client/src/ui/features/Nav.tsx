/* import { useState } from "react";
import { Logo } from "../design-system/Logo.tsx";
import { Button } from "../design-system/Button.tsx";
import { Typography } from "../design-system/Typography.tsx";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Auth } from "../features/Auth";

interface NavProps {
  className?: string;
}

export const Nav = ({ className }: NavProps) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <nav
      className={`${className} sticky top-0 w-full h-fit p-30 bg-orangePrimary flex flex-row justify-between items-center z-50`}
    >
      <Link to={"/"}>
        <Logo size={"small"} />
      </Link>
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
        <Button onClick={togglePopup} variant="orange" icon>
          <Typography fontSize="20" textColor="black" fontFamily="Franklin">
            Se connecter
          </Typography>
        </Button>
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="w-1/2">
              <Auth />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


 */





import { useState, useEffect, useRef } from "react";
import { Logo } from "../design-system/Logo.tsx";
import { Button } from "../design-system/Button.tsx";
import { Typography } from "../design-system/Typography.tsx";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Auth } from "../features/Auth";

interface NavProps {
  className?: string;
}

export const Nav = ({ className }: NavProps) => {
  
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.addEventListener("click", handleClickOutside, true);
    } else {
      document.removeEventListener("click", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [showPopup]);

  return (
    <nav
      className={`${className} sticky top-0 w-full h-fit p-30 bg-orangePrimary flex flex-row justify-between items-center z-50`}
    >
      <Link to={"/"}>
        <Logo size={"small"} />
      </Link>
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
        <Button onClick={togglePopup} variant="orange" icon>
          <Typography fontSize="20" textColor="black" fontFamily="Franklin">
            Se connecter
          </Typography>
        </Button>
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="w-1/2" ref={popupRef}>
              <Auth />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
