// React Imports
import React, { useEffect, useState } from 'react'

// External Library Imports:
import axios from 'axios'

// Component-related imports
import MainLayout from 'components/layout/MainLayout/MainLayout'
import ButtonPrimary from 'components/buttons/ButtonPrimary';
import ExpenseForm from 'components/form/ExpenseForm';

// Context and Hooks:
import { useAuth } from 'context/authContext';
import { useAllExpenseTypes } from 'hooks/useExpenseTypes';

// Utitlites and Constants
import { DDMMYY } from 'utils/dateUtils';

// API-related Imports
import { R_EXP_ALL_URL } from "api/expense";
import { showModalForm } from 'utils/modalForm';


const Expense = () => {
    const [auth] = useAuth()
    const [frequency, setFrequency] = useState('7');
    const [firstDate, setfirstDate] = useState()
    const [secondDate, setsecondDate] = useState()

    // Expenses and Expense Types
    const [categoryFilter, setcategoryFilter] = useState('all')
    const { expenseTypeList } = useAllExpenseTypes([])
    const [expenseList, setExpenseList] = useState([]);
    const [error, setError] = useState(null);
    const [expenseTypeFilter, setExpenseTypeFilter] = useState('all')

    useEffect(() => {
        const getExpenses = async () => {
            try {
                const expList = await axios.post(R_EXP_ALL_URL, {
                    userid: auth.user._id,
                    frequency,
                    firstDate,
                    secondDate,
                    categoryFilter,
                    expenseTypeFilter
                })

                setExpenseList(expList.data.data)
                setError(null);
            } catch (error) {
                console.error('Expense List Not Found')
                setError('Expense List Not Found');
            }
        }
        getExpenses()
    }, [frequency, firstDate, secondDate, categoryFilter, expenseTypeFilter])

    return (
        <>
            <MainLayout>
                <div className='content-container'>
                    <div className='table-container'>
                        <div className='table-top-filters'>
                            <div className='filter-design'>
                                <div className='filter-title'>Select Frequency</div>
                                <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className='form-select'>
                                    <option value="7">Last 1 Week</option>
                                    <option value="30" >Last 1 Month</option>
                                    <option value="365" >Last 1 Year</option>
                                    <option value="custom" >Custom</option>
                                </select>
                                {frequency === 'custom' &&
                                    <div>
                                        <div>
                                            <input
                                                type="date"
                                                id="date1"
                                                value={firstDate}
                                                placeholder="Enter Date"
                                                onChange={(e) => setfirstDate(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="date"
                                                id="date2"
                                                value={secondDate}
                                                placeholder="Enter Date"
                                                onChange={(e) => setsecondDate(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                }
                            </div>
                            <div>
                                <div className='filter-title'>Select Category</div>
                                <select value={categoryFilter} onChange={(e) => setcategoryFilter(e.target.value)} className='form-select'>
                                    <option value="all">all</option>
                                    <option value="credit" >Income</option>
                                    <option value="debit" >Expense</option>
                                </select>
                            </div>

                            <div>
                                <div className='filter-title'>Select Expense Type</div>
                                <select value={expenseTypeFilter} onChange={(e) => setExpenseTypeFilter(e.target.value)} className='form-select'>
                                    <option value="all">all</option>
                                    {expenseTypeList.map((ext) => (
                                        <option value={ext._id} >{ext.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <table className='table-design'>
                            <thead>
                                <tr>
                                    <th>Icons</th>
                                    <th>Expense Type</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expenseList.map((exl) => (
                                    <tr key={exl.id}>
                                        <td>{exl.expenseType.icon}</td>
                                        <td>{exl.expenseType.name}</td>
                                        <td>{exl.amount}</td>
                                        <td>{DDMMYY(exl.date)}</td>
                                        <td>{exl.category}</td>
                                        <td>
                                            <i class="bx bx-dots-vertical-rounded dashboard-icon"></i>
                                            <i class="bx bxs-edit dashboard-icon"></i>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className='add-expense-btn'>
                            <ButtonPrimary
                                clsName={"bx bx-plus me-sm-1"}
                                title={"Add Exp"}
                                onClick={showModalForm}
                            />
                        </div>
                    </div>
                </div>
            </MainLayout>
            <ExpenseForm />
        </>
    )
}
export default Expense
