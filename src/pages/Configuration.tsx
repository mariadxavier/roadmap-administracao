import { ConfigurationButton } from "../components/ConfigurationButton";
import Lock from "../assets/lock.svg";
import WomanUser from "../assets/womanUser.svg";
import RobotIcon from "../assets/robot-icon.png"
import { getUserLocalStorage } from "../context/AuthProvider/util";

export function Configuration() {
    const user = getUserLocalStorage().user;
    const nickUser = user.nick;

    return (
        <div className="flex w-full">
            <div className="flex flex-col items-center w-full bg-white h-dvh justify-between ">
                <div className="w-full flex flex-col items-center pt-10 xsm:pt-2">
                    <h2 className="font-poppins font-bold justify-center text-[#383838] opacity-60 text-[2rem] mb-8">
                        Configurações
                    </h2>
                    <div className="flex gap-8 items-center">
                        <img className="size-[20dvw] max-h-44 max-w-44 min-h-32 min-w-32 size-m  grid place-items-center" src={RobotIcon}/>

                        <h3 className="font-poppins flex flex-col font-bold text-[#383838] opacity-60 text-2xl after:content-[''] after:w-full after:h-1 after:bg-[#0077b663]">
                            Olá, {nickUser}
                        </h3>
                    </div>
                    <div className="flex flex-col  w-full max-w-[500px] px-4 gap-4 mt-16 xsm:mt-6">
                        <ConfigurationButton
                            text="Pessoal"
                            icon={
                                <img
                                    src={WomanUser}
                                    className="size-9 md:size-12"
                                />
                            }
                        />
                        <ConfigurationButton
                            text="Senha"
                            icon={
                                <img src={Lock} className="size-9 md:size-12" />
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
