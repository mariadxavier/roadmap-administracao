import React, { ComponentProps } from 'react'
import img1 from '../assets/signing-contract.png'
import img2 from '../assets/young-people-working-at-the-desk.png'

function GrupImg() {
  return (
    <div className="grid relative justify-items-center h-3/4 w-5/6 lg:w-[70%] lg:h-full top-[2vh]">
        <img src={img1} className='absolute h-3/5 lg:h-4/5' alt="" />
        <img src={img2} className='absolute h-full object-cover top-10' alt="" />
    </div>
  )
}

export default GrupImg