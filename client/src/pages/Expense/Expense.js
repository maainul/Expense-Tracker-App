import React from 'react'
import MainLayout from '../../Components/Layout/MainLayout/MainLayout'
import useCustomEffect from '../../Helper/CustomHooks/useCustomEffect'
import useForm from '../../Helper/CustomHooks/useForm'
import Table from '../../Components/Table/Table'

const Expense = () => {

    const columns = [
        { key: "amount", label: "Amount" },
        { key: "date", label: "Date" },
        { key: "description", label: "Description" },
        { key: "category", label: "Category" },
        { key: "expenseType", label: "Expense Type" },
    ]

    // Get All Expense Data
    const { error, response } = useCustomEffect('http://localhost:8081/api/v1/expense/read/all')
    const { formData, handleChange, handleSubmit } = useForm({});

    if (error) {
        return <div>Error: {error.message}</div>
    }

    // Expense Form Submit
    const onSubmit = (e) => {
        e.preventDefault()
        handleSubmit('http://localhost:8081/api/v1/expense/create');
    }

    const handleEdit = (itemId) => {
        // Implement your logic for handling the edit action
        console.log(`Editing item with ID: ${itemId}`);
    };

    const handleDelete = (itemId) => {
        // Implement your logic for handling the delete action
        console.log(`Deleting item with ID: ${itemId}`);
    };

    return (
        <MainLayout>
            <div>
                <h2>Expense Data</h2>
                {response.success ? (
                    <Table
                        columns={columns}
                        data={response.data}
                        actions
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ) : (
                    <p>Error fetching expense data: {response.message}</p>
                )}
            </div>
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
                <textarea
                    placeholder='Enter Expense Description'
                    id='description'
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>

                <button type='submit'>Submit</button>
            </form>
        </MainLayout>
    )
}

export default Expense