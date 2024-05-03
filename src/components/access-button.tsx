import { ComponentProps } from "react";

interface PropsAccessButton extends ComponentProps<'button'>{

}

export function AccessButton({...props}: PropsAccessButton) {


  return (
    <button className="bg-adm-dark font-poppins uppercase h-16 w-72 rounded-2xl text-white text-2xl font-bold" {...props}>Entrar</button>
  )
}
