import React from 'react'
import { useAllUser } from 'hooks/useAllUser'
import MainLayout from 'components/layout/MainLayout/MainLayout'

const User = () => {
    const userList = useAllUser()
    return (
        <>
            <MainLayout>
                <div>User List</div>
                <div>
                    <table className='table-design'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                                <th>Address</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.userList.map((ulst) => (
                                <tr key={ulst.id}>
                                    <td>{ulst.firstname} {ulst.lastname}</td>
                                    <td>{ulst.email}</td>
                                    <td>{ulst.mobileNumber}</td>
                                    <td>{ulst.area} {ulst.town} {ulst.city} </td>
                                    <td>{ulst.role}</td>
                                    <td>
                                        <button value={ulst.id}>View</button>
                                        <button value={ulst.id}>Edit</button>
                                        <button value={ulst.id}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </MainLayout>
        </>
    )
}

export default User