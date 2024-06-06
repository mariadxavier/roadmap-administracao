import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
    const json = localStorage.getItem("u");

    if (!json) {
        return null;
    }

    const user = JSON.parse(json);

    return user ?? null;
}

export async function LoginRequest(email: string, password: string) {
    try {
        const request = await fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        return request.json();
    } catch (error) {
        return null;
    }
}

export async function SignUpUser(
    nick: string,
    email: string,
    password: string
) {
    try {
        const request = await fetch("http://localhost:3000/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({nick: nick, email: email, password: password}),
        });
        return request.json();
    } catch (error) {
        return null;
    }
}
