import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './MainLayout.css'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='body'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default MainLayout