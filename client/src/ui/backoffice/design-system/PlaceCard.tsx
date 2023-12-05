import {Typography} from "../../design-system/Typography.tsx";
import CustomLink from "./CustomLink.tsx";
import ProgressBar from "./progressBar.tsx";

interface PlaceCard {
    className?: string;
    children?: React.ReactNode;
}

const PlaceCard = ({className, children}: PlaceCard) => {
    return (
        <section className={`flex flex-col ${className}`}>
            <section className={'flex flex-row justify-end'}>
                {children}
                <CustomLink to={'/Selection'}>
                    <Typography className={'px-2'} fontSize={'15'} textColor={'black'} fontFamily={'Franklin'} underline={true}>
                        Sélection
                    </Typography>
                </CustomLink>
            </section>
            <section>
                <ProgressBar maxPlaces={160} places={60}/>
            </section>
            <section className={'flex flex-row justify-end'}>
                {children}
                <CustomLink to={'/Selection'}>
                    <Typography className={'px-2 pt-4'} fontSize={'15'} textColor={'orange'} fontFamily={'Franklin'} underline={true}>
                        Modifier
                    </Typography>
                </CustomLink>
            </section>
        </section>
    )
};

export default PlaceCard;