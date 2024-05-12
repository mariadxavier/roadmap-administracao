import { GoBack } from "../components/GoBack";
import { AccessButton } from "../components/AccessButton";
import { Input } from "../components/Input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Login() {
    return (
        <div className="flex flex-col items-center lg:bg-backgroundLight-adm w-dwh h-dvh py-4">
            <GoBack />
            <div className="flex items-center flex-col h-full w-full max-w-[560px] lg:bg-white lg:rounded-[20px] lg:pb-6 justify-center gap-4">

                <img className="xsm:hidden size-60 bg-top bg-auto bg-no-repeat" src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/See-No-Evil%20Monkey.png" alt="See-No-Evil Monkey"/>

                <h1 className="font-poppins font-black text-title-adm text-[2.3rem] leading-8 tracking-[0.63rem]">LOGIN</h1>

                <form className="flex flex-col items-center gap-4 w-11/12 max-w-[400px]">
                    <Input label="E-mail"
                    placeHolder="Digite seu e-mail" icon={<FaEnvelope size={22} className="text-[#808080]" />} ></Input>

                    <Input label="Senha" placeHolder="Senha de acesso" icon={<FaLock size={22} className="text-[#808080]" />}></Input>
                    <AccessButton text="ENTRAR"/>
                <Link to={"/signin"} className="font-poppins text-sm text-nowrap">
                    Não tem conta ainda? <span className="font-bold text-titlePrincipal-adm">Cadastre-se!</span>
                </Link>
                </form>
            </div>
        </div>
    );
}
