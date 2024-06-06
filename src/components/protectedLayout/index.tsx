import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({children}: {children: JSX.Element}) => {
    const auth = useAuth();

    if (!auth.token){
        return <h1>acesso negado, realize login</h1>
    }
    return children;
}