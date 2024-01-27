import React from 'react'
import 'boxicons/css/boxicons.min.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'context/authContext';
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

        <div className='menu'>
            <div className='sidebar-icon-link'>
                <NavLink to={'/dashboard/admin/user-list'} className='navlink' >
                    <i class="menu-icon tf-icons bx bx-chart"></i>
                    <span>User List</span>
                </NavLink>
            </div>

            <div className='sidebar-icon-link'>
                <NavLink to={"/signin"} className='navlink' onClick={handleLogout}>
                    <i class='menu-icon bx bx-log-out'></i>
                    <span>
                        Logout
                    </span>
                </NavLink>
            </div>
        </div>
    )
}

export default AdminSidebar
