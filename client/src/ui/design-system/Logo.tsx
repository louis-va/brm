// Import logo
import logoSVG from '../../assets/img/logo.svg';
// Interface pour les propriétés du composant Logo
interface LogoProps {
    size: 'small' | 'large' ;
    className?: string;
}

// Définition logique du component
export const Logo = ({size, className}: LogoProps) => {
    let sizeValue;

    switch (size) {
        case "small":
            sizeValue = "w-[121px] h-[29px]";
            break;
        case "large":
            sizeValue = "w-[143px] h-[66px]";
            break;
    }
// Render du component
    return (
        <img className={`${className} ${sizeValue}`} src={logoSVG} alt='logo cinema'/>
    )
}
