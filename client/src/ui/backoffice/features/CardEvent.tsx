import {Input} from "../../design-system/Input.tsx";
import {Typography} from "../../design-system/Typography.tsx";

interface CardEventProps {
    className?: string;
    children?: React.ReactNode;
}

const CardEvent = ({className, children}: CardEventProps) => {
    return (
        <section className="flex flex-row w-full">
            <section className={`${className} w-3/4 flex flex-col bg-whitePrimary py-50 px-30 rounded-25 gap-8`}>
                <Input type={'search'} label={'Films'} placeholder={'Chercher'} variant={"white"}/>
                <section className="flex flex-row justify-between gap-4">
                    <Input className={'w-1/2'} type={'date'} label={'Dates'} placeholder={'01/01/2024'}
                           variant={"white"}/>
                    <Input className={'w-1/2'} type={'time'} label={'Heures'} placeholder={'20:00'} variant={"white"}/>
                </section>
            
            </section>
            <section className={`${className} w-1/4  flex flex-col justify-center items-center bg-orangePrimary py-50 px-30 rounded-25`}>
                <Typography className={'font-bold'} fontSize={'96'} textColor={'black'} fontFamily={'FranklinBold'}>
                    +
                </Typography>
                <Typography className={'font-bold'} fontSize={'40'} textColor={'black'} fontFamily={'FranklinBold'} uppercase={true}>
                Ajouter
            </Typography>
            </section>
            {children}
        </section>
    
    )
}

export default CardEvent;