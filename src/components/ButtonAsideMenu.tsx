import { IButtonMenuProps } from "./types";

interface IButtonAsideMenu extends IButtonMenuProps {
  text: string;
}

export function ButtonAsideMenu({
  img,
  isActive = false,
  text,
}: IButtonAsideMenu) {
  return (
    <button
      className={`${
        isActive ? "bg-[#0A9AE46e] border-2 border-title-adm" : ""
      } size-fit py-1 px-2 flex items-center gap-3  w-full rounded-[20px]`} id={text}
    >
      <img className="size-10" src={img} alt="" />
      <span className={`font-poppins font-black text-[1.25rem] ${isActive ? "text-title-adm": "text-[#77777A]"}`}>{text}</span>
    </button>
  );
}
