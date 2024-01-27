import React, { useState } from 'react'
import BrandLogo from 'components/logos/brandLogo/BrandLogo'
import BrandTitle from 'components/brandTitle/BrandTitle'
import Input from 'components/Input/Input'
import Submit from 'components/buttons/Submit'
import ResetPasswordImage from './ResetPasswordImage';


const ResetPassword = () => {
    const [password, setPassword] = useState()
    const [errors] = useState([])

    return (
        <div className="auth-inner">
            <div className="left-div">
                <div className="brand-logo-text">
                    <BrandLogo />
                    <BrandTitle />
                </div>
                <div className="flex-align-center">
                    <ResetPasswordImage />
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