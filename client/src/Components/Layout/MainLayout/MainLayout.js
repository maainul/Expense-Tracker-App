import React from 'react'

import { Toaster } from 'react-hot-toast';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
    return (
        <>
            <div className='container'>
                <Sidebar />
                <div className='main-container'>
                    <div className='header'>Header</div>
                    <div className='main-container'>
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