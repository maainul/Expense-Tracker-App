import React from 'react'
import MainLayout from './../../Components/Layout/MainLayout/MainLayout';
import { useAuth } from '../../context/auth';
import ButtonWithIcons from '../../Components/Buttons/ButtonWithIcons';
import ButtonWithIconsNegative from '../../Components/Buttons/ButtonWithIconsNegative';


const Profile = () => {
    const [auth, setAuth] = useAuth()

    return (
        <MainLayout>
            <div className='profile'>
                <div className='details'>
                    <div className='details-card'>
                        <div className='card-header'>
                            <p></p>
                            <p></p>
                        </div>
                        <p className='heading-primary'>Details</p>
                        <div className='card-body'>
                            <div className='card-data'>
                                <p>Username :</p>

                            </div>
                            <div className='card-data'>
                                <p>Email :</p>

                            </div>
                            <div className='card-data'>
                                <p>Status :</p>

                            </div> <div className='card-data'>
                                <p>Role :</p>

                            </div> <div className='card-data'>
                                <p>Contact :</p>

                            </div> <div className='card-data'>
                                <p>Address :</p>

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
                        dd
                    </div>
                </div>
                <div className='account-info'>
                    <div className='upper-buttons'>
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
                            title={"Billing & Plans"}
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