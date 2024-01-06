import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";

// Context
const AuthContext = createContext()


// Provider
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ''
    })

    // Update axios default token whenever 'auth.token' changes
    useEffect(() => {
        axios.defaults.headers.common["Authorization"] = auth?.token;
    }, [auth.token]);

    // Load user data from local storage on mount
    useEffect(() => {
        const userData = localStorage.getItem('userData');
        const token = localStorage.getItem('token');
        if (userData) {
            const parsedData = JSON.parse(userData);
            setAuth(prevAuth => ({
                ...prevAuth,
                user: parsedData,
                token: token // No need to parse token here
            }));
        }
        //eslint-disable-next-line
    }, []); // No dependencies, runs once on mount

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

// custom hook
const useAuth = () => {
    const [auth, setAuth] = useContext(AuthContext)
    //Extract Token and User directly
    const { token, user } = auth
    return { token, user, setAuth }
}
// User Details With all the infromation
const useUserDetails = () => {
    const [auth] = useAuth();
    const getUserDetails = () => {
        const fields = ["_id", "username", "email", "mobileNumber", "role", "firstname", "lastname", "area", "town", "city"];
        const userDetails = {};
        fields.forEach(field => {
            if (auth.user && auth.user[field]) {
                userDetails[field] = auth.user[field];
            }
        });
        return userDetails;
    }
    return { getUserDetails }
}

export { useAuth, AuthProvider, useUserDetails };
