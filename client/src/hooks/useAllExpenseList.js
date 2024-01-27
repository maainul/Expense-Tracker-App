import axios from "axios"
import { useEffect, useState } from "react"
import { R_EXP_ALL_URL } from "api/expense"


export const useAllExpenseList = () => {
    const [expenseList, setExpenseList] = useState([])
    const [error, setError] = useState(null);

    const getExpenses = async () => {
        try {
            const user = JSON.parse(localStorage.getItem("user"));
            console.log("User Info From Get Expenses : ", user)
            const expList = await axios.post(R_EXP_ALL_URL)
            // const expList = await axios.get(R_EXP_ALL_URL)
            setExpenseList(expList.data.data)
            setError(null);
        } catch (error) {
            console.error('Expense List Not Found')
            setError('Expense List Not Found');
        }
    }
    useEffect(() => {
        getExpenses()
    }, [])

    return { expenseList, setExpenseList, error }
}