import React, { useEffect } from 'react'
import { twMerge } from 'tailwind-merge';

interface PropsHeader {
  percent: number;
}

export function Header({percent}: PropsHeader) {

  const [progress, setProgress] = React.useState(percent);

  useEffect(() => {
    setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        i = i+1
        setProgress(i)
        if(i === percent) {
          clearInterval(timer)
        }
      }, 20)
    }, 1000)
  }, []);

  return (
    <header className='fixed top-5 lg:w-9/12 w-full grid place-items-center z-10'>
      {/* Container Header */}
      <div className='w-11/12 bg-white h-10 rounded-full border-2 border-[#cacaca] flex items-center p-5' style={{background: `linear-gradient(90deg, rgba(0,119,182,1) ${progress >= 100 ? "100" : progress >= 50 ? "20" : "0" }%, rgba(254,243,243,1) ${progress}%)`}}>
        <p className={twMerge("font-bold", progress >= 22 ? "text-white" : "text-black")} >{percent}%</p>
      </div>
    </header>
  )
}

