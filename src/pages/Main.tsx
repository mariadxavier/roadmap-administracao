import { FormOpinion } from "../components/FormOpinion";
import { Header } from "../components/Header";
import { Unit } from "../components/Unit";
import { UnitButton } from "../components/UnitButton";

export function Main() {
  // Teste de retorno do backend
  const temas: { nome: string }[] = [
    { nome: "Matéria 1" },
    { nome: "Matéria 2" },
    { nome: "Matéria 3" },
    { nome: "Matéria 1" },
    { nome: "Matéria 2" },
    { nome: "Matéria 3" },
    { nome: "Matéria 2" },
    { nome: "Matéria 3" },
    { nome: "Matéria 2" },
    { nome: "Matéria 3" },
  ];

    return (
            <div className="w-screen flex flex-col h-dvh">
                <main className="overflow-scroll">
                    <header className="flex flex-col items-center w-full gap-6 py-4">
                        <Header percent={60} />
                        <h1 className="w-full sm:w-10/12 self-start mt-16 px-4 sm:px-8 font-poppins font-extrabold text-titlePrincipal-adm text-3xl lg:hidden xsm:text-2xl">
                            Boas vindas à sua trilha de aprendizado!
                        </h1>
                        <div className="size-full lg:hidden">
                            <FormOpinion />
                        </div>
                    </header>
                    <section className="h-full w-full flex flex-col items-center lg:mt-10">
                          <Unit color="#86d5fe" numero="1" nome="Marketing">
                            {temas.map((item, index) => {
                              // este log existe apenas pra retirar o warning q impede o deploy no vercel por falta de uso de "item". Necessário outra solução.

                console.log(item.nome);
                return (
                  <UnitButton
                    key={index}
                    index={index}
                    arrayLength={temas.length}
                  />
                );
              })}
            </Unit>
            <Unit color="#86d5fe" numero="1" nome="Marketing">
              {temas.map((item, index) => {
                // este log existe apenas pra retirar o warning q impede o deploy no vercel por falta de uso de "item". Necessário outra solução.
                console.log(item.nome);
                return (
                  <UnitButton
                    key={index}
                    index={index}
                    arrayLength={temas.length}
                  />
                );
              })}
            </Unit>
          </section>
        </main>
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

        unidades.map( unidade => <unity color={unidade.color} buttons={unidade.button}>)

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

        [
          {
            logica: [
              {tema1: {
                nome: Algoritimo,
                color: "#ffffff",
                number: 2,
                apiColor: "linkFetch"
                buttons: [
                  {id: "1",
                    number: 1,
                    unityValue: 1,
                    lessonValue :3
                    color: "blue"
                  }
                ]
              }}
            ]
          }
        ]
        
        */
}
