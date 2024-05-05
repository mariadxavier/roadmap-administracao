import { FormQuestion } from "./FormQuestion";

interface IQuestionProps {
  title: string;
}
//apagar essa interface Dps
interface QuestionProps {
  value: "right" | "wrong";
  content: string;
}

export function Question({ title }: IQuestionProps) {
  const answers: Array<QuestionProps> = [
    {
      content:
        "AA AA AARichard McClintock, a Latin professor at Hampden-Sydney College in Virginia MADU AAAAAAAA",
      value: "right",
    },
    {
      content:
        "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      value: "wrong",
    },
    {
      content:
        "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      value: "wrong",
    },
    {
      content:
        "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      value: "wrong",
    },
  ];

  return (
    <section className="flex flex-col items-center h-dvh py-6 xsm:py-2 max-w-[800px]">
      <h2 className="text-[#383838]/60 font-poppins font-bold text-2xl mb-6">
        {title}
      </h2>
      <div className="max-h-[18.12rem] xsm:max-h-[14.12rem] h-fit w-full bg-[#AFE4FF] border-[5px] border-title-adm/45 rounded-[20px] overflow-auto mb-8 xsm:mb-4 p-2">
        <p className="font-poppins text-white font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
          assumenda. Quisquam ab quas nobis nemo? Maxime a vero esse qui
          dignissimos impedit ea sit numquam vel facere delectus, doloremque
          magni?Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Impedit ea nemo qui ab quod Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odit, assumenda. Quisquam ab quas nobis nemo? Maxime
          a vero esse qui dignissimos impedit ea sit numquam vel facere
          delectus, doloremque magni?Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Impedit ea nemo qui ab quod Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Odit, assumenda. Quisquam ab quas
          nobis nemo? Maxime a vero esse qui dignissimos impedit ea sit numquam
          vel facere delectus, doloremque magni?Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Impedit ea nemo qui ab quod
        </p>
      </div>
      <FormQuestion nameQuestion={title} answers={answers} />
    </section>
  );
}
