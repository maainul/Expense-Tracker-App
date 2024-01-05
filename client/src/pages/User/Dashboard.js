import React from 'react'
import MainLayout from '../../Components/Layout/MainLayout/MainLayout'
// import { useAuth, useUserDetails } from '../../context/auth'

const Dashboard = () => {
    // const { getUserDetails } = useUserDetails();
    // const userDetails = getUserDetails();

    return (
        <MainLayout>
            <h1>Hi There,</h1>
            {/* <h2>{JSON.stringify(userDetails, null, 4)}</h2> */}
        </MainLayout>
    )
}

export default Dashboard