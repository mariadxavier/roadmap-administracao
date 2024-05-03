import { FaArrowLeft } from "react-icons/fa";

export function GoBack() {
  return (
    <button className="bg-button-adm w-12 h-12 p-0.5 flex items-center justify-center rounded-full fixed left-1 top-1 z-10">
      <FaArrowLeft className="text-white size-6" />
    </button>
  );
}
