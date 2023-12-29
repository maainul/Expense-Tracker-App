import React, { useState } from 'react'
import './Sidebar.css'
import 'boxicons/css/boxicons.min.css';
import { SidebarData } from './../../Data/Data';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    const [selected, setSelected] = useState(0)
    return (
        <div className='Sidebar'>
            <div className='logo'>
                <span>Home</span>
                <span>Sneat</span>
            </div>
            <div className='menu'>
                <Link to={'/'}>Home</Link>
                <Link to={'/expense'}>Expense</Link>
                <Link to={'/expense-type'}>Expense Type</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/analytics'}>Analytics</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/registration'}>Registration</Link>
                <Link to={'/about'}>About</Link>
                <div className='menu-last '>
                    <div className='menuItem'>
                        <i class="menu-icon tf-icons bx bx-support"></i>
                        <span>Supports</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
