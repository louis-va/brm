import {HeaderBo} from "../../ui/backoffice/features/HeaderBO.tsx";
import {HeaderVertical} from "../../ui/backoffice/features/HeaderVertical.tsx";

export default function Dashboard() {
    return (
        <div className="w-full h-screen flex flex-col">
            <HeaderBo></HeaderBo>
            <HeaderVertical></HeaderVertical>
        </div>
    )
}