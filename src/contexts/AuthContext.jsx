import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import { addAccessToken, getAccessToken } from "../utils/local-storage";
import { useEffect } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
    const [authUser, setAuthUser] = useState(null);
    const [initialLoading, setInitialLoading] = useState(true);

    useEffect(() => {
        if (getAccessToken()) {
            axios
            .get('/auth/me')
            .then(res => {
                setAuthUser(res.data.user)
            })
            .finally(() => 
            setInitialLoading(false)
            )
        } else {
            setInitialLoading(false);
        }
    }, [])

    const login = async loginInputObject => {
        const res = await axios.post('/auth/login', loginInputObject);
        addAccessToken(res.data.accessToken);
        setAuthUser(res.data.user);
    };

    const register = async registerInputObject => {
        const res = await axios.post('/auth/register', registerInputObject);
        console.log(res)
        addAccessToken(res.data.accessToken);
        setAuthUser(res.data.user);
    };

    return (
        <AuthContext.Provider value={
            {
                login, 
                authUser, 
                initialLoading,
                register
            }
        }>{children}</AuthContext.Provider>
    )
};