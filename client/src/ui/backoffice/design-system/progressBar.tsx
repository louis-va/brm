interface ProgressBarProps {
    maxPlaces: number;
    places: number;
}

const ProgressBar = ({maxPlaces, places}: ProgressBarProps) => {
    const percentage = (places / maxPlaces) * 100;
    
    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <span
                        className="text-xs font-semibold inline-block py-1 uppercase rounded-full text-blackPrimary ">
                        places: {places} / {maxPlaces}
                    </span>
                </div>
                <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blackPrimary">
                {percentage.toFixed(0)}%
                    </span>
                </div>
            </div>
            <div className="flex h-2 overflow-hidden text-xs bg-blackLighter border-2 border-blackLighter rounded">
                <div style={{width: `${percentage}%`}}
                     className="flex flex-col whitespace-nowrap text-white justify-center bg-orangePrimary"></div>
            </div>
        </>
    );
};

export default ProgressBar;
