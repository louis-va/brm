import {HeaderBo} from "../../ui/backoffice/features/HeaderBO.tsx";
import {HeaderVertical} from "../../ui/backoffice/features/HeaderVertical.tsx";
import Card from "../../ui/backoffice/design-system/Card.tsx";
import Chart from "../../ui/backoffice/design-system/Chart.tsx";

export default function Dashboard() {
    return (
        <section className="bg-blackPrimary grid grid-cols-5 grid-rows-[100px,1fr] h-screen">
            <section className="col-span-5">
                <HeaderBo></HeaderBo>
            </section>
            <aside className="row-span-4 row-start-2">
                <HeaderVertical></HeaderVertical>
            </aside>
            <main className="col-span-4 row-span-4 row-start-2 overflow-y-auto">
                <div className="h-full flex flex-row flex-wrap justify-around items-center">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </main>
        </section>
    
    )
}