import React, { useState } from 'react'
import MainLayout from 'components/layout/MainLayout/MainLayout';
// import { useAuth } from 'context/authContext';
import { useAllUser } from 'hooks/useAllUser';
import ButtonPrimary from 'components/buttons/ButtonPrimary';
import Input from 'components/Input/Input';
import DashboardCard from 'components/cards/DashboardCard';
import SelectBox from 'components/selectBox/SelectBox';

const AdminDashboard = () => {
    // const [auth] = useAuth()
    const userList = useAllUser()
    const [search, setSearch] = useState()

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        // Perform any action based on the selected option, like exporting data.
    };

    return (
        <MainLayout>
            {/* Admin Dashboard Card */}
            <div className='cards'>
                <DashboardCard
                    icon={'bx bx-user'} />
                <DashboardCard
                    cardColor={'paidUserCard'}
                    numberColor={'paidUserNumber'}
                    icon={'bx bx-user-plus'}
                    iconColor={'paidUserIcon'} />
                <DashboardCard
                    cardColor={'activeUserCard'}
                    numberColor={'activeUserNumber'}
                    icon={'bx bx-user-check'}
                    iconColor={'activeUser'} />
                <DashboardCard
                    cardColor={'pendingUserCard'}
                    numberColor={'pendingUserNumber'}
                    icon={'bx bx-user-x'}
                    iconColor={'pendingUser'} />
            </div>
            {/* Table Info */}
            <div className='table-Container'>

                <div className='selectBoxes'>
                    <SelectBox />
                    <SelectBox />
                    <SelectBox />
                </div>

                <div className='tableHeading'>
                    <div className='seach-btn'>
                        <span>Show </span>
                        {/* <input className='entrisSection' />
                     */}
                        <div style={{ width: '80px' }}>

                            <Input
                                type='text'
                                fieldName='search'
                                state={search}
                                setState={setSearch}
                                label={false}
                            />

                        </div>
                        <span> entries</span>
                    </div>
                    <div className='exportbtn-add-record'>
                        <div className='exportbtn-add-record'>
                            <div className='seach-btn'>
                                <span>Search : </span>
                                {/* <input className='searchBtnTable' /> */}

                                <Input
                                    type='text'
                                    fieldName='search'
                                    placeholder='search ...'
                                    state={search}
                                    setState={setSearch}
                                    label={false}
                                />
                            </div>
                        </div>

                        <div className="dropdown">
                            <button className="btn btnExport" onClick={toggleDropdown}>
                                <i className="bx bx-download"></i>
                                <span style={{ paddingLeft: '7px', paddingRight: '7px' }}>
                                    Exports
                                </span>
                                <i className={`bx ${isOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i>
                            </button>

                            {isOpen && (
                                <div className="dropdown-menu">
                                    <div className="option-dropdown" onClick={() => handleOptionClick('pdf')}>
                                        <i class='bx bxs-file-pdf dropdownicon'></i>
                                        PDF
                                    </div>
                                    <div className="option-dropdown" onClick={() => handleOptionClick('excel')}>
                                        <i class='bx bxs-file-export dropdownicon' ></i>
                                        Excel
                                    </div>
                                    <div className="option-dropdown" onClick={() => handleOptionClick('csv')}>
                                        <i class='bx bx-file dropdownicon' ></i>
                                        CSV
                                    </div>
                                    <div className="option-dropdown" onClick={() => handleOptionClick('print')}>
                                        <i class='bx bx-printer dropdownicon'></i>
                                        Print
                                    </div>
                                </div>
                            )}

                            {selectedOption && (
                                <div>
                                    Selected option: {selectedOption}
                                </div>
                            )}
                        </div>

                        <div>
                            <ButtonPrimary clsName={"bx bx-plus me-sm-1"} title={"Add New Record"} />
                        </div>
                    </div>

                </div>
                <div className='table-wrapper'>
                    <table className='tableDesign'>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>STATUS</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>

                        <tbody>
                            {userList.userList.map((ulst) => (
                                <tr key={ulst.id}>
                                    <td>{ulst.username}</td>
                                    <td>{ulst.email}</td>
                                    <td>{ulst.role}</td>
                                    <td>
                                        <span className='status'>
                                            {ulst.role}
                                        </span>
                                    </td>
                                    <td>
                                        <div className='action-icons'>
                                            <i class='bx bx-edit-alt table-icons'></i>
                                            <i class='bx bx-trash table-icons' ></i>
                                            <i class='bx bx-dots-vertical-rounded table-icons' ></i>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout >
    )
}

export default AdminDashboard