import {LayoutBO} from "../../ui/backoffice/design-system/LayoutBO.tsx";
import HeadingSection from "../../ui/backoffice/features/HeadingSection.tsx";
import CardEvent from "../../ui/backoffice/features/CardEvent.tsx";
import Card from "../../ui/backoffice/features/Card.tsx";

export default function AdminScreening() {
  return (
      <LayoutBO>
        <section className="flex flex-col gap-16">
            <section className="flex flex-col">
                <HeadingSection title={'ajouter une scéance'}/>
                <CardEvent />
            </section>
            <section className="flex flex-col">
                <HeadingSection title={'Toutes les scéances'}/>
                <section className="flex flex-row justify-between flex-wrap gap-8">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </section>
            </section>

        </section>
      </LayoutBO>
  );
}
