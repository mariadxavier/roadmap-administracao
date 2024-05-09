import { AboutUs } from "../components/AboutUs";
import { AsideMenu } from "../components/AsideMenu";
import { FooterMenu } from "../components/FooterMenu";
import { Header } from "../components/Header";
import { Unit } from "../components/Unit";
import { UnitButton } from "../components/UnitButton";

export function Principal() {
    return (
        <div className="flex">
            <AsideMenu whosActive="openBook" />
            <div className="w-screen flex flex-col h-dvh">
                <main className="overflow-scroll">
                    <header className="flex flex-col items-center w-full gap-6 py-4">
                        <Header percent={60} />
                        <h1 className="w-full sm:w-10/12 self-start mt-16 px-4 sm:px-8 font-poppins font-extrabold text-titlePrincipal-adm text-3xl lg:hidden">
                            Boas vindas à sua trilha de conhecimento!
                        </h1>
                        <div className="size-full lg:hidden">
                            <AboutUs />
                        </div>
                    </header>
                    <section className="h-full w-full flex flex-col items-center lg:mt-10">
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
                    </section>
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
