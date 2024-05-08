import { FaPlay } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface UnitProps {
    numero: string,
    nome: string,
    children: Array<JSX.Element>,
    closed? : boolean
    
}

export function Unit({children, numero, nome, closed }: UnitProps) {
    return (
        <div className="w-full sm:w-11/12 lg:w-8/12 bg-backgroundMedium-adm p-6 my-8 rounded-[40px] "> 
            {/* Header - Unidade minimizada: */}
            <div className="flex items-center justify-between w-full  text-white">
                <div className="font-extrabold font-poppins flex flex-col gap-2">
                    <h1 className=" text-2xl">Unidade {numero}</h1>
                    {/* alimentar numero por quantidade e orgem de elementos unit na pagina */}
                    <h2 className="text-xl">{nome}</h2>
                </div>
                <FaPlay className="size-8 m-1" />
            </div>

            {/* Unidade inteira - área da trilha: */}
            <div className={twMerge("flex flex-col items-center ", closed ? "h-0 overflow-hidden" : "")}>
                <div className="p-10 lg:mt-10 w-full sm:w-7/12 flex flex-col items-center gap-8">
                    {...children}
                </div>
            </div>
        </div>
    );
}
