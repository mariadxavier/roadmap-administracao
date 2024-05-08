import React, { useEffect } from 'react'
import { DiVim } from 'react-icons/di';

interface PropsUnitButton {
    howMany: number;
}

export function UnitButton({howMany}: PropsUnitButton) {

    const buttonsUnit: JSX.Element[] = []
    
    for(let i = 0; i <= howMany; i++) {
        buttonsUnit.push(
        <div className='grid place-items-center h-24 w-24 bg-slate-400 rounded-2xl odd:self-start even:self-end'>
            {i+1}
        </div>
    );
    }

    return buttonsUnit;
    
}