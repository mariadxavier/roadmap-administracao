import { ComponentProps } from "react";
import { twJoin } from "tailwind-merge";

interface PropsAccessButton extends ComponentProps<"button"> {
  text?: string;
  w?: string;
  className?: string;
}

export function AccessButton({text, w, className, ...props }: PropsAccessButton) {
  return (
    <button
      className={twJoin(`bg-button-adm font-poppins uppercase h-16  w-11/12  rounded-2xl text-white text-2xl font-bold`, className)}
      {...props}
    >
      {text}
    </button>
  );
}
