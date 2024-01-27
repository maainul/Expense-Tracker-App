import React, { useEffect, useState } from 'react'
import MainLayout from 'components/layout/MainLayout/MainLayout'
import axios from 'axios'
import { toast } from 'react-hot-toast';
import { useAllExpenseTypes } from 'hooks/useExpenseTypes';
import { C_EXP_URL, R_EXP_ALL_URL } from "api/expense";
import ButtonPrimary from 'components/buttons/ButtonPrimary';
import { useAuth } from 'context/authContext';
import { DDMMYY } from 'utils/dateUtils';
import Input from "components/Input/Input";
import TextArea from 'components/textArea/TextArea';
import Submit from 'components/buttons/Submit';
import Select from 'components/Input/Select';


const Expense = () => {
    const [auth] = useAuth()
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [expenseType, setExpenseType] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false);
    const [frequency, setFrequency] = useState('7');
    const [firstDate, setfirstDate] = useState()
    const [secondDate, setsecondDate] = useState()

    // Expenses and Expense Types
    const [categoryFilter, setcategoryFilter] = useState('all')
    const { expenseTypeList } = useAllExpenseTypes([])
    const [expenseList, setExpenseList] = useState([]);
    const [errors, setErrors] = useState([])
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

    // Submit Form Data
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            const response = await axios.post(C_EXP_URL, {
                amount,
                date,
                description,
                category,
                expenseType,
                userid: auth.user._id,
            })

            if (response.data.errors) {
                setErrors(response.data.errors)
                toast.error(response.data.message)
            } else {
                toast.success(response.data && response.data.message)
                console.log(`Expense List Added Successfully`)
                setExpenseList([...expenseList, response.data.data])
                setAmount('')
                setCategory('')
                setDate('')
                setDescription('')
                setExpenseType('')
                setErrors([])
            }
        } catch (error) {
            console.error(`Invalid Expense : ${error}`)
            toast.error('Failed to submit expense.');
        } finally {
            setLoading(false)
        }
    }

    return (
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
                        <ButtonPrimary clsName={"bx bx-plus me-sm-1"} title={"Add Exp"} />
                    </div>
                </div>
                <div className='formContainer'>
                    <form onSubmit={handleSubmit}>
                            <Input
                                type='number'
                                fieldName='amount'
                                placeholder='Enter amount'
                                state={amount}
                                setState={setAmount}
                                errorState={errors}
                                label={true}
                                labelTitle={"AMOUNT"}
                            />
                        <Input
                                type='date'
                                fieldName='date'
                                placeholder='Enter date'
                                state={date}
                                setState={setDate}
                                errorState={errors}
                                label={true}
                                labelTitle={"Date"}
                        />
                        <Select
                         state={category}
                         setState={setCategory}
                         label={true}
                         errorState={errors}
                         labelTitle={"CATEGORY"}
                        />
                        <Select
                         state={expenseType}
                         setState={setExpenseType}
                         label={true}
                         errorState={errors}
                         labelTitle={"EXPENSE TYPE"}
                        />
                        {/* <div>
                            <label htmlFor="expenseType">Expense Type:</label><br />
                            <select id="expenseType" value={expenseType} onChange={handleChange}>
                                <option value="">-----</option>
                                {expenseTypeList.map((exp) => (
                                    <option key={exp.id} value={exp._id}>{exp.name}</option>
                                ))}
                            </select><br />
                            {errors.map((error) => error.field === 'expenseType' && <div key={error.field} style={{ color: 'red' }} >{error.error}</div>)}
                        </div> */}
                        <TextArea
                         type='date'
                         fieldName='date'
                         placeholder='Enter date'
                         state={description}
                         setState={setDescription}
                         errorState={errors}
                         label={true}
                         labelTitle={"DESCRIPTION"}
                         />
                       <Submit title={"Submit"}  value={loading ? 'Submitting...' : 'Submit'} disabled={loading} />
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}
export default Expense
