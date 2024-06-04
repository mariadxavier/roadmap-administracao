import { ProtectedLayout } from "./components/protectedLayout";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Principal } from "./pages/Principal";
import { StartPage } from "./pages/StartPage";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import AccessPage from "./pages/AccessPage";
import { Lesson } from "./pages/Lesson";
import { Quiz } from "./pages/Quiz";
import { Section } from "./pages/Section";
import { Configuration } from "./pages/Configuration";

export function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                  {/* Página index, início, não protegida: */}
                    <Route
                        path="/"
                        element={<StartPage/>}
                    />

                    {/* Página login, não protegida: */}
                    <Route
                        path="/login"
                        element={<Login/>}
                    />

                     {/* Página de cadastro, não protegida: */}
                    <Route
                        path="/cadastro"
                        element={<SignUp/>}
                    />

                     {/* Página principal, onde fica o conteúdo, protegida: */}
                    <Route
                        path="/trilha"
                        element={
                            <ProtectedLayout>
                                <Principal />
                            </ProtectedLayout>
                        }
                    />

                     {/* Página de acesso a cursos, protegida: */}
                     {/* OBS: feature ainda não lançada */}
                    <Route
                        path="/acessos"
                        element={
                            <ProtectedLayout>
                                <AccessPage />
                            </ProtectedLayout>
                        }
                    />

                     {/* Página de configurações do usuário, protegida: */}
                     <Route
                        path="/configuracoes"
                        element={
                            <ProtectedLayout>
                                <Configuration />
                            </ProtectedLayout>
                        }
                    />

                      {/* Página de lição(aula, conteúdo), protegida: */}
                      <Route
                        path="/aula"
                        element={
                            <ProtectedLayout>
                                <Lesson />
                            </ProtectedLayout>
                        }
                    />

                      {/* Página de questionário, protegida: */}
                      <Route
                        path="/quiz"
                        element={
                            <ProtectedLayout>
                                <Quiz />
                            </ProtectedLayout>
                        }
                    />

                      {/* Página de acesso à módulos, protegida, primeira após login: */}
                      <Route
                        path="/modulos"
                        element={
                            <ProtectedLayout>
                                <Section />
                            </ProtectedLayout>
                        }
                    />


                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
