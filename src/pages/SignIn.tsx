import { AccessButton } from "../components/AccessButton";
import { GoBack } from "../components/GoBack";
import { Input } from "../components/Input";

import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export function SignIn() {
  return (
    <>
      <GoBack />
      <div className="bg-backgroundLight-adm h-screen grid place-items-center">
        {/*parte com o bg-branco */}
        <main className="w-full bg-white h-full lg:h-[90%] lg:w-2/5 flex flex-col justify-end items-center lg:rounded-[20px]">
          <h1 className="font-inter text-center tracking-[0.5rem] text-title-adm font-black text-[2.3rem]">
            Cadastro
          </h1>
          <form className="flex flex-col items-center pb-12 w-full max-w-[450px] gap-6">
            <Input
              label="Apelido"
              placeHolder="Digite seu apelido"
              icon={<FaUser size={22} className="text-[#808080]" />}
            />
            <Input
              label="Email"
              placeHolder="Digite seu email"
              icon={<FaEnvelope size={22} className="text-[#808080]" />}
            />
            <Input
              label="Senha"
              placeHolder="Senha de acesso"
              icon={<FaLock size={22} className="text-[#808080]" />}
            />
            <AccessButton text="CADASTRAR" w="80%" />
          </form>
        </main>
      </div>
    </>
  );
}
