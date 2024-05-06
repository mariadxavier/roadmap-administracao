import { GoBack } from "../components/GoBack";
import { AccessButton } from "../components/AccessButton";
import { Input } from "../components/Input";
import { FaEnvelope, FaLock } from "react-icons/fa";

export function Login() {
    return (
        <div className="flex flex-col items-center lg:bg-backgroundLight-adm w-screen h-dvh py-4">
            <GoBack />
            <div className="flex items-center flex-col h-full w-full max-w-[560px] lg:bg-white lg:rounded-[20px] lg:pb-6 justify-center gap-8">
                <div className="size-80 bg-macaco bg-top bg-auto bg-no-repeat" >
                </div>

                <h1 className="font-inter font-black text-title-adm text-[2.3rem] leading-8 tracking-[0.63rem]">LOGIN</h1>

                <form className="flex flex-col items-center gap-4 w-11/12 max-w-[400px]">
                    <Input label="E-mail" placeHolder="Digite seu e-mail" icon={<FaEnvelope size={22} className="text-[#808080]" />} ></Input>
                    <Input label="Senha" placeHolder="Senha de acesso" icon={<FaLock size={22} className="text-[#808080]" />}></Input>
                    <AccessButton text="ENTRAR"/>
                </form>
            </div>
        </div>
    );
}
