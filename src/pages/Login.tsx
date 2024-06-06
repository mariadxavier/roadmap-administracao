import { GoBack } from "../components/GoBack";
import { AccessButton } from "../components/AccessButton";
import { Input } from "../components/Input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
    ChangeEvent,
    FormEvent,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from "react";
import { useAuth } from "../context/AuthProvider/useAuth";
import { getUserLocalStorage } from "../context/AuthProvider/util";

export function Login() {
    const [buttonState, setButtonState] = useState(true);
    const [emailInputValidate, setEmailInputValidade] = useState(true);
    const [passwordInputValidate, setPasswordInputValidade] = useState(true);
    const emailInput = useRef() as MutableRefObject<HTMLInputElement>;
    const passwordInput = useRef() as MutableRefObject<HTMLInputElement>;

    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!emailInputValidate && !passwordInputValidate) {
            setButtonState(false);
        } else {
            setButtonState(true);
        }
    }, [emailInputValidate, passwordInputValidate]);

    function handleEmailValidate(
        setValue: React.Dispatch<React.SetStateAction<string>>,
        e: ChangeEvent<HTMLInputElement>,
        setBorder: React.Dispatch<React.SetStateAction<string>>,
        setSpanDisplay: React.Dispatch<React.SetStateAction<string>>
    ) {
        setValue(e.target.value);
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const validate = emailRegex.test(e.target.value);
        if (validate) {
            setBorder("2px solid green");
            setSpanDisplay("none");
            setEmailInputValidade(false);
        } else {
            setEmailInputValidade(true);
            setBorder("2px solid red");
            setSpanDisplay("block");
        }
    }

    function handlePasswordValidate(
        setValue: React.Dispatch<React.SetStateAction<string>>,
        e: ChangeEvent<HTMLInputElement>,
        setBorder: React.Dispatch<React.SetStateAction<string>>,
        setSpanDisplay: React.Dispatch<React.SetStateAction<string>>
    ) {
        setValue(e.target.value);
        if (e.target.value.length > 7) {
            setBorder("2px solid green");
            setSpanDisplay("none");
            setPasswordInputValidade(false);
        } else {
            setPasswordInputValidade(true);
            setBorder("2px solid red");
            setSpanDisplay("block");
        }
    }

    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        let email = emailInput.current.value;
        let password = passwordInput.current.value;

        try {
            await auth.authenticate(email, password).then(async()=> {
                const user = await getUserLocalStorage();
                if (user.token.length > 1) {
                    navigate("/modulos")        
                }else {
                    throw "E-mail ou senha incorretos";
                }
            })
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="flex flex-col items-center lg:bg-backgroundLight-adm w-dwh h-dvh py-4">
            <GoBack />
            <div className="flex  items-center flex-col h-full w-full max-w-[560px] lg:bg-white lg:rounded-[20px] lg:pb-6 justify-center gap-4">
                <img
                    className="xsm:hidden size-60 bg-top bg-auto bg-no-repeat"
                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/See-No-Evil%20Monkey.png"
                    alt="See-No-Evil Monkey"
                />

                <h1 className="font-poppins font-black text-title-adm text-[2.3rem] leading-8 tracking-[0.63rem]">
                    LOGIN
                </h1>

                <form
                    onSubmit={onSubmit}
                    method="POST"
                    className="flex flex-col items-center gap-4 w-11/12 max-w-[400px]"
                >
                    <Input
                        errorValidadeString="Insira um e-mail válido"
                        label="E-mail"
                        placeHolder="Digite seu e-mail"
                        icon={
                            <FaEnvelope size={22} className="text-[#808080]" />
                        }
                        refInput={emailInput}
                        onChange={handleEmailValidate}
                    ></Input>

                    <Input
                        label="Senha"
                        placeHolder="Senha de acesso"
                        icon={<FaLock size={22} className="text-[#808080]" />}
                        type="password"
                        errorValidadeString=" "
                        // refInput={passwordInput}
                        refInput={passwordInput}
                        onChange={handlePasswordValidate}
                    ></Input>
                    <AccessButton
                        disabled={buttonState}
                        text="ENTRAR"
                        type="submit"
                    />
                    <Link
                        to={"/cadastro"}
                        className="font-poppins text-sm text-nowrap hover:underline text-[#4e565c] font-bold"
                    >
                        Não tem conta ainda?{" "}
                        <span className="font-bold text-title-adm">
                            Cadastre-se!
                        </span>
                    </Link>
                </form>
            </div>
        </div>
    );
}
