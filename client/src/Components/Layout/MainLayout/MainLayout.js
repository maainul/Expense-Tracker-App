import React from 'react'

import { Toaster } from 'react-hot-toast';
import Footer from '../Footer/Footer';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import { useAuth } from '../../../context/authContext';
import UserSidebar from '../Sidebar/UserSidebar';
import AdminSidebar from './../Sidebar/AdminSidebar';

const MainLayout = ({ children }) => {
    const [auth] = useAuth()
    return (
        <>
            <div className='container'>
                {auth.user.role === 'user' ? <UserSidebar /> : <AdminSidebar />}
                <div className='main-container'>
                    <div className='header'>Header</div>
                    <div className='main'>
                        <Breadcrumb />
                        {children}
                        <Toaster />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default MainLayout