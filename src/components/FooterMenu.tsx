import BookMenuFooter from "../assets/bookMenuFooter.gif";
import ClosedBooksMenuFooter from "../assets/closedbooksMenuFooter.svg";
import GearMenuFooter from "../assets/gearMenuFooter.svg";
import { ButtonFooterMenu } from "./ButtonFooterMenu";
import { IMenuProps } from "./types";



export function FooterMenu({ whosActive}: IMenuProps) {
  return (
    <footer
      className="h-14 md:h-16 w-full lg:hidden bg-white border-t border-[#a6a6a699] flex justify-center items-center gap-[5.25rem] xsm:gap-16 fixed bottom-0"
    >
      <ButtonFooterMenu
        img={ClosedBooksMenuFooter}
        isActive={whosActive === "closedBooks"}
      />
      <ButtonFooterMenu
        img={BookMenuFooter}
        isActive={whosActive === "openBook"}
      />
      <ButtonFooterMenu img={GearMenuFooter} isActive={whosActive === "gear"} />
    </footer>
  );
}
