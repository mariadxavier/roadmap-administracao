import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [returnedUser, setReturnedUser] = useState<IUser | null>({});

    useEffect(() => {
        const user = getUserLocalStorage();
        if (user) {
            setReturnedUser(user);
        }
    }, []);

    async function authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password);
        const payload = { token: response.token, user: response.user };
        setReturnedUser(payload);
        setUserLocalStorage(payload);
    }

    async function logout() {
        setReturnedUser(null);
        setUserLocalStorage(null);
    }

    return (
        <AuthContext.Provider value={{ ...returnedUser, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
