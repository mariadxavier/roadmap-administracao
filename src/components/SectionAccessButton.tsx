import { ComponentProps } from "react";
import { FaPlay } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { FcLock } from "react-icons/fc";

interface SectionAccessButtonProps extends ComponentProps<"button"> {
    text: string;
    unlocked: boolean;
}

export function SectionAccessButton({
    text,
    ...props
}: SectionAccessButtonProps) {
    return (
        <button
            {...props}
            className={twMerge(
                "rounded-[20px] w-11/12 lg:w-10/12  min-h-20 p-4 font-poppins font-black text-2xl xsm:text-xl flex justify-between flex-nowrap text-wrap text-left items-center",
                props.unlocked
                    ? "bg-white text-black/60 "
                    : "bg-white/60 text-textGray-adm cursor-not-allowed"
            )}
        >
            {text}
            {props.unlocked ? (
                <FaPlay className="text-titlePrincipal-adm h-8 m-1 xsm:size-10" />
            ) : (
                <FcLock className="size-8 xsm:size-10 m-1" />
            )}
        </button>
    );
}
