import MainLayout from 'components/layout/MainLayout/MainLayout'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { C_Exp_TYP_URL, R_EX_TYP_URL } from 'api/expenseType';


const ExpenseTypes = () => {
    const [name, setName] = useState('')
    const [icon, setIcon] = useState('')
    const [expenseTypeList, setExpenseTypeList] = useState([])
    const [errors, setErrors] = useState([])

    // List of Expense Type List
    useEffect(() => {
        const fetchExpenseType = async () => {
            try {
                const res = await axios.get(R_EX_TYP_URL)
                setExpenseTypeList(res.data.data)
            } catch (error) {
                console.log(`Fetch expense Data Failed : ${error}`);
            }
        }
        fetchExpenseType()
    }, [])

    const handleChange = (e) => {
        const { id, value } = e.target
        switch (id) {
            case 'name':
                setName(value)
                break;
            case 'icon':
                setIcon(value)
                break;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(C_Exp_TYP_URL, {
                name,
                icon
            })
            console.log('Expense Type Info : ', res)
            if (res.data.errors) {
                setErrors(res.data.errors)
                toast.error(res.data.message)
            } else {
                toast.success(res.data && res.data.message)
                console.log(`Expense Types added successfull`)
                setExpenseTypeList([...expenseTypeList, res.data.data]);
                setName('')
                setIcon('')
                setErrors([])
            }
        } catch (error) {
            console.log(`Invalid Expense Types : ${error}`)
        }
    }

    return (
        <MainLayout>
            <div className='content-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>Name</th>
                        </tr>
                    </thead>

                    <tbody>
                        {expenseTypeList.map((expl) => (
                            <tr>
                                <td>{expl.icon}</td>
                                <td>{expl.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            {/* <div>
                <table>
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>Name</th>
                        </tr>
                    </thead>

                    <tbody>
                        {expenseTypeList.map((expl) => (
                            <tr>
                                <td>{expl.icon}</td>
                                <td>{expl.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}

            {/* <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input
                            type='text'
                            id='name'
                            placeholder='Enter Expense Type Name'
                            value={name}
                            onChange={handleChange}
                        /><br />
                        {errors.map((error) => error.field === 'name' && <div key={error.field} style={{ color: 'red' }} >{error.error}</div>)}
                    </div>
                    <div>

                        <select name="icon" id="icon" onChange={handleChange}>
                            <option value="opdfdelf"><i className='menu-icon tf-icons bx bx-store'></i>Menu Icons</option>
                            <option value="auasdfasdtdi"><i className='menu-icon tf-icons bx bx-store'></i>Menu Icons 2</option>
                            <option value="auasdfasrtdtdi"><i className='menu-icon tf-icons bx bx-store'></i>Menu Icons 3</option>
                            <option value="auasdfasdfgdtdi"><i className='menu-icon tf-icons bx bx-store'></i>Menu Icons 4</option>
                        </select>
                        {errors.map((error) => error.field === 'icon' && <div key={error.field} style={{ color: 'red' }} >{error.error}</div>)}
                    </div>
                    <button type='submit' >Submit</button>
                </form>
            </div> */}
        </MainLayout>
    )
}

export default ExpenseTypes