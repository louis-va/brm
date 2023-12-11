import Chart from "../design-system/Chart.tsx";
import {Typography} from "../../design-system/Typography.tsx";

interface CardStatsProps {
    category: string
    className?: string;
    children?: React.ReactNode;
}

const CardStats = ({category, className, children}: CardStatsProps) => {
    return (
        <section className={`${className} w-1/4 rounded-25 bg-whitePrimary flex flex-col`}>
            <section className="py-9 flex flex-col justify-between items-center">
                <Typography fontSize={'32'} textColor={'black'} fontFamily={'FranklinBold'} uppercase={true}>
                    {category}
                </Typography>
                <Typography fontSize={'24'} textColor={'black'} fontFamily={'Franklin'}>
                    Total
                </Typography>
                <Typography fontSize={'40'} textColor={'orange'} fontFamily={'Franklin'}>
                    2500€
                </Typography>
            </section>
            <section>
                <Chart data1={['food', 1850]} data2={['drink', 850]}>
                </Chart>
            </section>
            {children}
        </section>
    )
}

export default CardStats;