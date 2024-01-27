import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>

            <div className='hbf-header-container'>
                <div className='app-header-search-bar'>
                </div>
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

            </div>

        </>
    )
}

export default Header