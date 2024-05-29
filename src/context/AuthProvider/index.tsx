import {createContext, useState} from "react";
import { IAuthProvider, IContext, IUser } from "./types";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({children}: IAuthProvider) => {
    const [returnedUser, setReturnedUser] = useState<IUser | Object>({});

    async function authenticate (email: string, password: string) {
        const payload = {}
        setReturnedUser(payload);

    }

    async function logout () {
        setReturnedUser({});
    }

    return(
        <AuthContext.Provider value={{...returnedUser, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    )
}