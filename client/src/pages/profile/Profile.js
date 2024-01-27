import React, { useState } from 'react'
import MainLayout from 'components/layout/MainLayout/MainLayout';
import { useAuth } from 'context/authContext';
import Input from 'components/Input/Input';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import ResetAndCancelBtn from 'components/buttons/ResetAndCancelBtn';
import ButtonPrimary from 'components/buttons/ButtonPrimary';
import profileImage from 'img/1.png';
import SIGNUP_URL from 'API'

const Profile = () => {
    const [auth] = useAuth()
    console.log(auth)
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [state, setState] = useState()
    const [country, setCountry] = useState()
    const [mobileNumber, setMobileNumber] = useState()
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await SIGNUP_URL ({
                email,
                username,
                password,
            })
            if (res.data.errors) {
                setErrors(res.data.errors)
            } else {
                setErrors([])
                setUserName('')
                setEmail('')
                setPassword('')
                navigate('/signin')
                toast.success('Signup Successfull')
            }
        } catch (error) {
            console.log(`Invalid Request : ${error}`)
        }
    }
    return (
        <MainLayout>
            <div className='card'>
                <h5 class="card-header">Profile Details</h5>
                <div className="card-header-secondary">
                    <img src={profileImage} alt="Profile" height={100} width={100} style={{ borderRadius: '10px' }} />
                    <div>
                        <div className="button-wrapper">
                            <ButtonPrimary title={"Upload new photo"} />
                            <ResetAndCancelBtn title={"Reset"} />
                        </div>
                        <p className="text-muted">Allowed JPG, GIF or PNG. Max size of 800K</p>
                    </div>
                </div>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="grid-column-2" >
                        <Input
                            type='text'
                            fieldName='firstname'
                            placeholder='Enter First Name'
                            state={firstName}
                            setState={setFirstName}
                            errorState={errors}
                            label={true}
                            labelTitle="FIRST NAME"
                        />
                        <Input
                            type='text'
                            fieldName='lastname'
                            placeholder='Enter last name'
                            state={lastName}
                            setState={setLastName}
                            errorState={errors}
                            label={true}
                            labelTitle="LAST NAME"
                        />
                    </div>
                    <div className="grid-column-2" >
                        <Input
                            type='text'
                            fieldName='email'
                            placeholder='Enter Email'
                            state={email}
                            setState={setEmail}
                            errorState={errors}
                            label={true}
                            labelTitle="EMAIL"
                        />
                        <Input
                            type='text'
                            fieldName='mobileNumber'
                            placeholder='Enter Mobile Number'
                            state={mobileNumber}
                            setState={setMobileNumber}
                            errorState={errors}
                            label={true}
                            labelTitle="PHONE NUMBER"
                        />
                    </div>
                    <div className="grid-column-2" >
                        <Input
                            type='text'
                            fieldName='password'
                            placeholder='Enter password'
                            state={state}
                            setState={setState}
                            errorState={errors}
                            label={true}
                            labelTitle="STATE"
                        />
                        <Input
                            type='text'
                            fieldName='country'
                            placeholder='Enter country'
                            state={country}
                            setState={setCountry}
                            errorState={errors}
                            label={true}
                            labelTitle="COUNTRY"
                        />
                    </div>
                    <div>
                        <div className='button-btn' style={{}}>
                            <ButtonPrimary title={"Save Changes"} />
                            <ResetAndCancelBtn title={"Cancel"} />
                        </div>
                    </div>
                </form>
            </div>
        </MainLayout >
    )
}

export default Profile