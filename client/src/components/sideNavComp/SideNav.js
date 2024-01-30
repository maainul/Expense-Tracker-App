import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNav = ({ to, icon, name }) => {
    return (
        < div className='sidebar-icon-link' >
            <NavLink to={to} className='navlink' >
                <i className={icon}></i>
                <span>{name}</span>
            </NavLink>
        </div>
    )
}

export default SideNav
