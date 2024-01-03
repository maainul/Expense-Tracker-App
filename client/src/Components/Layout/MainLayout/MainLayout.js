import React from 'react'
import './MainLayout.css'
import { Toaster } from 'react-hot-toast';

const MainLayout = ({ children }) => {
    return (
        <div className='container'>
            <Toaster />
            {children}
        </div>
    )
}

export default MainLayout