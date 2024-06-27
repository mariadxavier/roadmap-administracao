import { SectionAccessButton } from "../components/SectionAccessButton";
import IconWeb from "../assets/webgif.gif";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Module {
    id: string;
    name: string;
    idCourse: string;
}

export function Section() {
    const navigate = useNavigate();
    const [modules, setModules] = useState<Module[]>([]);

    function getCourseIdLocalStorage() {
        const json = localStorage.getItem("course");

        if (!json) {
            alert(
                "parece que você não selecionou um curso, volte para a página de acessos"
            );
        } else {
            const courseId = json;
            return courseId;
        }
    }

    useEffect(() => {
        const idCourse = getCourseIdLocalStorage();
        fetch(`http://localhost:3000/module/${idCourse}`).then((response) => {
            response.json().then((modulos) => {
                setModules(modulos);
            });
        });
    }, [modules]);

    // USAR THEN E CATCH PRA MELHORAR

    // async function showCourseModules() {
    //     const modules = await loadCourseModules();
    //     modules.map((elem) => {
    //         return(
    //         <SectionAccessButton text={elem.name} unlocked />)
    //     });
    // }
    // showCourseModules();

    return (
        <div className="w-screen h-dvh overflow-scroll flex flex-col lg:justify-center items-center bg-backgroundDeep-adm lg:bg-backgroundLight-adm">
            <h1 className="font-poppins font-bold text-titlePages-adm text-4xl md:text-5xl leading-8 top-12 xsm:top-8 lg:top-8 fixed">
                Módulos
            </h1>
            <div className="w-full lg:w-9/12 lg:h-[450px] lg:mt-20 flex flex-col lg:flex-row items-center bg-white lg:rounded-l-[20px] lg:rounded-[20px]">
                <section className="w-full min-h-96 xsm:min-h-[18rem] md:min-h-[30rem] flex justify-center sm:mb-10 md:mb-14 lg:mb-0">
                    <img
                        src={IconWeb}
                        className="fixed size-96 xsm:size-[18rem] md:size-[32rem] lg:size-96 my-10 xsm:my-4"
                        alt="Ícone de navegação web"
                    />
                </section>
                <section className="w-full lg:h-full flex flex-col items-center gap-4 md:gap-8 lg:gap-4 overflow-scroll bg-backgroundDeep-adm py-8 lg:py-12 rounded-t-[40px] lg:rounded-r-[20px] lg:rounded-l-none z-50">
                    {modules.map((module, index) => {
                        let desbloqueio = true;

                        if(index % 2 !== 0 ){
                            desbloqueio = false;
                        }
                        return (
                            <SectionAccessButton
                                text={module.name}
                                unlocked={desbloqueio}
                            />
                        );
                    })}
                </section>
            </div>
        </div>
    );
}
