import { InputRadioFormQuestion } from "./InputRadioFormQuestion";

interface QuestionProps {
  value: "right" | "wrong";
  content: string;
}

interface IFormQuestionProps {
  nameQuestion: string;

  answers: Array<QuestionProps>;
}

export function FormQuestion({ nameQuestion, answers }: IFormQuestionProps) {
  return (
    <form className="flex flex-col w-full gap-4">
      {answers.map((answer) => (
        <InputRadioFormQuestion
          nameQuestion={nameQuestion}
          value={answer.value}
          content={answer.content}
        />
      ))}
    </form>
  );
}
