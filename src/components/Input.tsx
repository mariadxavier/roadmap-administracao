interface IInputProps {
  label: string;
  placeHolder?: string;
  icon?: JSX.Element;
}

export function Input({ label, placeHolder, icon }: IInputProps) {
  return (
    <div className="flex flex-col w-4/5 items-center ">
      <label
        className="self-start ml-4 font-inter font-bold text-sm"
        htmlFor={label}
      >
        {label}
      </label>
      <label className="w-full relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </span>
        <input
          className="w-full bg-gray-200  h-12 rounded-lg pl-10 placeholder:text-[#434343] placeholder:opacity-60"
          placeholder={placeHolder}
          name={label}
          type="text"
        />
      </label>
    </div>
  );
}
