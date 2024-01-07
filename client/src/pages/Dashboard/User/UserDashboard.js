import React from 'react'
import { useAuth } from '../../../context/authContext';
import MainLayout from './../../../Components/Layout/MainLayout/MainLayout';



const UserDashboard = () => {
    const [auth] = useAuth()
    console.log(auth)
    return (
        <MainLayout>
            <h3>{auth?.user?.name}</h3>
            <h3>{auth?.user?.email}</h3>
            <h3>{auth?.user?.mobileNumber}</h3>
        </MainLayout >
    )
}

export default UserDashboard