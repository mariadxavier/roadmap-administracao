import { GrupImg } from '../components/GrupImg';
import { AccessButton } from '../components/AccessButton';
import { useNavigate } from 'react-router-dom';

export function StartPage() {
  const navigate = useNavigate();
  return (
    <section className='flex flex-col w-screen h-dvh bg-backgroundLight-adm items-center justify-between lg:flex-row-reverse lg:p-16'>
      <GrupImg/>
      <div className='flex flex-col w-11/12 max-w-[450px] relative bottom-[1rem] md:bottom-[3rem] z-10 gap-3 xsm:gap-2 lg:self-end lg:bottom-0 lg:w-60'>
        <h1 className='font-poppins text-3xl xsm:text-2xl text-titlePrincipal-adm font-bold lg:text-4xl text-wrap'>PROZ ROADMAP</h1>
        <AccessButton onClick={() => {navigate("/login")}} text='Entrar' color='w-full'/>
      </div>
    </section>
  )
}

