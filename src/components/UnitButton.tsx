import { FaStar } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface PropsUnitButton {
    index: number;
    arrayLength: number;
}

export function UnitButton({index, arrayLength}: PropsUnitButton) {

    index = index + 1;

    if(index != arrayLength) {
        return (
            <div className={twMerge(`grid place-items-center size-24 rounded-2xl odd:self-start even:self-end shadow-md`)} style={{backdropFilter: `contrast(${12-index})`}}>
                <h1 className="text-5xl font-bold text-gray-700">{index}</h1>
            </div>
        )
    } else {
        return (
            <button className="grid place-items-center w-24 h-24 backdrop-contrast-[15] shadow-md rounded-2xl">
                <FaStar className="size-16 fill-yellow-300" />
            </button>
        )
    }
    
}

// interface PropsUnitButton {
//     howMany: number;
// }

// export function UnitButton({howMany}: PropsUnitButton) {

//     const buttonsUnit: JSX.Element[] = []
    
//     for(let i = 0; i <= howMany; i++) {
//         buttonsUnit.push(
//         <div className='grid place-items-center h-24 w-24 bg-slate-400 rounded-2xl odd:self-start even:self-end'>
//             {i+1}
//         </div>
//     );
//     }

//     return buttonsUnit;
    
// }