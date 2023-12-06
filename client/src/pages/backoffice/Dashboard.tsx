import {HeaderBo} from "../../ui/backoffice/features/HeaderBO.tsx";
import {HeaderVertical} from "../../ui/backoffice/features/HeaderVertical.tsx";

export default function Dashboard() {
    return (
        <div className="grid grid-cols-5 grid-rows-[100px,1fr]  h-screen">
            <div className="col-span-5">
                <HeaderBo></HeaderBo>
            </div>
            <div className="row-span-4 row-start-2">
                <HeaderVertical></HeaderVertical>
            </div>
            <div className="col-span-4 row-span-4 row-start-2">3</div>
        </div>
    
    )
}