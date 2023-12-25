import React from 'react'
import MainLayout from '../../Components/Layout/MainLayout/MainLayout'
// import useCustomEffect from '../../Helper/CustomHooks/useEffect'
import useForm from '../../Helper/CustomHooks/useForm'

const Expense = () => {

    // Get All Expense Data
    //const { getResponse } = useCustomEffect('http://localhost:8081/api/v1/expense-type/read/all')
    //console.log('......................................')
    // console.log(getResponse)
    // console.log('......................................')

    // Expense Form Submit
    const { formData, handleChange, handleSubmit } = useForm({});
    const onSubmit = (e) => {
        e.preventDefault()
        handleSubmit('http://localhost:8081/api/v1/expense/create');
    }

    return (
        <MainLayout>
            <div>Expense</div>
            <form onSubmit={onSubmit}>
                <input
                    type='number'
                    placeholder='Enter Expene amount'
                    id='amount'
                    value={formData.amount}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    placeholder='Enter category'
                    id='category'
                    value={formData.category}
                    onChange={handleChange}
                />

                <input
                    type='text'
                    placeholder='Enter Expense Category'
                    id='expenseType'
                    value={formData.expenseType}
                    onChange={handleChange}
                />
                <input
                    type='date'
                    id='date'
                    value={formData.date}
                    onChange={handleChange}
                />
                <input
                    type='textarea'
                    placeholder='Enter Expense Description'
                    id='description'
                    value={formData.description}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </MainLayout>
    )
}


export default Expense