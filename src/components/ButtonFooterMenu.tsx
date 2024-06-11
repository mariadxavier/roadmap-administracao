import { IButtonMenuProps } from "./types";

export function ButtonFooterMenu({
  img,
  isActive = false,
}: IButtonMenuProps) {

  return (
    <button
      className={`${isActive ? "bg-[#0A9AE46e]" : ""} size-fit p-1 rounded-lg`}
    >
      <img className="size-8" src={img} alt="" />
    </button>
  );
}
