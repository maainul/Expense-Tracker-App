import React from 'react';

const DashboardCard = ({ numberColor, cardColor, icon, iconColor }) => {
    return (
        <div className={`dashboardCard ${cardColor}`}>
            <div className='cardLeftPart'>
                <span className={`dashboardNumber ${numberColor}`}>21459</span>
                <div className='dashboardHeading'>Total Users</div>
            </div>
            <div className='cardRightPart'>
                <i className={`${icon} dashboardIcon ${iconColor}`}></i>
            </div>
        </div>
    );
};

export default DashboardCard;
