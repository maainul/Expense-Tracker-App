import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className='topNavBar'>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/registration'}>Registration</Link>
                <Link to={'/expense'}>Expense</Link>
                <Link to={'/expense-type'}>Expense Type</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/analytics'}>Analytics</Link>
            </div>

        </>
    )
}

export default Header