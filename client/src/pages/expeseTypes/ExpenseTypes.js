// React Imports
import React, { useEffect, useState } from 'react'

// External Library Imports:
import axios from 'axios'
import { toast } from 'react-hot-toast';

// Component-related imports
import Input from 'components/Input/Input'
import Submit from 'components/buttons/Submit'
import MainLayout from 'components/layout/MainLayout/MainLayout'

// Context and Hooks:
import { useAuth } from 'context/authContext'

// Utility Function Imports
import { closeDetailsModalForm, showDetails, showModalForm } from 'utils/modalForm';

// API-related Imports
import { C_Exp_TYP_URL, R_EX_TYP_URL } from "api/expenseType";
import { closeModalForm } from 'utils/modalForm';


const ExpenseTypes = () => {
    // FORM 
    const [auth] = useAuth()
    const [name, setName] = useState('')
    const [icon, setIcon] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // Sorting Based on this :  latest,oldest,a-z,z-a
    const [sorting, setSorting] = useState('latest')

    // Searching
    const [search, setSearch] = useState('')


    // All Expesne Tyles List
    const [expenseTypeList, setExpenseTypeList] = useState([])

    // Edit State Data
    const [editExpenseTypeData, setEditExpenseTypeData] = useState(null);

    // Edit Modal Form Show 
    const handleEditForm = ({ expl }) => {
        setEditExpenseTypeData({ ...expl, id: expl._id }); // Assuming expl has an _id field
        showModalForm();
    };

    // Update Table Data while call the URL
    useEffect(() => {
        const getExpTypsgetExpTyps = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/v1/expense-type/read/all?sort=${sorting}&search=${search}`);
                setExpenseTypeList(response.data.data || [])
                setErrors(null)
            } catch (error) {
                console.log("Error While Getting Expense Types", error)
            }
        }
        getExpTypsgetExpTyps()
    }, [sorting, search])


    // Check if editExpenseTypeData is provided and set the form fields accordingly
    useEffect(() => {
        if (editExpenseTypeData) {
            setIsEditing(true);
            setName(editExpenseTypeData.name || '');
            setIcon(editExpenseTypeData.icon || '');
        } else {
            setIsEditing(false);
            setName('');
            setIcon('');
        }
    }, [editExpenseTypeData]);

    // Submit Form Data
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (isEditing) {
                // Update existing expense type
                const response = await axios.put(`http://localhost:8081/api/v1/expense-type/update/${editExpenseTypeData.id}`, {
                    name,
                    icon,
                    userid: auth.user._id,
                });
                if (response.data.errors) {
                    setErrors(response.data.errors)
                    toast.error(response.data.message)
                } else {
                    setExpenseTypeList(prevExp => [...prevExp, response.data.data])
                    toast.success(response.data && response.data.message)
                    console.log(`Expense Type Added Successfully`)
                }
            } else {
                const response = await axios.post(C_Exp_TYP_URL, {
                    name,
                    icon,
                    userid: auth.user._id,
                })
                if (response.data.errors) {
                    setErrors(response.data.errors)
                    toast.error(response.data.message)
                } else {
                    setExpenseTypeList(prevExp => [...prevExp, response.data.data])
                    toast.success(response.data && response.data.message)
                    console.log(`Expense Type Added Successfully`)
                }
            }
            setName('')
            setIcon('')
            setErrors([])

        } catch (error) {
            console.error(`Invalid Expense Type : ${error}`)
            toast.error('Failed to submit expense type.');
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <MainLayout>
                <div className='content-container'>
                    <div className='button-filter'>
                        <div className='filter-design filter-width'>
                            <span className='filter-title'>Sort</span>
                            <select value={sorting} onChange={(e) => setSorting(e.target.value)} className='form-select'>
                                <option value="latest">Latest</option>
                                <option value="oldest">Oldest</option>
                                <option value="a-z">A-Z</option>
                                <option value="z-a">Z-A</option>
                            </select>
                        </div>
                        <div className='filter-design filter-width'>
                            <span className='filter-title'>Search</span>
                            <input value={search} onChange={(e) => setSearch(e.target.value)} className='form-select' type='text' placeholder='Search.....' />
                        </div>
                        <div>
                            <button className='addButton'
                                title={"Add"}
                                onClick={() => {
                                    showModalForm();
                                    // getExpTypsgetExpTyps()
                                }}
                            >Add</button>
                        </div>
                    </div>

                    <table className='table-height'>
                        <thead>
                            <tr className='table-header'>
                                <th>ID</th>
                                <th>Icon</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenseTypeList.map((expl) => (
                                <tr key={expl._id}>
                                    <td>{expl._id}</td>
                                    <td>{expl.icon}</td>
                                    <td>{expl.name}</td>
                                    <td>
                                        <button className='tableButtonView' onClick={() => showDetails({ expl })}>View</button>
                                        <button className='tableButtonUpdate' onClick={() => handleEditForm({ expl })}>Update</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination-container">
                        <span className="paginationNumber"> <i class='pagination-icon bx bx-chevrons-left'></i> </span>
                        <span className="paginationNumber">1</span>
                        <span className="paginationNumber">2</span>
                        <span className="paginationNumber">3</span>
                        <span className="paginationNumber">4</span>
                        <span className="paginationNumber"><i class='pagination-icon bx bx-chevrons-right'></i></span>
                    </div>
                    <div className="modal-width">
                        <div className='overlay' onClick={closeDetailsModalForm}></div>
                        <div className='details-modal-form'>
                            <span onClick={closeDetailsModalForm}>&times;</span>
                        </div>
                    </div>
                </div >

            </MainLayout>



            {/* Form Expens Form */}
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

export default ExpenseTypes