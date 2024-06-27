import CardCourse from '../components/CardCourse'
import { GrupImg } from '../components/GrupImg'

export function AccessPage() {
  return (
    <section className='flex flex-col items-center justify-center w-screen h-screen'>
      
      <h1 className="font-poppins font-bold text-titlePages-adm text-4xl md:text-5xl leading-8 top-[5vh] lg:top-8 fixed z-[9999]">Acessos</h1>

      {/* Container Carousel */}
      <div className='flex flex-nowrap lg:justify-center gap-4 overflow-auto relative top-8 h-[80%] w-screen pl-4 pr-4 md:pl-[15vw] md:pr-[15vw] lg:pl-4 lg:pr-4'>
        <CardCourse bg='#e3f2fd' bgButton='#0077b6' grupImg={<GrupImg/>} text='TÉCNICO ADMINISTRAÇÃO'id='adm'/>
        <CardCourse bg='#e3f2fd' bgButton='#006d77' grupImg={<GrupImg/>} text='TÉCNICO ENFERMAGEM'id='enf'/>

      </div>
      
    </section>
  )
}

