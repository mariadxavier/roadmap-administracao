import React from 'react'
import GrupImg from '../components/grup-img'
import { AccessButton } from '../components/access-button'

function StartPage() {
  return (
    <section className='flex flex-col w-screen h-screen bg-adm-light items-center justify-between lg:flex-row-reverse lg:p-16'>
      <GrupImg/>
      <div className='flex flex-col relative bottom-[2vh] md:bottom-[6vh] z-10 gap-3 xsm:gap-2 lg:self-end lg:bottom-0 lg:w-60'>
        <h1 className='font-poppins text-3xl xsm:text-2xl text-adm-deep font-bold lg:text-4xl text-wrap'>PROZ ROADMAP</h1>
        <AccessButton/>
      </div>
    </section>
  )
}

export default StartPage