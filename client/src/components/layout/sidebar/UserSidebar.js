import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from 'context/authContext';
import toast from 'react-hot-toast';

const UserSidebar = () => {
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
        <div >
            <div className='sidebar-icon-link'>
                <NavLink to={'/dashboard/user/expense'} className='navlink' >
                    <i className='menu-icon tf-icons bx bx-store'></i>
                    <span>Expense</span>
                </NavLink>
            </div>
            <div className='sidebar-icon-link'>
                <NavLink to={'/dashboard/user/analytics'} className='navlink'>
                    <i className="menu-icon tf-icons bx bx-chart"></i>
                    <span>
                        Analytics
                    </span>
                </NavLink>
            </div>

            <div className='sidebar-icon-link'>
                <NavLink to={'/dashboard/user/expense-type'} className='navlink'>
                    <i className="menu-icon tf-icons bx bx-user"></i>
                    <span>
                        Expense-Type
                    </span>
                </NavLink>
            </div>

            <div className='sidebar-icon-link'>
                <NavLink to={'/dashboard/user/profile'} className='navlink'>
                    <i className="menu-icon tf-icons bx bx-user"></i>
                    <span>
                        Profile
                    </span>
                </NavLink>
            </div>


            <div className='sidebar-icon-link'>
                <NavLink to={"/signin"} className='navlink' onClick={handleLogout}>
                    <i className='menu-icon bx bx-log-out'></i>
                    <span>
                        Logout
                    </span>
                </NavLink>
            </div>
        </div>
    )
}

export default UserSidebar
