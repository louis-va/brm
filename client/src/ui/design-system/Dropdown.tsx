// Dropdown.tsx

import { useState, useEffect, useRef } from "react";
import { Typography } from "./Typography.tsx";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

interface DropdownProps {
    label: string;
    variant: "orange" | "black";
    onSelect: (
        selectedOption: string,
        rawDate: string,
        formattedDate: string
    ) => void;
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
    const [options, setOptions] = useState<
        { display: string; raw: string; formatted: string }[]
    >([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const dropdownRef = useRef(null);
    
    useEffect(() => {
        // Fetch options based on the label
        fetch(`https://api.brm.lou-va.com/screenings/${label.toLowerCase()}`)
            .then((response) => response.json())
            .then((data) => {
                const formattedOptions = data.map((option: string, index) => {
                    const date = new Date(option);
                    
                    if (!isNaN(date.getTime())) {
                        const days = [
                            "Dimanche",
                            "Lundi",
                            "Mardi",
                            "Mercredi",
                            "Jeudi",
                            "Vendredi",
                            "Samedi",
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
                        
                        const rawDate = `${date.getFullYear()}-${String(
                            date.getMonth() + 1
                        ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
                        const formattedDate = `${dayOfWeek} ${dayOfMonth} ${month}`;
                        
                        return {
                            display: formatDates ? formattedDate : option,
                            raw: rawDate,
                            formatted: formattedDate,
                        };
                    }
                    
                    // Si la date n'est pas valide, utilisez l'indice comme clé
                    return {
                        display: option, // Utiliser directement l'option sans formatage
                        raw: `invalid-date-${index}`,
                        formatted: option, // Utiliser directement l'option sans formatage
                    };
                });
                
                // Ajouter l'option de réinitialiser
                formattedOptions.unshift({
                    display: "Réinitialiser",
                    raw: "",
                    formatted: "",
                });
                
                setOptions(formattedOptions);
            })
            .catch((error) => console.error(`Error fetching ${label}:`, error));
    }, [label, formatDates]);
    
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
    
    const handleSelect = (option: {
        display: string;
        raw: string;
        formatted: string;
    }) => {
        if (option.raw === "") {
            // Réinitialiser la sélection
            onSelect("", "", "");
            setSelectedOption("Réinitialiser");
        } else {
            onSelect(option.display, option.raw, option.formatted);
            setSelectedOption(option.display);
        }
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
                        {options.map((option, index) => (
                            <div
                                key={String(option.raw) || index}
                                className="cursor-pointer hover:bg-orangePrimary w-full rounded-xl py-[7px] px-[20px]"
                                onClick={() => handleSelect(option)}
                            >
                                <Typography
                                    fontSize={"20"}
                                    textColor={"white"}
                                    fontFamily={"Franklin"}
                                >
                                    {option.display}
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