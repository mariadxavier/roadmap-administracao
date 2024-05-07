import { FaPlay } from "react-icons/fa";

interface UnitProps {
    numero: string,
    nome: string,
    children: Array<JSX.Element>,
    
}

export function Unit({children, numero, nome }: UnitProps) {
    return (
        <div className="w-full sm:w-11/12 lg:w-8/12 bg-backgroundMedium-adm p-6 my-8 rounded-[40px] ">
            <div className="flex items-center justify-between w-full  text-white">
                <div className="font-extrabold font-poppins flex flex-col gap-2">
                    <h1 className=" text-2xl">Unidade {numero}</h1>
                    {/* alimentar numero por quantidade e orgem de elementos unit na pagina */}
                    <h2 className="text-xl">{nome}</h2>
                </div>
                <FaPlay className="size-8 m-1" />
            </div>
            <div className="flex flex-col items-center">
                <div className="p-10 lg:mt-10 w-full sm:w-7/12 flex flex-col items-center gap-8">
                    {...children}
                </div>
            </div>
        </div>
    );
}
