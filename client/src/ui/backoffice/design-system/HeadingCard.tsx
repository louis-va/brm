import {Typography} from "../../design-system/Typography.tsx";
import {Tag} from "../../design-system/Tag.tsx";

interface HeadingCardProps {
    movieTitle: string;
    movieDateScreenings: string;
    movieHourScreenings: string
    className?: string
    children?: React.ReactNode
}

const HeadingCard = ({movieTitle, movieDateScreenings, movieHourScreenings, className, children}: HeadingCardProps) => {
    return (
        <section className={`${className} flex flex-col`}>
            {children}
            <section className="flex flex-row justify-between">
                <section className={'w-44 flex flex-row'}>
                    <Tag className={'mr-4'} rounded={true} bgColor={'black'}>
                        <Typography fontSize={'12'} textColor={'white'} fontFamily={'Franklin'}>
                            {movieDateScreenings}
                        </Typography>
                    </Tag>
                    <Tag rounded={true} bgColor={'white'}>
                        <Typography fontSize={'12'} textColor={'black'} fontFamily={'Franklin'}>
                            {movieHourScreenings}
                        </Typography>
                    </Tag>
                </section>
                <section>
                    <div className={"w-2 h-2 rounded-full bg-blackPrimary"}></div>
                </section>
            </section>
            <section className={'pt-4'}>
                <Typography className={'uppercase'} component={'h2'} fontSize={'32'} textColor={'black'}
                            fontFamily={'FranklinBold'}>
                    {movieTitle}
                </Typography>
            </section>
        </section>
    )
}

export default HeadingCard