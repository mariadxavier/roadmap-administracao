import { ButtonAsideMenu } from "./ButtonAsideMenu";
import { IMenuProps } from "./types";
import BookMenuFooter from "../assets/bookMenuFooter.gif";
import ClosedBooksMenuFooter from "../assets/closedbooksMenuFooter.svg";
import GearMenuFooter from "../assets/gearMenuFooter.svg";

export function AsideMenu({ whosActive }: IMenuProps) {
  return (
    <aside className="w-[30dvw] hidden lg:flex flex-col border-r border-[#a6a6a6ad] max-w-[300px] items-center pt-[2.13rem] pb-4 gap-6">
      <div className="bg-backgroundMedium-adm size-[20dvw] max-h-44 max-w-44 min-h-32 min-w-32 size-m rounded-full border-[5px] border-[#0077B699] grid place-items-center">
        IMG
      </div>
      <div className="w-full flex flex-col  h-[75%] justify-between px-4">
        <div className="flex flex-col w-full">
          <ButtonAsideMenu
            img={BookMenuFooter}
            text="TRILHA"
            isActive={whosActive === "openBook"}
          />
          <ButtonAsideMenu
            img={ClosedBooksMenuFooter}
            text="Módulos"
            isActive={whosActive === "closedBooks"}
          />
        </div>
        <div className="w-full ">
          <ButtonAsideMenu
            img={GearMenuFooter}
            text="Menu"
            isActive={whosActive === "gear"}
          />
        </div>
      </div>
    </aside>
  );
}
