import { useState } from "react";
import { Logo } from "../design-system/Logo.tsx";
import { Button } from "../design-system/Button.tsx";
import { Typography } from "../design-system/Typography.tsx";
import { Link } from "react-router-dom";
import { Auth } from "./Auth.tsx";
import Dropdown from "../design-system/Dropdown.tsx";
import { useModal } from "./functions/useModal.tsx";

interface NavProps {
  className?: string;
}

export const Nav = ({ className }: NavProps) => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const { showModal, closeModal, openModal } = useModal();

  return (
    <nav
      className={`${className} sticky top-0 w-full h-fit p-30 bg-orangePrimary flex flex-row justify-between items-center z-50`}
    >
      <Link to={"/"}>
        <Logo size={"small"} />
      </Link>
      <div className="flex flex-row justify-end items-center w-full gap-5">
        <Dropdown
          label="Dates"
          variant="black"
          onSelect={setSelectedDate}
          formatDates={true}
        />
        <Dropdown
          label="Genres"
          variant="black"
          onSelect={setSelectedGenre}
          formatDates={false}
        />
        <Button className={""} onClick={openModal} variant="orange" icon>
          <Typography fontSize="20" textColor="black" fontFamily="Franklin">
            Se connecter
          </Typography>
        </Button>
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full z-20">
            <div className="absolute w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Auth />
            </div>
            <div
              className="fiex top-0 left-0 bg-black bg-opacity-75  w-full h-full z-30"
              onClick={closeModal}
            ></div>
          </div>
        )}
      </div>
    </nav>
  );
};
