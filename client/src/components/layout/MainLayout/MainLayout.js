// MainLayout.jsx

import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useAuth } from 'context/authContext';
import UserSidebar from 'components/layout/sidebar/UserSidebar';
import SearchBar from 'components/layout/searchBar/SearchBar';
import Footer from 'components/layout/footer/Footer';
import AdminSidebar from 'components/layout/sidebar/AdminSidebar';
import BrandAndLogo from 'components/layout/sidebar/BrandAndLogo';

const MainLayout = ({ children }) => {
    const [auth] = useAuth();

    return (
        <>
            <div className='app'>
                <div className='app-glass-container'>
                    <div className='app-wrapper-container'>
                        {/* Sidebar Design */}
                        <div className='app-sidebar-container'>
                            {/* Brand And Logo */}
                            <BrandAndLogo />
                            {/* Sidebar Menu */}
                            <div className='sidebar-menu'>
                                {auth.user.role === 'admin' ? (<AdminSidebar />) : (<UserSidebar />)}
                            </div>
                        </div>

                        <div className='app-hbf-container'>
                            {/******************************* Header or Top Navbar ********************************* */}
                            <SearchBar />
                            <div className='hbf-body-container'>
                                <div>
                                    {children}
                                </div>
                            </div>
                            {/* Footer */}
                            <Footer />
                        </div>

                    </div>
                </div>
            </div>
            <Toaster />
        </>
    );
};

export default MainLayout;
