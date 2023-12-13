import {LayoutBO} from "../../ui/backoffice/design-system/LayoutBO.tsx";
import HeadingSection from "../../ui/backoffice/features/HeadingSection.tsx";
import CardEvent from "../../ui/backoffice/features/CardEvent.tsx";

export default function AdminScreening() {
  return (
      <LayoutBO>
        <section className="flex flex-col gap-8">
            <HeadingSection title={'ajouter une scéance'}/>
            <CardEvent />
        </section>
      </LayoutBO>
  );
}
