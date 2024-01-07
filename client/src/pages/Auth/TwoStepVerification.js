import React, { useState } from 'react'
import BrandLogo from '../../Components/Logos/BrandLogo/BrandLogo'
import BrandTitle from '../../Components/BrandTitle/BrandTitle'
import Image from '../../Components/TwoStepVerImage/TwoStepVerImage'
import Input from '../../Components/Input/Input'
import Submit from '../../Components/Buttons/Submit'

const TwoStepVerification = () => {

    const [code1, setCode1] = useState()
    const [code2, setCode2] = useState()
    const [code3, setCode3] = useState()
    const [code4, setCode4] = useState()
    const [code5, setCode5] = useState()
    const [code6, setCode6] = useState()
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
                        <h2 class="text-primary">Two Step Verification 💬</h2>
                        <p class="text-secondary padddingBottom20">
                            We sent a verification code to your mobile. Enter the code from the <br />mobile in the field below.<br /> <br /> <strong>******0789</strong>
                        </p>
                    </div>
                    <p class="text-secondary padddingBottom20">
                        Type your 6 digit security code
                    </p>

                    <form>
                        <div className='two-step'>
                            <Input
                                type='text'
                                placeholder=''
                                state={code1}
                                setState={setCode1}
                                maxlength={1}

                            />
                            <Input
                                type='text'
                                placeholder=''
                                state={code2}
                                setState={setCode2}
                                maxlength={1}
                            />
                            <Input
                                type='text'
                                placeholder=''
                                state={code3}
                                setState={setCode3}
                                maxlength={1}
                            />
                            <Input
                                type='text'
                                placeholder=''
                                state={code4}
                                setState={setCode4}
                                maxlength={1}
                            />
                            <Input
                                type='text'
                                placeholder=''
                                state={code5}
                                setState={setCode5}
                                maxlength={1}
                            />
                            <Input
                                type='text'
                                placeholder=''
                                state={code6}
                                setState={setCode6}
                                maxlength={1}
                            />
                        </div>
                        <Submit title={"Send reset link"} />
                    </form>
                    <p className="text-secondary center">
                        <span>Didn’t get the code? </span>
                        <a
                            className="text-secondary text-deco-color"
                            href={"/signup"}
                        >
                            <span style={{ color: "#7367F0" }} >&nbsp;Resendor Call Us</span>
                        </a>
                    </p>
                </div>
            </div >
        </div >
    )
}

export default TwoStepVerification