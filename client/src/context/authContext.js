import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    });

    useEffect(() => {
        const data = localStorage.getItem("userData");
        const token = localStorage.getItem("token");
        if (data) {
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                user: parseData,
                token: token,
            });
        }
        //eslint-disable-next-line
    }, []);

    // Update axios headers whenever auth changes
    useEffect(() => {
        axios.defaults.headers.common["Authorization"] = auth?.token;
    }, [auth]);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
