import { Input } from "../components/Input";

export function SignIn() {
  return (
    <div className="bg-red-500 h-screen grid place-items-center">
      {/*parte com o bg-branco */}
      <main className="w-full bg-white h-full lg:h-[90%] lg:w-2/5 flex flex-col justify-end">
        <h1 className="font-inter text-center">Cadastro</h1>
        <form className="flex justify-center">
          <Input label="Apelido"/>
        </form>
      </main>
    </div>
  );
}
