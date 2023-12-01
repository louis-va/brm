import { Link as RouterLink, useLocation } from 'react-router-dom';

interface LinkProps {
    to: string;
    className?: string;
    children: React.ReactNode;
}

const CustomLink = ({ to, className, children }: LinkProps) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    const listStyle = isActive; // Définir listStyle sur true si le lien est actif
    const linkClasses = `
    ${className}
    ${listStyle ? 'flex items-center' : ''}
    ${isActive ? 'text-orange-500 font-bold' : 'text-black'}
  `;

    const bulletClasses = `
    ${isActive ? 'w-2 h-2 bg-orange-500 rounded-full mr-2' : ''}
  `;

    return (
        <RouterLink to={to} className={linkClasses}>
            {listStyle && <span className={bulletClasses}></span>}
            {children}
        </RouterLink>
    );
};

export default CustomLink;