import React from 'react'
import MainLayout from '../../../Components/Layout/MainLayout/MainLayout';
import { useAuth } from '../../../context/authContext';

const AdminDashboard = () => {
    const [auth] = useAuth()

    return (
        <MainLayout>
            <div>AdminDashboard</div>
            <h3> Admin Name : {auth?.user?.name}</h3>
            <h3> Admin Email : {auth?.user?.email}</h3>
            <h3> Admin Contact : {auth?.user?.mobileNumber}</h3>
        </MainLayout>
    )
}

export default AdminDashboard