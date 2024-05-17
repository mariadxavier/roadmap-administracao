import QuizWoman from "../assets/quizWoman.svg";
import { AccessButton } from "../components/AccessButton";
import { MenuAsideQuiz } from "../components/MenuAsideQuiz";
import { Question } from "../components/Question";
import { FaChevronDown } from "react-icons/fa6";

export function Quiz() {
  return (
    <section className="bg-backgroundMedium-adm lg:flex lg:bg-white">
      <MenuAsideQuiz />
      <div className="flex flex-col items-center w-full">
        <div className=" flex flex-col items-center h-dvh max-w-[800px] w-full lg:max-w-[100%] lg:hidden">
          <div className="size-[65%] xsm:pt-[3rem] xsm:pb-[2.25rem] pt-[5.31rem] pb-[3.25rem] lg:hidden">
            <img className="size-full" src={QuizWoman} />
          </div>
          <section className="bg-white w-full flex flex-col items-center rounded-t-[40px] h-full justify-between pt-6 xsm:pt-2 px-6 lg:rounded-none lg:hidden">
            <div className="w-full pt-2 ">
              <h1 className="text-titlePrincipal-adm font-inter font-black text-[2rem] xsm:text-[1.7rem] md:text-6xl lg:text-[2rem]">
                Questionário 1:
              </h1>
              <span className="text-titlePrincipal-adm  font-inter font-black text-[2rem] xsm:text-[1.7rem] md:text-6xl lg:text-[2rem]">
                Marketing
              </span>
            </div>
            <FaChevronDown
              className="text-titlePrincipal-adm animate-bounce duration-700"
              size={40}
            />
          </section>
        </div>
        <div className="h-fit lg:h-dvh flex justify-center overflow-auto w-full">
          <main className="px-4 pt-16 h-fit flex flex-col items-center pb-6 max-w-[800px] lg:max-w-[100%] bg-white ">
            <Question title="Questão 1" />
            <Question title="Questão 2" />
            <div className="w-full flex justify-center max-w-[500px]">
              <AccessButton text="Resultado" color="bg-buttonLesson-adm" />
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
