import React, { ComponentProps } from 'react'
import img1 from '../assets/signing-contract.png'
import img2 from '../assets/young-people-working-at-the-desk.png'

interface PropsGrupImg extends ComponentProps<'div'> {

}

export function GrupImg({...props}: PropsGrupImg) {
  return (
    <div className="grid relative justify-items-center h-3/4 w-5/6 lg:w-[70%] lg:h-full top-[2vh]" {...props}>
        <img src={img1} className='absolute object-cover' alt="" />
        <img src={img2} className='absolute h-full object-cover top-10' alt="" />
    </div>
  )
}

