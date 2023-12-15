import { useState, useEffect, useRef } from 'react';
import { Typography } from "./Typography.tsx";
import { RxCaretDown } from "react-icons/rx";

interface DropdownProps {
    label: string;
    variant: 'orange' | 'black';
    onSelect: (selectedOption: string) => void;
    className?: string;
    formatDates?: boolean
}

const Dropdown = ({ label, variant, onSelect, formatDates,className }: DropdownProps) => {
    const [options, setOptions] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const dropdownRef = useRef(null);
    
    useEffect(() => {
        console.log('Dropdown component mounted');
        // Fetch options based on the label
        fetch(`https://api.brm.lou-va.com/screenings/${label.toLowerCase()}`)
            .then(response => response.json())
            .then(data => {
                console.log('API Response:', data);
                
                // Format the date if formatDates is true
                const formattedOptions = data.map(option => {
                    if (formatDates) {
                        const date = new Date(option);
                        const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
                        const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
                        
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
            .catch(error => console.error(`Error fetching ${label}:`, error));
    }, [label, formatDates]); // Assurez-vous d'inclure formatDates dans la liste de dépendances

    
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        
        document.addEventListener('click', handleClickOutside);
        
        return () => {
            document.removeEventListener('click', handleClickOutside);
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
        <div ref={dropdownRef} className={`relative inline-block w-1/12 ${className}`}>
            <div
                onClick={toggleDropdown}
                className={`${
                    variant === 'orange'
                        ? 'bg-orangePrimary text-blackPrimary'
                        : 'bg-blackPrimary text-orangePrimary'
                } w-fit-content flex justify-between items-center rounded-40 py-[7px] px-30 cursor-pointer`}
            >
                {selectedOption || label}
                <RxCaretDown/>
            </div>
            {isOpen && (
                <div
                    className={`custom-scrollbar mt-10 w-80 h-72 flex flex-col gap-4 absolute top-full left-0 bg-blackLighter border border-4 border-orangePrimary rounded-40 shadow-md z-50 overflow-auto`}
                >
                    {options.map(option => (
                        <div
                            key={option}
                            className="py-2 px-4 cursor-pointer hover:bg-orangePrimary"
                            onClick={() => handleSelect(option)}
                        >
                            <Typography fontSize={'20'} textColor={'white'} fontFamily={'Franklin'}>
                                {option}
                            </Typography>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;