import React, { ComponentProps } from 'react'
import img1 from '../img/signing-contract.png'
import img2 from '../img/young-people-working-at-the-desk.png'

function GrupImg() {
  return (
    <div className="grid relative justify-items-center h-3/4 w-5/6 top-[2vh]">
        <img src={img1} className='absolute h-3/5' alt="" />
        <img src={img2} className='absolute h-full object-cover top-10' alt="" />
    </div>
  )
}

export default GrupImg