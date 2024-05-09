interface IInputProps {
  label: string;
  placeHolder?: string;
  icon?: JSX.Element;
}

export function Input({ label, placeHolder, icon }: IInputProps) {
  return (
    <div className="flex flex-col w-[90%] items-center justify-center">
      <label
        className="self-start ml-6 font-poppins font-bold text-sm text-[#434343]"
        htmlFor={label}
      >
        {label}
      </label>
      <label className="font-poppins w-[90%] relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
          {icon}
        </span>
        <input
          className=" bg-[#d9d9d9] w-full  h-12 rounded-lg pl-[50px] placeholder:text-[#7f7f7f] font-inter placeholder:opacity-60"
          placeholder={placeHolder}
          name={label}
          type="text"
        />
      </label>
    </div>
  );
}
