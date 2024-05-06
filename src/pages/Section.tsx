import { SectionAccessButton } from "../components/SectionAccessButton";
import IconWeb from "../assets/webgif.gif";

export function Section() {
    return (
        <div className="w-screen h-screen overflow-scroll flex flex-col lg:justify-center items-center bg-backgroundDeep-adm lg:bg-backgroundLight-adm">
            <h1 className="font-poppins font-bold text-titlePages-adm text-4xl md:text-5xl leading-8 top-12 xsm:top-8 lg:top-8 fixed">Módulos</h1>
            <div className="w-full lg:w-9/12 lg:h-[450px] lg:mt-20 flex flex-col lg:flex-row items-center bg-white lg:rounded-l-[20px] lg:rounded-[20px]">
                <section className="w-full min-h-96 xsm:min-h-[18rem] md:min-h-[30rem] flex justify-center sm:mb-10 md:mb-14 lg:mb-0">
                    <img src={IconWeb} className="fixed size-96 xsm:size-[18rem] md:size-[32rem] lg:size-96 my-10 xsm:my-4" alt="Ícone de navegação web" />
                </section>
                <section className="w-full lg:h-full flex flex-col items-center gap-4 md:gap-8 lg:gap-4 overflow-scroll bg-backgroundDeep-adm py-8 lg:py-12 rounded-t-[40px] lg:rounded-r-[20px] lg:rounded-l-none z-50">
                    <SectionAccessButton
                        text="Desenvolvimento de sistemas" unlocked
                    />
                    <SectionAccessButton
                        text="Módulo 2" unlocked={false}
                    />
                    <SectionAccessButton unlocked={false}
                        text="Módulo 3" 
                    />
                    <SectionAccessButton unlocked={false}
                        text="Módulo 1"
                    />
                    <SectionAccessButton unlocked={false}
                        text="Módulo 1"
                    />
                </section>
            </div>
        </div>
    );
}
