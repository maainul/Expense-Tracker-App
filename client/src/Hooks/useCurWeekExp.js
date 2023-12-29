import axios from "axios";
import { useEffect, useState } from "react";
import API from './../Services/API';


export const useCurWeekExp = () => {
    const [curWeekExpList, setcurWeekExpList] = useState([])

    // Top 10 Expense
    const currWeekExp = async () => {
        try {
            const weekExpList = await axios.get(API.CUR_WEEK_EXP_URL)
            setcurWeekExpList(weekExpList.data.data)
        } catch (error) {
            console.log(`Error While Get Week Expense`)
        }
    }
    useEffect(() => {
        currWeekExp();
    }, [])

    return curWeekExpList
}