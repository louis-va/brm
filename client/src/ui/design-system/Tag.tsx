interface TagProps {
    variant?: "orange" | "black";
    children?: React.ReactNode;
}

export const Tag = ({ variant, children }: TagProps) => {
    let variantClasses;

    switch (variant) {
        case "orange":
            variantClasses =
                "bg-orangePrimary text-blackPrimary border-2 border-blackPrimary rounded-full py-[7px] px-30";
            break;
        case "black":
            variantClasses =
                "bg-blackPrimary text-orangePrimary border-2 border-blackPrimary rounded-full py-[7px] px-30";
            break;
    }

    return <div className={variantClasses}>{children}</div>;
};

