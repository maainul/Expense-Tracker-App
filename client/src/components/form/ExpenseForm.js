// React Imports
import React, { useState } from 'react'

// External Library Imports:
import axios from 'axios'
import { toast } from 'react-hot-toast';

// Component-related imports
import Input from 'components/Input/Input'
import Select from 'components/Input/Select'
import Submit from 'components/buttons/Submit'
import TextArea from 'components/textArea/TextArea'

// Context and Hooks:
import { useAuth } from 'context/authContext'
import { useAllExpenseTypes } from 'hooks/useExpenseTypes'

// API-related Imports
import { C_EXP_URL } from "api/expense";

const ExpenseForm = () => {

    const [auth] = useAuth()
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [expenseType, setExpenseType] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false);

    // Expenses and Expense Types
    const { expenseTypeList } = useAllExpenseTypes([])
    const [expenseList, setExpenseList] = useState([]);
    const [errors, setErrors] = useState([])


    console.log("#$$$$$$$$$$ EX $$$$$$$$$$$$$$$$$$$$$$")
    console.log(expenseTypeList)
    console.log("#$$$$$$$$$$ EX $$$$$$$$$$$$$$$$$$$$$$")
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

    function closeModalForm() {
        const overlayElement = document.querySelector('.overlay');
        overlayElement.classList.remove('showoverlay');
        document.querySelector('.modal-form').classList.remove('showmodal-form');
    }


    return (
        <>
            <div className='overlay' onClick={closeModalForm}></div>
            <div className='modal-form'>
                <span onClick={closeModalForm}>&times;</span>
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
                        fieldName='category'
                        setState={setCategory}
                        label={true}
                        errorState={errors}
                        labelTitle={"CATEGORY"}
                    />

                    <Select
                        state={expenseType}
                        setState={setExpenseType}
                        fieldName='expenseType'
                        label={true}
                        errorState={errors}
                        iterableItems={expenseTypeList}
                        labelTitle={"EXPENSE TYPE"}
                    />

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
                    <Submit title={"Submit"} value={loading ? 'Submitting...' : 'Submit'} disabled={loading} />
                </form>
            </div>
        </>
    )
}

export default ExpenseForm


/*

 <div className='formContainer'>
                <form onSubmit={handleSubmit}>

                  

                    {/* <div>
            <label htmlFor="expenseType">Expense Type:</label><br />
            <select id="expenseType" value={expenseType} onChange={handleChange}>
                <option value="">-----</option>
                {expenseTypeList.map((exp) => (
                    <option key={exp.id} value={exp._id}>{exp.name}</option>
                ))}
            </select><br />
            {errors.map((error) => error.field === 'expenseType' && <div key={error.field} style={{ color: 'red' }} >{error.error}</div>)}
        </div> 
        /*
    <Submit title={"Submit"} value={loading ? 'Submitting...' : 'Submit'} disabled={loading} />
</form >
</div >

*/