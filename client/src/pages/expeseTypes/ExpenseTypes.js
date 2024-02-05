// React Imports
import React, { useEffect, useState } from 'react'

// External Library Imports:
import axios from 'axios'
import { toast } from 'react-hot-toast';

// Component-related imports
import Input from 'components/Input/Input'
import Submit from 'components/buttons/Submit'
import ButtonPrimary from 'components/buttons/ButtonPrimary';
import MainLayout from 'components/layout/MainLayout/MainLayout'

// Context and Hooks:
import { useAuth } from 'context/authContext'
import { useAllExpenseTypes } from 'hooks/useExpenseTypes';

// Utility Function Imports
import { closeDetailsModalForm, showDetails, showModalForm } from 'utils/modalForm';

// API-related Imports
import { C_Exp_TYP_URL } from "api/expenseType";
import { closeModalForm } from 'utils/modalForm';


const ExpenseTypes = () => {
    // FORM 
    const [auth] = useAuth()
    const [name, setName] = useState('')
    const [icon, setIcon] = useState('')
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // All Expesne Tyles List
    const { expenseTypeList, getExpTyps } = useAllExpenseTypes([])

    // Edit State Data
    const [editExpenseTypeData, setEditExpenseTypeData] = useState(null);

    // Edit Modal Form Show 
    const handleEditForm = ({ expl }) => {
        setEditExpenseTypeData({ ...expl, id: expl._id }); // Assuming expl has an _id field
        showModalForm();
    };

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

    // Check mode for debugging
    if (isEditing) {
        console.log("Editing Mode")
    } else {
        console.log("Adding Mode")
    }

    // Submit Form Data
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (isEditing) {
                console.log("Editing Mode")
                // Update existing expense type
                const response = await axios.put(`http://192.168.0.194:8081/api/v1/expense-type/update/${editExpenseTypeData.id}`, {
                    name,
                    icon,
                    userid: auth.user._id,
                });
                if (response.data.errors) {
                    setErrors(response.data.errors)
                    toast.error(response.data.message)
                } else {
                    toast.success(response.data && response.data.message)
                    console.log(`Expense Type Added Successfully`)
                }
            } else {
                console.log("Adding Mode")
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
                }
            }
            setName('')
            setIcon('')
            setErrors([])
            // Call getExpenseTypes to update the list after adding a new expense type
            getExpTyps()

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
                {/* Expense Table */}
                <div className='content-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Icon</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenseTypeList.map((expl) => (
                                <tr>
                                    <td>{expl._id}</td>
                                    <td>{expl.icon}</td>
                                    <td>{expl.name}</td>
                                    <td key={expl.id}>
                                        <i class="bx bx-dots-vertical-rounded dashboard-icon"></i>
                                        <i class="bx bx-dots-vertical-rounded dashboard-icon"
                                            onClick={() => showDetails({ expl })}
                                        ></i>

                                        <i class="bx bxs-edit dashboard-icon editIcon"
                                            onClick={() => handleEditForm({ expl })}
                                        ></i>
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
                </div >
                <div className="modal-width">
                    <div className='overlay' onClick={closeDetailsModalForm}></div>
                    <div className='details-modal-form'>
                        <span onClick={closeDetailsModalForm}>&times;</span>
                    </div>
                </div>
                {/* Add Button */}
                <div className='add-expense-btn'>
                    <ButtonPrimary
                        clsName={"bx bx-plus me-sm-1"}
                        title={"Add"}
                        onClick={() => {
                            showModalForm();
                            getExpTyps()
                        }}
                    />
                </div>
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