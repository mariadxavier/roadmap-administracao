import { FaPlay } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { useRef, useState } from "react";
import gsap from "gsap";

interface UnitProps {
    numero: string;
    nome: string;
    children?: Array<JSX.Element>;
    color: string;
}

export function Unit({ children, numero, nome, color }: UnitProps) {
    const unitMinimizada = useRef(null);
    const [direction, setDirection] = useState("0");
    const [h, setH] = useState("0");

    function handleClickUnity() {
        gsap.to(unitMinimizada.current, {
            duration: 2.2,
            ease: "bounce.out",
            height: h,
        });
        console.log(h);
        h === "0" ? setH("100%") : setH("0");
        
        direction === "0" ? setDirection("90") : setDirection("0");
    }

    return (
        <div
            className="w-full sm:w-11/12 lg:w-8/12 bg-backgroundMedium-adm p-6 my-4 rounded-[40px]"
            style={{ background: `${color}` }}
        >
            {/* Header - Unidade minimizada: */}
            <div
                onClick={handleClickUnity}
                className="flex items-center justify-between w-full  text-white cursor-pointer"
            >
                <div className="font-extrabold font-poppins flex flex-col gap-2">
                    <h1 className=" text-2xl">Unidade {numero}</h1>
                    {/* alimentar numero por quantidade e orgem de elementos unit na pagina */}
                    <h2 className="text-xl">{nome}</h2>
                </div>
                <FaPlay
                    className={twMerge(
                        "size-8 m-1 ",
                        `rotate-${direction} transition duration-[1.8s]`
                    )}
                />
            </div>

            {/* Unidade inteira - área da trilha: */}
            <div
                ref={unitMinimizada}
                className="flex flex-col items-center overflow-hidden h-0"
            >
                <div className="p-10 lg:mt-10 w-full sm:w-7/12 flex flex-col items-center gap-8">
                    {children}
                </div>
            </div>
        </div>
    );
}
