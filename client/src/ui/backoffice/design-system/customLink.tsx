import { Link as RouterLink, useLocation } from 'react-router-dom';

interface LinkProps {
    to: string;
    className?: string;
    children: React.ReactNode;
}

const CustomLink = ({ to, className, children }: LinkProps) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    const linkClasses = `
    ${className}
    ${isActive ? 'text-orange-500 font-bold relative' : 'text-black'}
  `;

    const bulletClasses = `
    ${isActive ? 'w-4 h-4 bg-orange-500 rounded-full absolute left-[-2rem]' : ''}
  `;

    return (
        <div className="flex items-center relative">
            {isActive && <span className={bulletClasses}></span>}
            <RouterLink to={to} className={`${linkClasses}`}>
                {children}
            </RouterLink>
        </div>
    );
};

export default CustomLink;
