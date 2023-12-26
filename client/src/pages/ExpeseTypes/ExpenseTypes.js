import '../ExpeseTypes/ExpenseTypes.css'
import MainLayout from '../../Components/Layout/MainLayout/MainLayout'
import useCustomEffect from './../../Helper/CustomHooks/useCustomEffect';
import Table from '../../Components/Table/Table';
import Form from '../../Components/Form/Form';
import API from './../../Services/API';


const ExpenseTypes = () => {
    // Get All Expense Type using Custom Hooks : useCustomEffect
    const { loading, response, error } = useCustomEffect('http://localhost:8081/api/v1/expense-type/read/all')
    if (error) {
        return <div>Error : {error.message}</div>
    }

    // handling the edit action
    const handleEdit = (itemId) => {
        console.log(`Editing item with ID: ${itemId}`);
    };

    // handling the delete action
    const handleDelete = (itemId) => {
        console.log(`Deleting item with ID: ${itemId}`);
    };

    // For Show Table Header
    const columns = [
        { key: "icon", label: "Icon" },
        { key: "name", label: "Name" },
    ]

    // HTML: Form Fileds
    const formFields = [
        { id: 'name', type: 'text', placeholder: 'Enter Expense Type' },
        { id: 'icon', type: 'text', placeholder: 'Enter Icon' },
    ];

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
            <Form fields={formFields} onSubmitURL={API.C_Exp_TYP_URL} />
        </MainLayout>

    )
}

export default ExpenseTypes