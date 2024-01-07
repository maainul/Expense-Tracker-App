import React, { useState } from 'react'
import BrandLogo from '../../Components/Logos/BrandLogo/BrandLogo'
import BrandTitle from '../../Components/BrandTitle/BrandTitle'
import Image from '../../Components/ForgotPasswordImage/ForgotPasswordImage'
import Input from '../../Components/Input/Input'
import Submit from '../../Components/Buttons/Submit'

const ForgotPassword = () => {

    const [email, setEmail] = useState()
    const [errors, setErrors] = useState([])

    return (
        <div className="auth-inner">
            <div className="left-div">
                <div className="brand-logo-text">
                    <BrandLogo />
                    <BrandTitle />
                </div>
                <div className="flex-align-center">
                    <Image />
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
                            <a href='/dashboard/user'>Back to Home</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword