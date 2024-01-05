import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation(); // Corrected: useLocation()
    let currentLink = '';
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`; // Corrected: += instead of +
            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            );
        });
    return (
        <div className='breadcrumb'>
            {crumbs}
        </div>
    );
};

export default Breadcrumb;
