import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import Spinner from '../Spinner/Spinner'

const PrivateRoute = () => {
    const [ok, setOK] = useState(false)
    const [auth] = useAuth()

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get('http://localhost:8081/api/v1/auth/user-auth');
                if (res.data.ok) {
                    setOK(true);
                } else {
                    setOK(false);
                }
            } catch (error) {
                console.error(error);
                setOK(false);
            }
        };

        if (auth?.token) authCheck()
    }, [auth?.token])


    return ok ? <Outlet /> : <Spinner />
}

export default PrivateRoute