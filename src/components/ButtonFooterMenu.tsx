import { useNavigate } from "react-router-dom";
import { IButtonMenuProps } from "./types";


export function ButtonFooterMenu({
  img,
  isActive = false,
}: IButtonMenuProps) {

  const navigate = useNavigate();

  function handleClick(event: Event) {
    // console.log(event.target.src.replace("http://localhost:5173/src/assets/", "").slice(0, -4));

    const selectedItem = event.target.src.replace("http://localhost:5173/src/assets/", "").slice(0, -4);
    console.log(selectedItem)

    if(selectedItem === "bookMenuFooter") {
      navigate("/trilha");
    }
    if(selectedItem === "gearMenuFooter") {
      navigate("/configuracoes")
    }
    if(selectedItem === "closedbooksMenuFooter") {
      navigate("/modulos")
    }
    
  }

  return (
    <button
      className={`${isActive ? "bg-[#0A9AE46e]" : ""} size-fit p-1 rounded-lg`} onClick={handleClick}
    >
      <img className="size-8" src={img} alt="" />
    </button>
  );
}
