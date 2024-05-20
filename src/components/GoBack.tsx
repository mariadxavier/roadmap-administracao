import { FaArrowLeft } from "react-icons/fa";
import { useNavigate} from "react-router-dom";

export function GoBack(){
    const navigate = useNavigate();
    return(
        <button onClick={() => navigate(-1)} className="bg-button-adm w-12 h-12 p-0.5 flex items-center justify-center rounded-full fixed top-4 left-4">
            <FaArrowLeft className="text-white size-6" />
        </button>
    )
}