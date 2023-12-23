import { useState, useEffect, useRef } from "react";
import { Typography } from "./Typography.tsx";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

interface DropdownProps {
  label: string;
  variant: "orange" | "black";
  onSelect: (selectedOption: string) => void;
  className?: string;
  formatDates?: boolean;
}

const Dropdown = ({
  label,
  variant,
  onSelect,
  formatDates,
  className,
}: DropdownProps) => {
  const [options, setOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Fetch options based on the label
    fetch(`https://api.brm.lou-va.com/screenings/${label.toLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        // Format the date if formatDates is true
        const formattedOptions = data.map((option: string) => {
          if (formatDates) {
            const date = new Date(option);
            const days = [
              "dimanche",
              "lundi",
              "mardi",
              "mercredi",
              "jeudi",
              "vendredi",
              "samedi",
            ];
            const months = [
              "janvier",
              "février",
              "mars",
              "avril",
              "mai",
              "juin",
              "juillet",
              "août",
              "septembre",
              "octobre",
              "novembre",
              "décembre",
            ];

            const dayOfWeek = days[date.getDay()];
            const dayOfMonth = date.getDate();
            const month = months[date.getMonth()];

            return `${dayOfWeek} ${dayOfMonth} ${month}`;
          } else {
            return option;
          }
        });

        setOptions(formattedOptions);
      })
      .catch((error) => console.error(`Error fetching ${label}:`, error));
  }, [label, formatDates]); // Assurez-vous d'inclure formatDates dans la liste de dépendances

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    onSelect(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={`  ${className}`}>
      <div
        onClick={toggleDropdown}
        className={`${
          variant === "orange"
            ? "bg-orangePrimary text-blackPrimary"
            : "bg-blackPrimary text-orangePrimary"
        }  flex justify-between items-center rounded-40 py-[7px] px-30 cursor-pointer gap-2 relative`}
      >
        <Typography fontSize="20" fontFamily="Franklin" textColor="orange">
          {selectedOption || label}
        </Typography>
        {isOpen ? <RxCaretUp size="25px" /> : <RxCaretDown size="25px" />}
      </div>
      {isOpen && (
        <div className=" h-auto gap-4 absolute mt-4 ml-4 bg-blackLighter border-2 border-orangeLighter rounded-25 shadow-md z-50 p-4">
          <div
            className={
              "custom-scrollbar w-max h-72 flex flex-col overflow-auto pr-6"
            }
          >
            {options.map((option) => (
              <div
                key={option}
                className="cursor-pointer hover:bg-orangePrimary w-full rounded-xl py-[7px] px-[20px]"
                onClick={() => handleSelect(option)}
              >
                <Typography
                  fontSize={"20"}
                  textColor={"white"}
                  fontFamily={"Franklin"}
                >
                  {option}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
