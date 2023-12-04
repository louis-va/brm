import React from 'react';

interface BadgeProps {
    variant: 'black' | 'white';
    children?: React.ReactNode;
}

const Badge = ({ variant, children }: BadgeProps) => {
    let designBadge;
    switch (variant) {
        case "black":
            designBadge = 'bg-black text-white';
            break;
        case "white":
            designBadge = 'bg-white text-black border-2 border-black';
            break;
    }

    return (
        <span className={`inline-block max-w-[80px] px-3 py-1 rounded-full text-center ${designBadge}`}>
            {children}
        </span>
    );
};

export default Badge;
