import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface PropsAccessButton extends ComponentProps<"button"> {
    text: string,
    color?: string,
    disabled? : boolean,
}

export function AccessButton({ text, disabled, ...props }: PropsAccessButton) {
    return (
        <button
            className={twMerge(
              "bg-button-adm font-poppins uppercase h-16  w-11/12  rounded-2xl text-white text-2xl font-bold", props.color ? `${props.color}` : "", disabled ? "cursor-not-allowed " : ""
            )}
            {...props}
        >
            {text}
        </button>
    );
}
