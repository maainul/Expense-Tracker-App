import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();

    let currentLink = '';
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map((crumb, index, array) => {
            currentLink += `/${crumb}`;
            const isLast = index === array.length - 1;
            return (
                <div key={crumb}>
                    <Link to={currentLink} style={{
                        textDecoration: "none", color: "#566a7f", fontSize: "18px", textTransform: 'capitalize'
                    }}>{crumb}</Link>
                    {!isLast && <span style={{ margin: '0 5px', color: "red" }}>/</span>}
                </div>
            );
        });

    return (
        <div className="breadcrumb">
            {crumbs}
        </div>
    );
}
export default Breadcrumb;
