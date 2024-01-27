import React from 'react'
import profileImage from 'img/1v.png'

const SearchBar = () => {
    return (
        <div className='hbf-navbar-container'>
            <div>SearchBar</div>
            <div className='navbar-layout'>
                <i className="bx bx-globe bx-sm"></i>
                <i className="bx bx-grid-alt bx-sm"></i>
                <i className="bx bx-sm bx-sun" aria-describedby="tooltip911009"></i>
                <i className="bx bx-bell bx-sm"></i>
                <img src={profileImage} alt="Profile" className='avatar' />
            </div>
        </div>
    )
}

export default SearchBar