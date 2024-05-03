import { FaArrowLeft } from "react-icons/fa";

export function GoBack() {
    return (
        <button className="bg-adm-dark w-12 h-12 p-0.5 flex items-center justify-center rounded-full">
            <FaArrowLeft className="text-white size-6" />
        </button>
    );
}
