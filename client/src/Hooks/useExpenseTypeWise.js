


import axios from "axios";
import { useEffect, useState } from "react";
import API from '../Services/API';


export const useExpenseTypeWise = () => {

    const [expTypeWiseList, setExpTypeWiseList] = useState([])

    // Expense Type Year
    const expenseTypeWise = async () => {
        try {
            const getExp = await axios.get(API.EXP_TYP_WISE_URL)
            setExpTypeWiseList(getExp.data.data)
        } catch (error) {
            console.log(`Error While Get This Year Expense`)
        }
    }

    useEffect(() => {
        expenseTypeWise();
    }, [])

    return { expTypeWiseList }
}
