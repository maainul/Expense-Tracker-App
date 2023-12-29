import React from 'react'
import MainLayout from '../../Components/Layout/MainLayout/MainLayout'
import { useTop10Expenses } from '../../Hooks/useTop10Expenses'
const Analytics = () => {
    const top10ExpList = useTop10Expenses()
    return (
        <MainLayout>
            <div>Analytics</div>
        </MainLayout>
    )
}

export default Analytics