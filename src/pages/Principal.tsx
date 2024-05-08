import { Header } from '../components/Header'
import { Unit } from '../components/Unit'
import { UnitButton } from '../components/UnitButton'

export function Principal() {
  return (
    <div className='h-dvh'>
      <Header percent={40} />

      {/* 
        <andre>
        unidades.map((unidade, tema)
          return(
            <unit>
                tema.map((index)
                  return(
                    Unitbutton {index +1}
                  )
                )
             <unit/>
          )
        )

        Modulo
            {
              [ 
               [0] {
                  nomeDisicplina : "Marketing",
                  temas: [
                   {
                      nome: "Planilha",
                      t1: "wejnfkjwbefwie",
                    }
                  ]
                },
                {
                  nomeDisciplina : "Marketing",
                  temas: [
                    {
                      nome: "Planilha",
                      t1: "wejnfkjwbefwie",
                      
                    }
                  ]
                },

              ]
        }]
        }
        
        */}
      <Unit children={[<UnitButton howMany={5} />]} numero='1' nome='Nome da Unidade' />
      <Unit children={[<UnitButton howMany={5} />]} closed numero='1' nome='Nome da Unidade' />
    </div>
  )
}

