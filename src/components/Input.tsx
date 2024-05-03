interface IInputProps {
  label: string;
  placeHolder?: string;
}

export function Input({ label }: IInputProps) {
 
  return (
    <div className="flex flex-col w-4/5 items-center ">
      <label className="self-start ml-4" htmlFor={label}>{label}</label>
      <input className="w-full bg-gray-200" type="text" />
    </div>
  );
}
