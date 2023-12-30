
import axios from "axios";
import { useEffect, useState } from "react";
import API from '../Services/API';


export const useCatWiseExp = () => {
    const [catWiseExpList, setCatWiseExpList] = useState([])
    const [creditExpTotal, setCreditExpTotal] = useState()
    const [debitExpTotal, setDebitExpTotal] = useState()
    const [numberOfCredit, setNumberOfCredit] = useState()
    const [numberOfDebit, setNumberOfDebit] = useState()

    // Category Wise Expense
    const catWiseExp = async () => {
        try {
            const getExp = await axios.get(API.CAT_WISE_EXP_URL)
            setCatWiseExpList(getExp.data.data)
            setDebitExpTotal(getExp.data.data[0].totalAmount)
            setCreditExpTotal(getExp.data.data[1].totalAmount)
            setNumberOfCredit(getExp.data.data[0].count)
            setNumberOfDebit(getExp.data.data[1].count)
        } catch (error) {
            console.log(`Error While Get This Year Expense`)
        }
    }

    useEffect(() => {
        catWiseExp();
    }, [])

    return {
        catWiseExpList,
        creditExpTotal,
        debitExpTotal,
        numberOfCredit,
        numberOfDebit
    }
}
