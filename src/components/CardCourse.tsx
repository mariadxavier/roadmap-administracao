import { AccessButton } from './AccessButton'
import { twMerge } from 'tailwind-merge';

interface PropsCardCourse {
    bg: string;
    bgButton: string;
    grupImg: JSX.Element;
    text: string;
}

function CardCourse({bg, bgButton, text, grupImg}: PropsCardCourse) {
  return (
    <div className='w-11/12 h-full flex flex-col flex-shrink-0 items-center justify-between rounded-[20px] md:w-[70vw] lg:w-[25vw]' style={{background: `${bg}`}}>
        {grupImg}
        <div className='w-full'>
            <h1 className='p-3 text-2xl md:text-4xl lg:text-2xl font-fascinate tracking-widest text-title-adm'>
                {text.split(' ')[0]}<br/>{text.split(' ')[1]}
            </h1>
            <AccessButton text='ENTRAR' className={twMerge(`${bgButton} rounded-t-none w-full h-14 md:text-4xl md:h-18 lg:text-2xl`)}/>
        </div>
    </div>
  )
}

export default CardCourse
