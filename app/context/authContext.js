import React, { createContext, useContext, useEffect, useState } from 'react';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

// context
const AuthContext = createContext();

// provider
const AuthProvider = () => {
    // Global State
    const [state, setState] = useState({
        user: null,
        token: "",
    })


    // initial localstorage data

    useEffect(() => {
        const loadLocalStorageData = async () => {
            let data = await AsyncStorage.getItem('@auth')
            let loginData = JSON.parse(data)
            setState({
                ...state,
                user: loginData.user,
                token: loginData?.token
            })
        }
        loadLocalStorageData()
    }, [])

    return
    (
        <AuthContext.Provider value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    )
}


export { AuthContext, AuthProvider }