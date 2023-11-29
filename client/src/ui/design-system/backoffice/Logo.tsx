// Interface pour les propriétés du composant Logo
interface LogoProps {
    size: 'small' | 'large' ;
    className?: string;
}

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

    return (
        <img className={`${className} ${sizeValue}`} src={'../../../assets/img/logo.svg'} alt={'logo cinema'}/>
    )
}
