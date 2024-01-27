import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from 'context/authContext'

const Dashboard = () => {

    const [auth] = useAuth()

    return (
        <div className='menuItem'>
            <i className='menu-icon tf-icons bx bx-home-circle'></i>
            <NavLink
                to={`/dashboard/${auth?.user?.role === 'admin' ? 'admin' : 'user'}`}
                className='menu-NavLink'
            >
                Dashboard
            </NavLink>
        </div>
    )
}

export default Dashboard