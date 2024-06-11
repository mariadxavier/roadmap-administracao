import { ButtonAsideMenu } from "./ButtonAsideMenu";
import BookMenuFooter from "../assets/bookMenuFooter.gif";
import ClosedBooksMenuFooter from "../assets/closedbooksMenuFooter.svg";
import GearMenuFooter from "../assets/gearMenuFooter.svg";
import LampIcon from "../assets/robo-carismatico-icon.png"
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export function AsideMenu() {

    const [whosActive, setWhosActive] = useState("openBook");
    const navigate = useNavigate();
  
    function handleClick(event?:MouseEvent) {

      if(event?.target instanceof HTMLButtonElement) {
        // Bug em relação ao clique do botão
        const elementNav = event.target.id;
        console.log(elementNav)
  
        if(elementNav.includes("Trilha")) {
          navigate("/trilha")
          setWhosActive("openBook");
    
        } else if(elementNav.includes("Menu")) {
          navigate("/trilha/configuracao")
          setWhosActive("gear");
    
        } else if(elementNav.includes("Modulo")) {
          navigate("/modulo")
        }
      }
    }

    return (
        <aside className="w-[30dvw] hidden lg:flex flex-col border-r border-[#a6a6a6ad] max-w-[300px] items-center pt-[2.13rem] pb-4 gap-6">
            <img className="max-h-44 max-w-44 min-h-32 min-w-32 size-m grid place-items-center" src={LampIcon} />
                
            <div className="w-full flex flex-col  h-[75%] justify-between px-4">
                <div className="flex flex-col w-full" onClick={handleClick}>
                    <ButtonAsideMenu
                        img={BookMenuFooter}
                        text="Trilha"
                        isActive={whosActive === "openBook"}
                    />
                    <ButtonAsideMenu
                        img={ClosedBooksMenuFooter}
                        text="Módulos"
                        isActive={whosActive === "closedBooks"}
                    />
                </div>
                <div className="w-full " onClick={handleClick}>
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
