import {Typography} from "../../design-system/Typography.tsx";
import Badge from "./Badge.tsx";

interface HeadingCardProps {
    movieTitle: string;
    movieDateScreenings: string;
    movieHourScreenings: string
    className?: string
    children?: React.ReactNode
}

const HeadingCard = ({movieTitle, movieDateScreenings, movieHourScreenings, className, children}: HeadingCardProps) => {
    return (
        <section className={`${className} flex flex-col`} >
            {children}
            <section className="flex flex-row justify-between">
                <section className={'w-44 flex flex-row justify-between'}>
                    <Badge variant={'black'}>
                        <Typography fontSize={'15'} textColor={'white'} fontFamily={'Franklin'}>
                            {movieDateScreenings}
                        </Typography>
                    </Badge>
                    <Badge variant={'white'}>
                        <Typography fontSize={'15'} textColor={'black'} fontFamily={'Franklin'}>
                            {movieHourScreenings}
                        </Typography>
                    </Badge>
                </section>
                <section>
                    <div className={"w-2 h-2 rounded-full bg-blackPrimary"}></div>
                </section>
            </section>
            <section>
                <Typography className={'uppercase'} component={'h2'} fontSize={'32'} textColor={'black'} fontFamily={'FranklinBold'}>
                    {movieTitle}
                </Typography>
            </section>
        </section>
    )
}

export default HeadingCard