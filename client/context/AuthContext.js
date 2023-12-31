import React, { createContext, useState, useEffect } from 'react';

// Context
const AuthContext = createContext()


// Provider
export const AuthProvider = ({ children }) => {

    //Global State
    const [state, setState] = useState({
        user: null,
        token: ''
    })

    return <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext