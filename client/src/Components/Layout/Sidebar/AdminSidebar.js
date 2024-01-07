import React from 'react'
import 'boxicons/css/boxicons.min.css';
import { NavLink } from 'react-router-dom';
import BrandLogo from '../../Logos/BrandLogo/BrandLogo';
import BrandTitle from '../../BrandTitle/BrandTitle';
import { useAuth } from '../../../context/authContext';
import toast from 'react-hot-toast';


const AdminSidebar = () => {
    const [auth, setAuth] = useAuth();

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: '',
        })
        localStorage.removeItem('auth')
        toast.success("Logout Successfully")
    }

    return (
        <div className='sidebar'>
            <div className="brand-logo-text sidebarlogo">
                <NavLink to={'/dashboard/admin'}>
                    <BrandLogo />
                </NavLink>
                <NavLink to={'/dashboard/admin'} style={{ textDecoration: 'none' }} >
                    <BrandTitle />
                </NavLink>
            </div>
            <div className='menu'>
                <div className='menuItem'>
                    <i className='menu-icon tf-icons bx bx-home-circle'></i>
                    <NavLink
                        to={'/dashboard/admin'}
                        className='menu-NavLink'
                    >
                        Dashboard
                    </NavLink>
                </div>

                <div className='menuItem'>
                    <i class="menu-icon tf-icons bx bx-chart"></i>
                    <NavLink to={'/dashboard/admin/user-list'} className='menu-NavLink'>User List</NavLink>
                </div>

                <div className='menuItem'>
                    <i class="menu-icon tf-icons bx bx-user"></i>
                    <NavLink onClick={handleLogout} to={"/signin"} className='menu-NavLink'>Logout</NavLink>
                </div>
                <div className='menu-last '>
                    <div className='menuItem'>
                        <i class="menu-icon tf-icons bx bx-support"></i>
                        <NavLink to={'/dashboard/analytics'} className='menu-NavLink'>Supports</NavLink>
                        <span></span>
                    </div>
                    <div className='menuItem'>
                        <i class="menu-icon tf-icons bx bx-support"></i>
                        <NavLink to={'/dashboard/analytics'} className='menu-NavLink'>Documentation</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar
