import '../ExpeseTypes/ExpenseTypes.css'
import useForm from '../../Helper/CustomHooks/useForm';
import MainLayout from '../../Components/Layout/MainLayout/MainLayout'
import useCustomEffect from './../../Helper/CustomHooks/useCustomEffect';
import Table from '../../Components/Table/Table';
import SubmitBtn from './../../Components/SubmitBtn/SubmitBtn';

const ExpenseTypes = () => {

    const columns = [
        { key: "icon", label: "Icon" },
        { key: "name", label: "Name" },
    ]

    // Get All Expense Type using Custom Hooks : useCustomEffect
    const { response, error } = useCustomEffect('http://localhost:8081/api/v1/expense-type/read/all')
    const { formData, loading, handleChange, handleSubmit } = useForm({});
    if (error) {
        return <div>Error : {error.message}</div>
    }


    const handleEdit = (itemId) => {
        // Implement your logic for handling the edit action
        console.log(`Editing item with ID: ${itemId}`);
    };

    const handleDelete = (itemId) => {
        // Implement your logic for handling the delete action
        console.log(`Deleting item with ID: ${itemId}`);
    };

    // Submit Form Data Useing Custom Hooks useForm
    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit('http://localhost:8081/api/v1/expense-type/create');
    }

    return (
        <MainLayout>
            {/* Table Data */}
            <div>
                <h2>Expense Type Data</h2>
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

            <div>Expense Types</div>
            {loading && "Please Wait"}
            <form onSubmit={onSubmit} >
                <input
                    type='text'
                    placeholder='Enter Expense Type'
                    id='name'
                    value={formData.name || ''}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    placeholder='Enter Icon'
                    id='icon'
                    value={formData.icon || ''}
                    onChange={handleChange}
                />
                <SubmitBtn title={'Submit'} />
            </form>
        </MainLayout>

    )
}

export default ExpenseTypes