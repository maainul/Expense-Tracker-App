import '../ExpeseTypes/ExpenseTypes.css'
import MainLayout from '../../Components/Layout/MainLayout/MainLayout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import API from './../../Services/API';

const ExpenseTypes = () => {
    const [name, setName] = useState('')
    const [icon, setIcon] = useState('')
    const [expenseTypeList, setExpenseTypeList] = useState([])
    const [errors, setErrors] = useState([])

    // List of Expense Type List
    useEffect(() => {
        const fetchExpenseType = async () => {
            try {
                const res = await axios.post(API.R_EX_TYP_URL)
                setExpenseTypeList(res.data.data)
            } catch (error) {
                console.log(`Fetch expense Data Failed : ${error}`);
            }
        }
        fetchExpenseType()
    }, [])

    const handleChange = (e) => {
        const { id, value } = e.target
        switch (id) {
            case 'name':
                setName(value)
                break;
            case 'icon':
                setIcon(value)
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(API.C_Exp_TYP_URL, {
                name,
                icon
            })
            if (res.data.errors) {
                setErrors(res.data.errors)
            } else {
                setErrors([])
                console.log(`Expense Types added successfull`)
                // setExpenseTypeList(res.data.data)
                setExpenseTypeList([...expenseTypeList, res.data.data]);
                setName('')
                setIcon('')
            }
        } catch (error) {
            console.log(`Invalid Expense Types : ${error}`)
        }
    }

    return (
        <MainLayout>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>Name</th>
                        </tr>
                    </thead>

                    <tbody>
                        {expenseTypeList.map((expl) => (
                            <tr>
                                <td>{expl.icon}</td>
                                <td>{expl.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input
                            type='text'
                            id='name'
                            placeholder='Enter Expense Type Name'
                            value={name}
                            onChange={handleChange}
                        /><br />
                        {errors.map((error) => error.field === 'name' && <div key={error.field} style={{ color: 'red' }} >{error.error}</div>)}
                    </div>
                    <div>
                        <label>Icon</label>
                        <input
                            type='text'
                            id='icon'
                            placeholder='Enter Icon'
                            value={icon}
                            onChange={handleChange}
                        /><br />
                        {errors.map((error) => error.field === 'icon' && <div key={error.field} style={{ color: 'red' }} >{error.error}</div>)}
                    </div>
                    <button type='submit' >Submit</button>
                </form>
            </div>
        </MainLayout>
    )
}

export default ExpenseTypes