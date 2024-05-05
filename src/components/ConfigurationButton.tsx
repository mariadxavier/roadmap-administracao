import { FcLock } from "react-icons/fc";

interface IConfigurationButtonProps {
  text: string;
  icon: JSX.Element;
}

export function ConfigurationButton({ text, icon }: IConfigurationButtonProps) {
  return (
    <button className="flex items-center w-full justify-between bg-[#F1F1F1] rounded-[20px] py-2 px-4">
      <div className="flex items-center gap-3 md:text-[1.25rem]">
        {icon}
        <span className="font-inter font-bold ">{text}</span>
      </div>
      <FcLock className="text-4xl md:text-5xl" />
    </button>
  );
}
