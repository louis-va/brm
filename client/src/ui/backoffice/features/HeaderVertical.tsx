import List from "../../backoffice/design-system/List.tsx";

interface HeaderVerticalProps {
    className?: string;
}

export const HeaderVertical = ({className}: HeaderVerticalProps) => {
    return (
        <List className={`${className}`}></List>
    )
}