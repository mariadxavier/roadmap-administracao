import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface PropsAccessButton extends ComponentProps<"button"> {
    text: string;
    w?: string;
    color?: string
}

export function AccessButton({ text, ...props }: PropsAccessButton) {
    return (
        <button
            className={twMerge(
              "bg-button-adm font-poppins uppercase h-16  w-11/12  rounded-2xl text-white text-2xl font-bold", props.color ? `${props.color}` : ""
            )}
            {...props}
        >
            {text}
        </button>
    );
}
