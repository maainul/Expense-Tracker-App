import React from 'react'
import './MainLayout.css'
import { Toaster } from 'react-hot-toast';
import Footer from '../Footer/Footer'
const MainLayout = ({ children }) => {
    return (
        <>
            <div className='container'>
                <div className='sidebar'>Sidebar</div>
                <div className='main-container'>
                    <div className='header'>Header</div>
                    <div className='main-container'>Container</div>
                    <div className='footer'>Footer</div>
                </div>
                {/* <Footer />
                <div>
                    <Toaster />
                    {children}
                </div>
                <Footer /> */}
            </div>
        </>
    )
}

export default MainLayout