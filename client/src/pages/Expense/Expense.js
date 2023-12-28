import React, { useEffect, useState } from 'react'
import MainLayout from '../../Components/Layout/MainLayout/MainLayout'
import axios from 'axios'
import API from './../../Services/API';
import '../../Components/Table/Table.css'

const Expense = () => {
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [expenseType, setExpenseType] = useState('')
    const [description, setDescription] = useState('')
    const [expenseList, setExpenseList] = useState([])
    const [expenseTypeList, setExpenseTypeList] = useState([])
    const [errors, setErrors] = useState([])

    // Handle Form Change
    const handleChange = (e) => {
        const { id, value } = e.target
        const parsedValue = id === 'amount' ? parseFloat(value) : value

        //update stated based on the field id
        switch (id) {
            case 'amount':
                setAmount(parsedValue);
                break;
            case 'date':
                setDate(parsedValue);
                break;
            case 'category':
                setCategory(parsedValue);
                break;
            case 'expenseType':
                setExpenseType(parsedValue);
                break;
            case 'description':
                setDescription(parsedValue);
                break;
            default:
                break;
        }
    }

    // List of All expense
    useEffect(() => {
        const getAllExpenses = async () => {
            try {
                const res = await axios.post(API.R_EXP_ALL_URL)
                setExpenseList(res.data.data)
            } catch (error) {
                console.log(`Fetch expense data failed : ${error}`)
            }
        }
        getAllExpenses()
    }, [])

    // List of All expense Types
    useEffect(() => {
        const fetchExpenseTypes = async () => {
            try {
                const response = await axios.post(API.R_EX_TYP_URL)
                setExpenseTypeList(response.data.data)
            } catch (error) {
                console.log(`Error fetching expense types : ${error}`)
            }
        }
        fetchExpenseTypes();
    }, [])

    // Submit Form Data
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(API.C_EXP_URL, {
                amount,
                date,
                description,
                category,
                expenseType
            })

            if (response.data.errors) {
                setErrors(response.data.errors)
            } else {
                setErrors([])
                // Fetch the complete expense type details separatley
                const exTres = await axios.get('http://localhost:8081/api/v1/expense-type/read/', { params: { id: response.data.data.expenseType } });
                setExpenseList([...expenseList, { ...response.data.data, expenseType: exTres.data.data }])
                console.log(`Register Successfully.....`)
                // set State to 0
                setAmount('')
                setDate('')
                setCategory('')
                setExpenseType('')
                setDescription('')
            }
        } catch (error) {
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenseList.map((exl) => (
                            <tr key={exl.id}>
                                <td>{exl.amount}</td>
                                <td>{exl.date}</td>
                                <td>{exl.category}</td>
                                <td>{exl.expenseType.name}</td>
                                <td>{exl.expenseType.icon}</td>
                                <td>{exl.description}</td>
                                <td>
                                    <button value={exl.id}>Edit</button>
                                    <button value={exl.id}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="amount">Amount:</label><br />
                        <input
                            type="number"
                            id="amount"
                            step="0.01"
                            value={amount}
                            placeholder="Enter Amount"
                            onChange={handleChange}
                        /><br />
                        {errors.map((error) => error.field === 'amount' && <div key={error.field} style={{ color: 'red' }}>{error.error}</div>)}
                    </div>
                    <div>
                        <label htmlFor="date">Date:</label><br />
                        <input
                            type="date"
                            id="date"
                            value={date}
                            placeholder="Enter Date"
                            onChange={handleChange}
                        /><br />
                        {errors.map((error) => error.field === 'date' && <div key={error.field} style={{ color: 'red' }} >{error.error}</div>)}
                    </div>
                    <div>
                        <label htmlFor="category">Category</label><br />
                        <select id="category" value={category} onChange={handleChange}>
                            <option value="">-----</option>
                            <option value="debit">Expense</option>
                            <option value="credit">Income</option>
                        </select><br />
                        {errors.map((error) => error.field === 'category' && <div key={error.field} style={{ color: 'red' }} >{error.error}</div>)}
                    </div>
                    <div>
                        <label htmlFor="expenseType">Expense Type:</label><br />
                        <select id="expenseType" value={expenseType} onChange={handleChange}>
                            <option value="">-----</option>
                            {expenseTypeList.map((exp) => (
                                <option key={exp.id} value={exp._id}>{exp.name}</option>
                            ))}
                        </select><br />
                        {errors.map((error) => error.field === 'expenseType' && <div key={error.field} style={{ color: 'red' }} >{error.error}</div>)}
                    </div>
                    <div>
                        <label htmlFor="description">Description</label><br />
                        <textarea
                            rows="10"
                            cols="30"
                            id="description"
                            value={description}
                            onChange={handleChange}
                            placeholder='Enter Description ( if needed )'
                        /><br /><br />
                    </div>
                    <input type="submit" defaultValue="Submit" />
                </form>
            </div>
        </MainLayout>
    )
}
export default Expense