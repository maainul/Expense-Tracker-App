import React from 'react'
import MainLayout from './../../Components/Layout/MainLayout/MainLayout';
import { useAuth, useUserDetails } from '../../context/auth';
import ButtonWithIcons from '../../Components/Buttons/ButtonWithIcons';
import ButtonWithIconsNegative from '../../Components/Buttons/ButtonWithIconsNegative';

const Profile = () => {
    const [auth] = useAuth()
    console.log(auth)
    const { getUserDetails } = useUserDetails();
    const userDetails = getUserDetails();
    console.log(userDetails);
    return (
        <MainLayout>
            <div className='profile'>
                <div className='details'>
                    <div className='details-card'>
                        <div className='card-header'>
                            <p>{userDetails.username}</p>
                            <p>{userDetails.email}</p>
                        </div>
                        <p className='heading-primary'>Details</p>
                        <div className='card-body'>
                            <div className='card-data'>
                                <p>Username :</p>
                                <p>{userDetails.username}</p>
                            </div>
                            <div className='card-data'>
                                <p>Email :</p>
                                <p>{userDetails.email}</p>
                            </div>
                            <div className='card-data'>
                                <p>Role :</p>
                                <p>{userDetails.role}</p>
                            </div> <div className='card-data'>
                                <p>Contact :</p>
                                <p>{userDetails.mobileNumber}</p>
                            </div> <div className='card-data'>
                                <p>Address :</p>
                                <p>{userDetails.town}<p>{userDetails.area} <p>{userDetails.city}</p></p></p>
                            </div>
                            <div className='button-betwen'>
                                <ButtonWithIcons
                                    title={"Edit"}
                                />
                                <ButtonWithIconsNegative
                                    title={"Suspended"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='plan-card'>
                        <div className='plan-card-header'>
                            <p>Standard</p>
                            <p>Price</p>
                        </div>
                        <div className='plan-card-details'>
                            <ul>
                                <li>dd</li>
                                <li>dd</li>
                                <li>dd</li>
                                <li>dd</li>
                            </ul>
                        </div>
                        <div className='progress-day'>
                            <p>Days</p>
                            <p>65% Complete</p>
                        </div>
                        <hr />
                        <div className='remaining-day'>4 days remaining</div>
                        <ButtonWithIcons title={"Upgrade Plan"} />
                    </div>
                </div>
                <div className='account-info'>
                    <div className='button-group'>
                        <ButtonWithIcons
                            clsName={"bx bx-bell me-1"}
                            title={"Account"}
                        />
                        <ButtonWithIcons
                            clsName={"bx bx-lock-alt me-1"}
                            title={"Security"}
                        />
                        <ButtonWithIcons
                            clsName={"bx bx-detail me-1"}
                            title={"Billing"}
                        />
                        <ButtonWithIcons
                            clsName={"bx bx-bell me-1"}
                            title={"Notifications"}
                        />
                        <ButtonWithIcons
                            clsName={"bx bx-link-alt me-"}
                            title={"Connections"}
                        />
                    </div>
                    <div className='lists'>
                        list
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Profile