// Nav.tsx

import { useState, useEffect, useRef } from "react";
import { Logo } from "../design-system/Logo.tsx";
import { Button } from "../design-system/Button.tsx";
import { Typography } from "../design-system/Typography.tsx";
import { Link } from "react-router-dom";
import { Auth } from "./Auth.tsx";
import Dropdown from "../design-system/Dropdown.tsx";

export const Nav = ({ className, onFilterChange }) => {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    
    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
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
    
    const handleFilterChange = (genre, date) => {
        // Update state and call the provided onFilterChange callback
        setSelectedGenre(genre);
        setSelectedDate(date);
        onFilterChange(genre, date);
    };
    
    return (
        <nav className={`${className} sticky top-0 w-full h-fit p-30 bg-orangePrimary flex flex-row justify-between items-center z-50`}>
            <Link to={"/"}>
                <Logo size={"small"} />
            </Link>
            <div className="flex flex-row justify-end items-center w-full gap-5">
                <Dropdown
                    label="Dates"
                    variant="black"
                    onSelect={(selectedOption, rawDate) => handleFilterChange(selectedGenre, rawDate)}
                    formatDates={true}
                />
                <Dropdown
                    label="Genres"
                    variant="black"
                    onSelect={(selectedOption) => handleFilterChange(selectedOption, selectedDate)}
                    formatDates={false}
                />
                <Button className={''} onClick={togglePopup} variant="orange" icon>
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
