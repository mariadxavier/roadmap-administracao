import { AsideMenu } from "../components/AsideMenu";
import { FooterMenu } from "../components/FooterMenu";
import { Header } from "../components/Header";
import { Unit } from "../components/Unit";
import { UnitButton } from "../components/UnitButton";

export function Principal() {
    return (
        <div className="flex">
            <AsideMenu whosActive="openBook" />
            <div className="h-dvh w-full flex flex-col ">
                <main className="h-full w-full overflow-scroll flex flex-col items-center">
                    <Unit
                        children={[<UnitButton howMany={5} />]}
                        numero="1"
                        nome="Nome da Unidade"
                    />
                    <Unit
                        children={[<UnitButton howMany={5} />]}
                        closed
                        numero="1"
                        nome="Nome da Unidade"
                    />
                    <Unit
                        children={[<UnitButton howMany={5} />]}
                        closed
                        numero="1"
                        nome="Nome da Unidade"
                    />
                    <Unit
                        children={[<UnitButton howMany={5} />]}
                        closed
                        numero="1"
                        nome="Nome da Unidade"
                    />
                </main>
                <FooterMenu whosActive="openBook" />
            </div>
        </div>
    );
}

{
    /* 
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
        
        */
}
