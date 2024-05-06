export function InputRadioFormQuestion({
  nameQuestion,
  value,
  content,
}: {
  nameQuestion: string;
  value: "right" | "wrong";
  content: string;
}) {
  return (
    <label className="flex items-center ">
      <input
        className="appearance-none bg-[#d9d9d9] min-w-8 mix-h-8 size-8 rounded-full transition-colors duration-500 checked:bg-backgroundLight-adm checked:border-[8px] checked:border-[#81bcdb] mr-3 cursor-pointer"
        type="radio"
        value={value}
        name={nameQuestion}
      />
      <p className="font-poppins text-sm ">{content}</p>
    </label>
  );
}
