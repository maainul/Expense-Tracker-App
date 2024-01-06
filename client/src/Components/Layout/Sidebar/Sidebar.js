import React from 'react'

import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';
import BrandLogo from '../../Logos/BrandLogo/BrandLogo';
import BrandTitle from '../../BrandTitle/BrandTitle';

const Sidebar = () => {

    return (
        <div className='sidebar'>
            <div className="brand-logo-text sidebarlogo">
                <Link to={'/dashboard'}>
                    <BrandLogo />
                </Link>
                <Link to={'/dashboard'} style={{ textDecoration: 'none' }} >
                    <BrandTitle />
                </Link>
            </div>
            <div className='menu'>
                <div className='menuItem'>
                    <i className='menu-icon tf-icons bx bx-home-circle'></i>
                    <Link to={'/dashboard'} className='menu-link'>Home</Link>
                </div>

                <div className='menuItem'>
                    <i className='menu-icon tf-icons bx bx-store'></i>
                    <Link to={'/dashboard/expense'} className='menu-link'>Expense</Link>
                </div>
                <div className='menuItem'>
                    <i class="menu-icon tf-icons bx bx-chart"></i>
                    <Link to={'/dashboard/analytics'} className='menu-link'>Analytics</Link>
                </div>
                <div className='menuItem'>
                    <i class="menu-icon tf-icons bx bx-user"></i>
                    <Link to={'/dashboard/profile'} className='menu-link'>Profile</Link>
                </div>
                {/* <Link to={'/about'}>About</Link> */}
                {/* <Link to={'/user-list'}>Accounts</Link> */}
                <div className='menu-last '>
                    <div className='menuItem'>
                        <i class="menu-icon tf-icons bx bx-support"></i>
                        <Link to={'/dashboard/analytics'} className='menu-link'>Supports</Link>
                        <span></span>
                    </div>
                    <div className='menuItem'>
                        <i class="menu-icon tf-icons bx bx-support"></i>
                        <Link to={'/dashboard/analytics'} className='menu-link'>Documentation</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
