import HeadingCard from "../design-system/HeadingCard.tsx";
import ProgressBar from "../design-system/progressBar.tsx";
import CustomLink from "../design-system/CustomLink.tsx";
import {Typography} from "../../design-system/Typography.tsx";
import Image from "../../design-system/Image.tsx";

interface CardProps {
    className?: string;
    children?: React.ReactNode;
}

const Card = ({className, children}: CardProps) => {
    return (
        <section className={`${className} h-60 flex flex-row items-center`}>
            {children}
            <section className="w-2/5 rounded-25">
                <Image className={'max-h-60 rounded-25'} src={'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iDfjUWJ0w8XmEgaL4n1m7GI86BE.jpg'} alt={'Moonrise Kingdom'}></Image>
            </section>
            <section className="bg-whitePrimary w-3/5 h-60 flex flex-col rounded-25">
                <HeadingCard className={'pt-6 px-5'} movieTitle={'moonrise kingdom'} movieDateScreenings={'06/12'} movieHourScreenings={'20:15'} />
                <div className={'h-full px-5 flex flex-col justify-evenly'}>
                    <CustomLink className={'text-end w-full'} to={'/selection'}>
                        <Typography fontSize={'12'} textColor={'black'} fontFamily={'Franklin'} underline={true}>
                            Sélection
                        </Typography>
                    </CustomLink>
                    <ProgressBar maxPlaces={160} places={60}/>
                    <CustomLink className={'text-end w-full'} to={'/selection'}>
                        <Typography fontSize={'12'} textColor={'orange'} fontFamily={'Franklin'} underline={true}>
                            Modifier
                        </Typography>
                    </CustomLink>
                </div>
                
            </section>
        </section>
    )
}

export default Card;