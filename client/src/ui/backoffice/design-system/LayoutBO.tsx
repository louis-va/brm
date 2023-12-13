import { HeaderBo } from "../features/HeaderBO";
import { HeaderVertical } from "../features/HeaderVertical";

interface LayoutProps {
  children: React.ReactNode;
}

export const LayoutBO = ({ children }: LayoutProps) => {
  return (
    <div className="bg-blackPrimary w-full h-full">
      <HeaderBo></HeaderBo>
      <div className="flex">
        <aside className="w-2/12">
          <HeaderVertical></HeaderVertical>
        </aside>
        <div className="w-10/12 p-50">{children}</div>
      </div>
    </div>
  );
};
