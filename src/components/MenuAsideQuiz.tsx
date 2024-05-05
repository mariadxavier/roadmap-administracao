import QuizWoman from "../assets/quizWoman.svg";
import GearMenuFooter from "../assets/gearMenuFooter.svg";
import { ButtonAsideMenu } from "./ButtonAsideMenu";

export function MenuAsideQuiz() {
  return (
    <aside className="w-[30dvw] hidden lg:flex flex-col border-r border-[#a6a6a6ad] max-w-[300px] items-center pt-[2.13rem] pb-4 gap-6 justify-between">
      <div className="w-full flex flex-col gap-5 items-center">
        <div className="size-[65%] max-h-[200px] xsm:pt-[3rem] xsm:pb-[2.25rem]">
          <img className="" src={QuizWoman} />
        </div>
        <div className="w-full  px-4">
          <h1 className="text-[#77777a] font-inter font-black text-[2rem] xsm:text-[1.7rem] text-nowrap">
            Questionário 1:
          </h1>
          <span className="text-titlePrincipal-adm  font-inter font-black text-[2rem] xsm:text-[1.7rem]">
            Marketing
          </span>
        </div>
      </div>
      <div
        className="w-full justify-self-end
      "
      >
        <ButtonAsideMenu img={GearMenuFooter} text="Menu" />
      </div>
    </aside>
  );
}
