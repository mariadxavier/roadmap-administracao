import { useNavigate } from "react-router-dom";
import BookMenuFooter from "../assets/bookMenuFooter.gif";
import ClosedBooksMenuFooter from "../assets/closedbooksMenuFooter.svg";
import GearMenuFooter from "../assets/gearMenuFooter.svg";
import { ButtonFooterMenu } from "./ButtonFooterMenu";
import { MouseEvent, useState } from "react";

export function FooterMenu() {

  const [whosActive, setWhosActive] = useState("openBook");
  const navigate = useNavigate();

  function handleClick(event?:MouseEvent) {
    if(event?.target instanceof HTMLImageElement) {
      // o src deverá ser mudado para id do button
      const elementNav = event.target.src;

      if(elementNav.includes("bookMenuFooter")) {
        navigate("/trilha")
        setWhosActive("openBook");
  
      } else if(elementNav.includes("gearMenuFooter")) {
        navigate("/trilha/configuracao")
        setWhosActive("gear");
  
      } else if(elementNav.includes("closedbooksMenuFooter")) {
        navigate("/modulo")
      }
    }
  }

  return (
    <footer
      className="h-14 md:h-16 w-full lg:hidden bg-white border-t border-[#a6a6a699] flex justify-center items-center gap-[5.25rem] xsm:gap-16 fixed bottom-0"
      onClick={handleClick}
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
