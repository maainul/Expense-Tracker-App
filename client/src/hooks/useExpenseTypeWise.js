import { useEffect, useState } from "react";
import { EXP_TYP_WISE_URL } from "API";


export const useExpenseTypeWise = () => {

    const [expTypeWiseList, setExpTypeWiseList] = useState([])

    // Expense Type Year
    const expenseTypeWise = async () => {
        try {
            const getExp = await EXP_TYP_WISE_URL
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
