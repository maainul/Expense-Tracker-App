import { useState, useContext, createContext, useEffect } from "react";

// Context
const AuthContext = createContext()


// Provider
const AuthProvider = ({ children }) => {

    //Global State
    const [auth, setAuth] = useState({
        user: null,
        token: ''
    })

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
    }, [setAuth]); // Remove 'auth' from the dependency array

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

// custom hook
const useAuth = () => useContext(AuthContext);

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