import { FaPlay } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { useRef, useState } from "react";
import gsap from "gsap";

interface UnitProps {
    numero: string,
    nome: string,
    children?: Array<JSX.Element>,
    color: string;
}

export function Unit({ children, numero, nome, color }: UnitProps) {
    const myRef = useRef(null);
    const [h, setH] = useState("0");
    
    function handleClickUnity() {
        //gsap.to(ref, {height: h}   
        h === "0" ? setH("full") : setH("0");        
        gsap.to(myRef, {
            duration:2.5,
            ease: "elastic.inOut(1,0.3)",     
            height: h       
            });       
        console.log(h);          
    }



    return (
        <div className="w-full sm:w-11/12 lg:w-8/12 bg-backgroundMedium-adm p-6 my-4 rounded-[40px]" style={{ background: `${color}` }}>
            {/* Header - Unidade minimizada: */}
            <div onClick={handleClickUnity} className="flex items-center justify-between w-full  text-white cursor-pointer">
                <div className="font-extrabold font-poppins flex flex-col gap-2">
                    <h1 className=" text-2xl">Unidade {numero}</h1>
                    {/* alimentar numero por quantidade e orgem de elementos unit na pagina */}
                    <h2 className="text-xl">{nome}</h2>
                </div>
                <FaPlay className="size-8 m-1" />
            </div>

            {/* Unidade inteira - área da trilha: */}
            <div ref={myRef} className="flex flex-col items-center overflow-hidden h-0">
                <div className="p-10 lg:mt-10 w-full sm:w-7/12 flex flex-col items-center gap-8">
                    {children}
                </div>
            </div>
        </div >
    );
}