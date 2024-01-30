// React Imports
import React, { useState } from 'react'

// External Library Imports:
import axios from 'axios'
import { toast } from 'react-hot-toast';

// Component-related imports
import Input from 'components/Input/Input'
import Submit from 'components/buttons/Submit'

// Context and Hooks:
import { useAuth } from 'context/authContext'

// API-related Imports
import { C_Exp_TYP_URL } from "api/expenseType";
import { closeModalForm } from 'utils/modalForm';

const ExpenseTypeForm = ({getExpTyps}) => {
    const [auth] = useAuth()
    const [name, setName] = useState('')
    const [icon, setIcon] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null);

    // Submit Form Data
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post(C_Exp_TYP_URL, {
                name,
                icon,
                userid: auth.user._id,
            })             
            if (response.data.errors) {
                setErrors(response.data.errors)
                toast.error(response.data.message)
            } else {
                toast.success(response.data && response.data.message)
                console.log(`Expense Type Added Successfully`)
                setName('')
                setIcon('')
                setErrors([])
                // Call getExpenseTypes to update the list after adding a new expense type
                getExpTyps()
            }
        } catch (error) {
            console.error(`Invalid Expense Type : ${error}`)
            toast.error('Failed to submit expense type.');
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className='overlay' onClick={closeModalForm}></div>
            <div className='modal-form'>
                <span onClick={closeModalForm}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <Input
                        type='text'
                        fieldName='name'
                        placeholder='Enter name'
                        state={name}
                        setState={setName}
                        errorState={errors}
                        label={true}
                        labelTitle={"NAME"}
                    />
                    <Input
                        type='text'
                        fieldName='icon'
                        placeholder='Enter icon'
                        state={icon}
                        setState={setIcon}
                        errorState={errors}
                        label={true}
                        labelTitle={"ICON"}
                    />
                    <Submit title={"Submit"} value={loading ? 'Submitting...' : 'Submit'} disabled={loading} />
                </form>
            </div>
        </>
    )
}

export default ExpenseTypeForm

