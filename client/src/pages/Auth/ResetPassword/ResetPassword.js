import React, { useState } from 'react'
import BrandLogo from '../../../Components/Logos/BrandLogo/BrandLogo'
import BrandTitle from '../../../Components/BrandTitle/BrandTitle'
import Image from './ResetPasswordImage'
import Input from '../../../Components/Input/Input'
import Submit from '../../../Components/Buttons/Submit'


const ResetPassword = () => {
    const [password, setPassword] = useState()
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
                        <h2 class="text-primary">Reset Password?  🔒</h2>
                        <p class="text-secondary padddingBottom20">
                            Enter your email and we'll send you instructions to reset your password
                        </p>
                    </div>
                    <form>
                        <div className="formgroup" style={{ paddingBottom: "10px" }}>
                            <Input
                                type='text'
                                fieldName='password'
                                placeholder='Enter Password'
                                state={password}
                                setState={setPassword}
                                errorState={errors}
                                label={true}
                                labelTitle="New Password"
                            />
                        </div>
                        <div className="formgroup" style={{ paddingBottom: "10px" }}>
                            <Input
                                type='text'
                                fieldName='password'
                                placeholder='Enter password'
                                state={password}
                                setState={setPassword}
                                errorState={errors}
                                label={true}
                                labelTitle="Confirm Password"
                            />
                        </div>
                        <Submit title={"Send reset link"} />
                        <p className="text-secondary center">
                            <span>New on our platform?</span>
                            <a
                                className="text-secondary text-deco-color"
                                href={"/signup"}
                            >
                                <span style={{ color: "#7367F0" }} >&nbsp;Create an account</span>
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword