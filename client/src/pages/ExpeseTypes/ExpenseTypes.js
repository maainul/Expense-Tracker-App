import '../ExpeseTypes/ExpenseTypes.css'
import useForm from '../../Helper/CustomHooks/useForm';
import MainLayout from '../../Components/Layout/MainLayout/MainLayout'
import useCustomEffect from './../../Helper/CustomHooks/useCustomEffect';

const ExpenseTypes = () => {
    // Get All Expense Type using Custom Hooks : useCustomEffect
    const { res, error, getResponse } = useCustomEffect('http://localhost:8081/api/v1/expense-type/read/all')
    const { formData, loading, handleChange, handleSubmit } = useForm({});
    if (error) {
        return <div>Error : {error.message}</div>
    }

    // Submit Form Data Useing Custom Hooks useForm
    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit('http://localhost:8081/api/v1/expense-type/create');
    }

    return (
        <MainLayout>
            <button onClick={getResponse} >Fetch Data</button>
            <pre>{JSON.stringify(res, null, 2)}</pre>

            <div className='table-div'>
                <table className='table-design'>
                    <thead>
                        <tr>
                            <th>Header1</th>
                            <th>Header2</th>
                            <th>Header3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>td1</td>
                            <td>td2</td>
                            <td>td3</td>
                        </tr>
                    </tbody>
                </table>

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
                <button type='submit'>
                    Submit
                </button>
            </form>

        </MainLayout>

    )
}

export default ExpenseTypes