interface ChartProps {
    data1: [string, number];
    data2: [string, number];
    className?: string;
    children?: React.ReactNode;
}

const Chart = ({ data1, data2, className, children }: ChartProps) => {
    const total = data1[1] + data2[1];
    const percentageData1 = (data1[1] / total) * 100;
    const percentageData2 = (data2[1] / total) * 100;
    
    return (
        <section className={`${className} w-full flex flex-row flex-nowrap items-center`}>
            <div className="bg-orangePrimary" style={{ width: `${percentageData1}%` }}>
                {data1[0]}: {percentageData1.toFixed(2)}%
            </div>
            <div className="bg-orangeDarker" style={{ width: `${percentageData2}%` }}>
                {data2[0]}: {percentageData2.toFixed(2)}%
            </div>
            {children}
        </section>
    );
};

export default Chart;
