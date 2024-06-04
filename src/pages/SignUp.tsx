import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { AccessButton } from "../components/AccessButton";
import { GoBack } from "../components/GoBack";
import { Input } from "../components/Input";

import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface IUser {
  nick: string;
  password: string;
  _id: string;
}

export function SignUp() {
  const [buttonState, setButtonState] = useState(true);
  const [nickInputValidate, setNickInputValidade] = useState(true);
  const [emailInputValidate, setEmailInputValidade] = useState(true);
  const [passwordInputValidate, setPasswordInputValidade] = useState(true);
  const [checkPasswordInputValidate, setCheckPasswordInputValidate] =
    useState(true);
  const [returnedUser, setReturnedUser] = useState<IUser | object>({});

  const nickInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const checkPasswordInput = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      !nickInputValidate &&
      !emailInputValidate &&
      !passwordInputValidate &&
      !checkPasswordInputValidate
    ) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }, [
    nickInputValidate,
    emailInputValidate,
    passwordInputValidate,
    checkPasswordInputValidate,
  ]);

  useEffect(() => {
    const returnedUserAtt = Object.getOwnPropertyNames(returnedUser);
    if (returnedUserAtt.length === 0) {
      return;
    }
    localStorage.setItem("user-RM-ADM", JSON.stringify(returnedUser));
  }, [returnedUser]);

  function handleNickValidate(
    setValue: React.Dispatch<React.SetStateAction<string>>,
    e: ChangeEvent<HTMLInputElement>,
    setBorder: React.Dispatch<React.SetStateAction<string>>,
    setSpanDisplay: React.Dispatch<React.SetStateAction<string>>
  ) {
    setValue(e.target.value);
    if (e.target.value.length > 3 && e.target.value.length <= 10) {
      setBorder("2px solid green");
      setSpanDisplay("none");
      setNickInputValidade(false);
    } else {
      setNickInputValidade(true);
      setBorder("2px solid red");
      setSpanDisplay("block");
    }
  }

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

  function handleCheckPasswordValidate(
    setValue: React.Dispatch<React.SetStateAction<string>>,
    e: ChangeEvent<HTMLInputElement>,
    setBorder: React.Dispatch<React.SetStateAction<string>>,
    setSpanDisplay: React.Dispatch<React.SetStateAction<string>>
  ) {
    setValue(e.target.value);
    const passwordInputRef = passwordInput.current;
    const checkPasswordInputRef = checkPasswordInput.current;

    const isEqual = passwordInputRef?.value === checkPasswordInputRef?.value;

    if (isEqual) {
      setBorder("2px solid green");
      setSpanDisplay("none");
      setPasswordInputValidade(false);
      setCheckPasswordInputValidate(false);
    } else {
      setPasswordInputValidade(true);
      setBorder("2px solid red");
      setSpanDisplay("block");
      setCheckPasswordInputValidate(true);
    }
  }

  async function handlerSubmitForm(e: FormEvent) {
    e.preventDefault();
    const nickInputRef = nickInput.current;
    const emailInputRef = emailInput.current;
    const passwordInputRef = passwordInput.current;

    const newUser = {
      nick: nickInputRef?.value,
      email: emailInputRef?.value,
      password: passwordInputRef?.value,
    };

    await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then(async (response) => {
      const data = await response.json();
      setReturnedUser(data);
      if (data.token.length > 0) {
        navigate("/section");
      }
    });
  }

  return (
    <>
      <GoBack />
      <div className="bg-backgroundLight-adm h-dvh grid place-items-center">
        {/*parte com o bg-branco */}
        <main className="w-full bg-white h-full lg:h-[90%] lg:w-2/5 flex flex-col justify-end items-center lg:rounded-[20px]">
          <h1 className="font-poppins text-center tracking-[0.5rem] text-title-adm font-black text-[2.3rem]">
            Cadastro
          </h1>
          <form
            className="flex flex-col items-center pb-[1rem] md:pb-[3rem] w-full max-w-[450px] gap-6"
            onSubmit={handlerSubmitForm}
            method="POST"
          >
            <Input
              label="Apelido"
              placeHolder="Digite seu apelido"
              icon={<FaUser size={22} className="text-[#808080]" />}
              onChange={handleNickValidate}
              errorValidadeString="O nome deve ter entre 3 e 10 caracteres"
              refInput={nickInput}
            />
            <Input
              label="Email"
              placeHolder="Digite seu email"
              icon={<FaEnvelope size={22} className="text-[#808080]" />}
              errorValidadeString="Digite um email válido."
              onChange={handleEmailValidate}
              refInput={emailInput}
            />
            <Input
              label="Senha"
              placeHolder="Senha de acesso"
              icon={<FaLock size={22} className="text-[#808080]" />}
              errorValidadeString="A senha deve ter 8 caracteres ou mais"
              onChange={handlePasswordValidate}
              refInput={passwordInput}
            />
            <Input
              label="Confirmar senha"
              placeHolder="Digite a senha novamente"
              icon={<FaLock size={22} className="text-[#808080]" />}
              errorValidadeString="As senhas são diferentes"
              refInput={checkPasswordInput}
              onChange={handleCheckPasswordValidate}
            />
            <AccessButton disabled={buttonState} text="CADASTRAR" />
          </form>
        </main>
      </div>
    </>
  );
}