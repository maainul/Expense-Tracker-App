import React from 'react'
import MainLayout from '../../Components/Layout/MainLayout/MainLayout'
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
>>>>>>> 840263333f9c08d9f17a8852c2dd4ad84fbee1c6

const Expense = () => {
    return (
        <MainLayout>
            <div>Expense</div>
<<<<<<< HEAD
=======
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
>>>>>>> eef7013 (Update frontend)
=======
>>>>>>> a109cdf54302deef280990ceb12c73f954035289
>>>>>>> 840263333f9c08d9f17a8852c2dd4ad84fbee1c6
        </MainLayout>
    )
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> eef7013 (Update frontend)
=======

=======
>>>>>>> a109cdf54302deef280990ceb12c73f954035289
>>>>>>> 840263333f9c08d9f17a8852c2dd4ad84fbee1c6
export default Expense