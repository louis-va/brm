import {HeaderBo} from "../../ui/backoffice/features/HeaderBO.tsx";
import {HeaderVertical} from "../../ui/backoffice/features/HeaderVertical.tsx";
import Card from "../../ui/backoffice/features/Card.tsx";
import CardStats from "../../ui/backoffice/features/CardStats.tsx";
import HeadingSection from "../../ui/backoffice/features/HeadingSection.tsx";

export default function Dashboard() {
    return (
        <section className="bg-blackPrimary grid grid-cols-5 grid-rows-[100px,1fr]">
            <section className="col-span-5">
                <HeaderBo></HeaderBo>
            </section>
            <aside className="row-span-4 row-start-2">
                <HeaderVertical></HeaderVertical>
            </aside>
            <main className="col-span-4 row-span-4 row-start-2 p-24">
                <section className={'flex flex-col justify-between items-center'}>
                    <HeadingSection className={'mb-6'} title={'Statistiques'} cta={'11/12 - 18/12'}></HeadingSection>
                    <section className="w-full flex flex-row justify-between items-center gap-8">
                        <CardStats category={'Revenus'}></CardStats>
                        <CardStats category={'Tickets'}></CardStats>
                        <CardStats category={'Foods'}></CardStats>
                    </section>
                    <HeadingSection className={'mt-[5.5rem] mb-6'} title={'Prochaines scéances'} cta={'toutes les scéances'}></HeadingSection>
                    <section className="h-full flex flex-row flex-wrap justify-between items-center gap-8">
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </section>
                </section>
            </main>
        </section>
    )
}