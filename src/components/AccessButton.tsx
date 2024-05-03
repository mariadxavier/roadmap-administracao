import { ComponentProps } from "react";

interface PropsAccessButton extends ComponentProps<"button"> {
  text?: string;
  w?: string;
}

export function AccessButton({ text, w, ...props }: PropsAccessButton) {
  return (
    <button
      className={`bg-button-adm font-poppins uppercase h-16  w-[${w}]  rounded-2xl text-white text-2xl font-bold`}
      {...props}
    >
      {text}
    </button>
  );
}
