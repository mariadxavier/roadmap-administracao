import {Header} from '../components/Header'
import { Unit } from '../components/Unit'
import {UnitButton} from '../components/UnitButton'

export function Principal() {
  return (
    <div className='h-dvh'>
        <Header percent={40}/>
        <Unit children={[<UnitButton howMany={5}/>] } numero='1' nome='Nome da Unidade'/>
    </div>
  )
}

