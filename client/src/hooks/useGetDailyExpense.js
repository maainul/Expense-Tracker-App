
import { useEffect, useState } from "react";

import { DAILY_EXP_URL } from "API";


export const useGetDailyExpense = () => {
    const [dailyExpenseList, setdailyExpenseList] = useState([])

    // Daily Expense
    const getDailyExpense = async () => {
        try {
            const getExp = await DAILY_EXP_URL
            setdailyExpenseList(getExp.data.data)
        } catch (error) {
            console.log(`Error While Get Daily Expense`)
        }
    }

    useEffect(() => {
        getDailyExpense();
    }, [])

    return dailyExpenseList
}
