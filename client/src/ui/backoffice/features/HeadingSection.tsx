import {Typography} from "../../design-system/Typography.tsx";
import CustomLink from "../design-system/CustomLink.tsx";

interface HeadingSectionProps {
    title: string;
    cta?: string;
    className?: string;
    children?: React.ReactNode;
}

const HeadingSection = ({title, cta, className, children}: HeadingSectionProps) => {
    return (
        <div className={`${className} w-full flex flex-row justify-between items-baseline`}>
            <Typography fontSize={'40'} textColor={'white'} fontFamily={'FranklinBold'} uppercase={true}>
                {title}
            </Typography>
            <CustomLink to={'/'}>
                <Typography fontSize={'20'} textColor={'white'} fontFamily={'Franklin'} underline={true}>
                    {cta}
                </Typography>
            </CustomLink>
            {children}
        </div>
    )
}

export default HeadingSection; 