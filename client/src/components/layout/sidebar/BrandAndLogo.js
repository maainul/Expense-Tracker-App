import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from 'context/authContext'
import BrandTitle from 'components/brandTitle/BrandTitle';
import BrandLogo from 'components/logos/brandLogo/BrandLogo';

const BrandAndLogo = () => {

    const [auth] = useAuth()

    return (
        <NavLink to={`/dashboard/${auth?.user?.role === 'admin' ? 'admin' : 'user'}`} className='navlink' >
            <div className='brand-and-logo' >
                <BrandLogo />
                <BrandTitle />
            </div>
        </NavLink>
    )
}

export default BrandAndLogo


