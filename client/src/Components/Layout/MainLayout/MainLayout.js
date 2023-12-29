import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './MainLayout.css'
import Sidebar from './../Sidebar/Sidebar';

const MainLayout = ({ children }) => {
    return (
        <>
            <div className='container'>
                {children}
            </div>
        </>
    )
}

export default MainLayout