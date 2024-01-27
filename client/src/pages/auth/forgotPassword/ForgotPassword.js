import React, { useState } from 'react'
import BrandLogo from 'components/logos/brandLogo/BrandLogo'
import BrandTitle from 'components/brandTitle/BrandTitle'
import Input from 'components/Input/Input'
import Submit from 'components/buttons/Submit'
import { Link } from 'react-router-dom'
import { useAuth } from 'context/authContext'
import ForgotPasswordImage from './ForgotPasswordImage'

const ForgotPassword = () => {
    const [auth] = useAuth()
    const [email, setEmail] = useState()
    const [errors] = useState([])

    return (
        <div className="auth-inner">
            <div className="left-div">
                <div className="brand-logo-text">
                    <BrandLogo />
                    <BrandTitle />
                </div>
                <div className="flex-align-center">
                    <ForgotPasswordImage />
                </div>
            </div>
            <div className="right-div">
                <div className="formContainer gap10">
                    <div className="form-header">
                        <h2 class="text-primary">Forgot Password? 🔒</h2>
                        <p class="text-secondary padddingBottom20">
                            Your new password must be different from previously used passwords
                        </p>
                    </div>
                    <form>
                        <div className="formgroup" style={{ paddingBottom: "10px" }}>
                            <Input
                                type='text'
                                fieldName='email'
                                placeholder='Enter email'
                                state={email}
                                setState={setEmail}
                                errorState={errors}
                                label={true}
                                labelTitle="Email"
                            />
                        </div>
                        <Submit title={"Send reset link"} />
                        <div className='back-to-home'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-chevron-left">
                                <polyline points="15 18 9 12 15 6"></polyline></svg>
                            <Link
                                to={`/dashboard/${auth?.user?.role === 'admin' ? 'admin' : 'user'}`}>
                                Back to Home
                            </Link>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default ForgotPassword