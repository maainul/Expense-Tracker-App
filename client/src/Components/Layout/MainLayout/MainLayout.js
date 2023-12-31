import React from 'react'
import './MainLayout.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainLayout = ({ children }) => {
    return (
        <div className='container'>
            <ToastContainer />
            {children}
        </div>
    )
}

export default MainLayout