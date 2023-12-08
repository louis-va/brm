import {Typography} from "../../design-system/Typography.tsx";

interface ChartProps {
    data1: [string, number];
    data2: [string, number];
    className?: string;
    children?: React.ReactNode;
}

const Chart = ({data1, data2, className, children}: ChartProps) => {
    const total = data1[1] + data2[1];
    const percentageData1 = (data1[1] / total) * 100;
    const percentageData2 = (data2[1] / total) * 100;
    
    
    return (
        <section className={`${className} flex flex-row flex-nowrap items-stretch`}>
            <div className="bg-orangePrimary text-center rounded-bl-25 p-4" style={{width: `${percentageData1}%`}}>
                <Typography fontSize={'15'} textColor={'white'} fontFamily={'Franklin'} uppercase={true}>
                    {data1[0]}
                </Typography>
                <Typography fontSize={'15'} textColor={'white'} fontFamily={'Franklin'}>
                    {percentageData1.toFixed(2)}%
                </Typography>
            </div>
            <div className="bg-orangeDarker text-center rounded-br-25 p-4" style={{width: `${percentageData2}%`}}>
                <Typography fontSize={'15'} textColor={'white'} fontFamily={'Franklin'} uppercase={true}>
                    {data2[0]}
                </Typography>
                <Typography fontSize={'15'} textColor={'white'} fontFamily={'Franklin'}>
                    {percentageData2.toFixed(2)}%
                </Typography>
            </div>
            {children}
        </section>
    );
};


export default Chart;
