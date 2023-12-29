import axios from "axios";
import { useEffect, useState } from "react";
import API from './../Services/API';


export const useTop10Expenses = () => {
    const [top10ExpList, setTop10ExpList] = useState([])

    // Top 10 Expense
    const getTo10Expense = async () => {
        try {
            const getExp = await axios.get(API.TOP_10_EXP_URL)
            setTop10ExpList(getExp.data.data)
        } catch (error) {
            console.log(`Error While Get Top 10 Expense`)
        }
    }

    useEffect(() => {
        getTo10Expense();
    }, [])

    return top10ExpList
}