import axios from "axios";

import { useEffect,useState } from "react";
import { R_EX_TYP_URL } from "api/expenseType";


export const useAllExpenseTypes = () =>{
    const [expenseTypeList,setExpenseTypeList] = useState([])

    const getExpenseTypes = async () =>{
        try {
            const expTypList = await axios.get(R_EX_TYP_URL)
            console.log(expTypList.data.data)
            setExpenseTypeList(expTypList.data.data)
        } catch (error) {
            console.log('Expense Types List Not Found')
        }
    }
    useEffect(()=>{
        getExpenseTypes()
    },[])
    return {expenseTypeList}
}