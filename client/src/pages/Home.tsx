// Home.tsx
import React, { useState, useEffect } from "react";
import { Header } from "../ui/features/Header";
import { Footer } from "../ui/features/Footer";
import MovieCard from "../ui/features/movieCard";
import { EventCard } from "../ui/features/EventCard";
import { Nav } from "../ui/features/Nav.tsx";

export default function Home() {
    const [allScreenings, setAllScreenings] = useState([]);
    const [filteredScreenings, setFilteredScreenings] = useState([]);
    const [filterOptions, setFilterOptions] = useState({
        selectedGenre: "",
        selectedDate: ""
    });
    
    useEffect(() => {
        window.scrollTo(0, 0);
        // Fetch all screenings
        fetch("https://api.brm.lou-va.com/screenings/", { method: "GET" })
            .then((response) => response.json())
            .then((result) => {
                setAllScreenings(result);
                setFilteredScreenings(result); // Initialize filteredScreenings with all screenings
            })
            .catch((error) => console.log("Fetch Error:", error));
    }, []);
    
    // Function to convert date format (returning only the date)
    const convertDateFormat = (date) => {
        if (!date) return "";
        
        // Use the Date function for more robust conversion
        const formattedDate = new Date(date);
        const year = formattedDate.getFullYear();
        const month = String(formattedDate.getMonth() + 1).padStart(2, "0");
        const day = String(formattedDate.getDate()).padStart(2, "0");
        
        return `${year}-${month}-${day}`;
    };
    
    useEffect(() => {
        console.log("filterOptions:", filterOptions);
        const filtered = allScreenings.filter((screening) => {
            const film = screening.movie;
            const screeningDate = convertDateFormat(screening.date);
            const selectedDateFormatted = convertDateFormat(
                filterOptions.selectedDate
            );
            
            const genreFilter =
                !filterOptions.selectedGenre ||
                film.genres.includes(filterOptions.selectedGenre);
            const dateFilter =
                !filterOptions.selectedDate ||
                screeningDate === selectedDateFormatted;
            
            // Check both genre and date filters
            return genreFilter && dateFilter;
        });
        console.log("filtered:", filtered);
        
        setFilteredScreenings(filtered);
    }, [allScreenings, filterOptions]);
    
    return (
        <div className="bg-blackPrimary w-full h-full">
            <Header />
            <Nav
                onFilterChange={(genre, date) => {
                    setFilterOptions((prevOptions) => ({
                        ...prevOptions,
                        selectedGenre: genre !== undefined ? genre : prevOptions.selectedGenre,
                        selectedDate: date !== undefined ? date : prevOptions.selectedDate
                    }));
                }}
            />
            
            <div className="w-full p-30 flex flex-wrap gap-y-30">
                {filteredScreenings.map((film, index) => {
                    const bgColor = index % 2 === 0 ? "orange" : "white";
                    
                    return (
                        <React.Fragment key={index}>
                            <div className="w-1/4 px-4">
                                <MovieCard bgColor={bgColor} screeningData={film} />
                            </div>
                            
                            {index === 5 && (
                                <div className="w-1/2 px-4">
                                    <EventCard
                                        eventType="promo"
                                        title={"1 place achetée\n1 place offerte"}
                                        tagText="TOUS LES MARDI"
                                    />
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
            <Footer />
        </div>
    );
}