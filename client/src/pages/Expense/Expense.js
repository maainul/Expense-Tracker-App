import React, { useEffect, useState } from 'react'
import MainLayout from '../../Components/Layout/MainLayout/MainLayout'
import axios from 'axios'
import API from './../../Services/API';
import '../../Components/Table/Table.css'

const Expense = () => {

    const [loading, setLoading] = useState(false)
    const [expense, setExpense] = useState({})
    const [expenseTypes, setExpenseTypes] = useState([]);
    const [expenseList, setExpenseList] = useState([])


    useEffect(() => {
        const getAllExpenses = async () => {
            try {
                setLoading(true)
                const res = await axios.post(API.R_EXP_ALL_URL)
                console.log("########################################")
                console.log(res.data.data)
                console.log("########################################")
                setExpenseList(res.data.data)
                setLoading(false)
            } catch (error) {
                console.log(`Fetch expense data failed : ${error}`)
            }
        }
        getAllExpenses()
    }, [])


    useEffect(() => {
        const fetchExpenseTypes = async () => {
            try {
                const response = await axios.post(API.R_EX_TYP_URL)
                setExpenseTypes(response.data.data)
            } catch (error) {
                console.log(`Error fetching expense types : ${error}`)
            }
        }
        fetchExpenseTypes();
    }, [])

    const handleChange = (e) => {
        const { id, value } = e.target
        const parsedValue = id === 'amount' ? parseFloat(value) : value
        console.log(id + " -----" + value)
        setExpense({ ...expense, [id]: parsedValue })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const { response } = await axios.post(API.C_EXP_URL, { ...expense })
            console.log(`Response Data : ${response}`)
            console.log(`Register Successfully.....`)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(`Invalid Transaction : ${error}`)
        }
    }

    return (
        <MainLayout>
            <div>
                <h2>Expense Data</h2>
            </div>
            <div>
                <table className='table-design'>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Expense Name</th>
                            <th>Icons</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenseList.map((exl) => (
                            <tr>
                                <td>{exl.amount}</td>
                                <td>{exl.date}</td>
                                <td>{exl.category}</td>
                                <td>{exl.expenseType.name}</td>
                                <td>{exl.expenseType.icon}</td>
                                <td>{exl.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="amount">Amount:</label><br />
                    <input
                        type="number"
                        id="amount"
                        placeholder="Enter Amount"
                        onChange={handleChange}
                    /><br />
                    <label htmlFor="date">Date:</label><br />
                    <input
                        type="date"
                        id="date"
                        placeholder="Enter Date"
                        onChange={handleChange}
                    /><br />
                    <label htmlFor="description">Description</label><br />
                    <textarea name="description" rows="10" cols="30"></textarea><br />
                    <label htmlFor="category">Category</label><br />
                    <select id="category" onChange={handleChange}>
                        <option value="">-----</option>
                        <option value="debit">Expense</option>
                        <option value="credit">Income</option>
                    </select><br />

                    <label htmlFor="expenseType">Expense Type:</label><br />
                    <select id="expenseType" name="expenseType" onChange={handleChange}>
                        <option value="">-----</option>
                        {expenseTypes.map((exp) => (
                            <option key={exp.id} value={exp._id}>{exp.name}</option>
                        ))}
                    </select><br /><br />
                    <input type="submit" defaultValue="Submit" />
                </form>
            </div>
        </MainLayout>
    )
}
export default Expense