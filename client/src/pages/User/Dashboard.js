import React from 'react'
import MainLayout from './../../Components/Layout/MainLayout/MainLayout';
import { useAuth } from '../../context/authContext';

const Home = () => {
    const [auth] = useAuth()
    console.log(auth)
    return (
        <MainLayout>
            <h1>Dashboard</h1>
        </MainLayout >
    )
}

export default Home