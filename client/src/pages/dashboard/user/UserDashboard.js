import React from 'react'
import { useAuth } from 'context/authContext';
import MainLayout from 'components/layout/MainLayout/MainLayout';
import { useAllExpenseList } from 'hooks/useAllExpenseList';

import DashboardCard from 'components/cards/DashboardCard';


const UserDashboard = () => {
    const [auth] = useAuth()
    const { expList } = useAllExpenseList()
    console.log("#######################################")
    console.log(expList)
    console.log("#######################################")

    return (
        <MainLayout>
            <h3>ID : {auth?.user?._id}</h3>
            <h3>Username : {auth?.user?.username}</h3>
            <h3>Email : {auth?.user?.email}</h3>
            <h3>Mobile Number : {auth?.user?.mobileNumber}</h3>
            <h3>Role : {auth?.user?.role}</h3>
            <div className='expense-cards'>
                {expList !== undefined && expList.map((el) => (
                    <DashboardCard
                        key={el.id}  // Make sure to add a unique key for each element in the list
                        cardColor={'paidUserCard'}
                        numberColor={'paidUserNumber'}
                        icon={'bx bx-user-plus'}
                        iconColor={'paidUserIcon'}
                    />
                ))}
            </div>
        </MainLayout >
    )
}

export default UserDashboard