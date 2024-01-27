import { useEffect, useState } from "react";

import { CUR_YEAR_EXP_URL } from "API";


export const useCurYearExp = () => {
    const [curYearExpList, setcurYearExpList] = useState([])
    const [curYearTotal, setCurYearTotal] = useState()
    const [numberOfTransaction, setNumberOfTransaction] = useState()
    // Current Year Expense
    const curYearExp = async () => {
        try {
            const getExp = await CUR_YEAR_EXP_URL
            setcurYearExpList(getExp.data.data[0].expenses)
            setCurYearTotal(getExp.data.data[0].totalAmount)
            setNumberOfTransaction(getExp.data.data[0].count)
        } catch (error) {
            console.log(`Error While Get This Year Expense`)
        }
    }

    useEffect(() => {
        curYearExp();
    }, [])

    return { curYearExpList, curYearTotal, numberOfTransaction }
}
