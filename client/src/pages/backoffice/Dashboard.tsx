import {HeaderBo} from "../../ui/backoffice/features/HeaderBO.tsx";
import {HeaderVertical} from "../../ui/backoffice/features/HeaderVertical.tsx";
import Card from "../../ui/backoffice/design-system/Card.tsx";

export default function Dashboard() {
    return (
        <div className="bg-blackPrimary grid grid-cols-5 grid-rows-[100px,1fr] h-screen">
            <div className="col-span-5">
                <HeaderBo></HeaderBo>
            </div>
            <div className="row-span-4 row-start-2 ">
                <HeaderVertical></HeaderVertical>
            </div>
            <div className="col-span-4 row-span-4 row-start-2 flex flex-row flex-wrap justify-around items-center">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    
    )
}