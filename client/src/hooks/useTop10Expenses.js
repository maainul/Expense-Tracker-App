
import { useEffect, useState } from "react";
import { TOP_10_EXP_URL } from "API";



export const useTop10Expenses = () => {

    const [top10ExpList, setTop10ExpList] = useState([])
    const [debitCount, setDebitCount] = useState()
    const [creditCount, setCreditCount] = useState()
    const [debitTotalAmount, setDebitTotalAmount] = useState()
    const [creditTotalAmount, setCreditTotalAmount] = useState()

    // Top 10 Expense
    const getTo10Expense = async () => {
        try {
            const getExp = await TOP_10_EXP_URL
            setTop10ExpList(getExp.data.data)
            setDebitCount(getExp.data.data[0].count)
            setCreditCount(getExp.data.data[1].count)
            setDebitTotalAmount(getExp.data.data[0].totalAmount)
            setCreditTotalAmount(getExp.data.data[1].totalAmount)
        } catch (error) {
            console.log(`Error While Get Top 10 Expense`)
        }
    }

    useEffect(() => {
        getTo10Expense();
    }, [])

    return { top10ExpList, debitCount, creditCount, debitTotalAmount, creditTotalAmount }
}