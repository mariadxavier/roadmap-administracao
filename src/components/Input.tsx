import { ChangeEvent, RefObject, useState } from "react";

interface IInputProps {
  label: string;
  placeHolder?: string;
  icon?: JSX.Element;
  type?: string;
  errorValidadeString: string;
  refInput?: RefObject<HTMLInputElement>;
  onChange?: (
    setValue: React.Dispatch<React.SetStateAction<string>>,
    e: ChangeEvent<HTMLInputElement>,
    setBorder: React.Dispatch<React.SetStateAction<string>>,
    setSpanDisplay: React.Dispatch<React.SetStateAction<string>>
  ) => void;
}

export function Input({
  label,
  placeHolder,
  errorValidadeString,
  icon,
  type,
  refInput,
  onChange,
}: IInputProps) {
  const [value, setValue] = useState("");
  const [border, setBorder] = useState("none");
  const [spanDisplay, setSpanDisplay] = useState("none");
  return (
    <div className="flex flex-col w-[90%] items-center justify-center relative">
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
          className=" bg-[#d9d9d9] w-full  h-12 rounded-lg pl-[50px] placeholder:text-[#7f7f7f] font-inter placeholder:opacity-60 outline-none focus-within:outline-blue-300/70"
          placeholder={placeHolder}
          style={{ border: border }}
          ref={refInput}
          onChange={(e) => {
            if (onChange) {
              onChange(setValue, e, setBorder, setSpanDisplay);
            }
          }}
          value={value}
          name={label}
          type={type}
        />
        <span
          className="absolute text-xs ml-4 mt-1 xsm:ml-2 text-red-700 before:content-['*'] flex flex-col items-center justify-center before:mr-1 text-nowrap"
          style={{ display: spanDisplay }}
        >
          {errorValidadeString}
        </span>
      </label>
    </div>
  );
}
