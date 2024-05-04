import { ComponentProps } from "react";

interface SectionAccessButtonProps extends ComponentProps<"button"> {
    text: string;
    icon: JSX.Element;
}

export function SectionAccessButton({text, icon, ...props}:SectionAccessButtonProps) {
    return (
        <button
            {...props}
            className="bg-white rounded-[20px] w-11/12 min-h-20 p-4 font-poppins font-black text-black/60 text-2xl flex justify-between flex-nowrap text-wrap text-left text- items-center"
        >
            {text} {icon}
        </button>
    );
}
