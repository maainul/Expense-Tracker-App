import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from 'context/authContext';
import toast from 'react-hot-toast';
import { UserMenu } from './UserMenu';
import SideNav from 'components/sideNavComp/SideNav';

const UserSidebar = () => {
    const [auth, setAuth] = useAuth();
    const location = useLocation()
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
            {UserMenu.map((menu) => {
                const isActive = location.pathname === menu.path
                return (
                    <div className={`menu-item ${isActive && 'active'}`} >
                        < div className={`sidebar-icon-link ${isActive && 'active'}`}>
                            <SideNav to={menu.path} icon={menu.icon} name={menu.name} />
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default UserSidebar
