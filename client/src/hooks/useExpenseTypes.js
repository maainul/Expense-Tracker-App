import { useEffect, useState } from "react";
import axios from "axios";
import { R_EX_TYP_URL } from "api/expenseType";

export const useAllExpenseTypes = () => {
    const [expenseTypeList, setExpenseTypeList] = useState([]);

    const getExpTyps = async () => {
        try {
            const response = await axios.get(R_EX_TYP_URL);
            setExpenseTypeList(response.data.data || []);
        } catch (error) {
            console.log("Error While Getting Expense Types: ", error);
        }
    };

    useEffect(() => {
        getExpTyps();
    }, []);

    return { expenseTypeList, getExpTyps };
};
