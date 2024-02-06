import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios";
import { toast } from 'react-hot-toast';

// Importing custom components
import BrandLogo from "components/logos/brandLogo/BrandLogo";
import BrandTitle from "components/brandTitle/BrandTitle";
import Input from "components/Input/Input";
import Submit from "components/buttons/Submit";

// Importing social Icons
import Facebook from "components/socialIcons/Facebook";
import Twitter from "components/socialIcons/Twitter";
import Gmail from "components/socialIcons/Gmail";
import Github from "components/socialIcons/Github";

// API-related imports
import { SIGNIN_URL } from 'api/auth';

// Page-specific imports
import Signinimage from "pages/auth/signin/Signinimage";



const SigninForm = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const location = useLocation()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log("Client : Signin Hanlder")
            const res = await axios.post(SIGNIN_URL, {
                username,
                password,
            })
            console.log('Signin() User/Admin Info : ', res.data.user)
            if (res.data.errors) {
                setErrors(res.data.errors)
                toast.error(res.data.message)
            } else {
                toast.success(res.data && res.data.message)
                localStorage.setItem('auth', JSON.stringify(res.data))
                if (res.data.user.role === 'user') {
                    navigate(location.state || "/dashboard/user")
                }
                else if (res.data.user.role === 'admin') {
                    navigate(location.state || "/dashboard/admin")
                }
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    }

    return (
        <>
            <div className="auth-inner">
                <div className="left-div">
                    <div className="brand-logo-text">
                        <BrandLogo />
                        <BrandTitle />
                    </div>
                    <div className="flex-align-center">
                        <Signinimage />
                    </div>
                </div>
                <div className="right-div">
                    <div className="formContainer gap10">
                        <div className="form-header">
                            <h2 class="text-primary">Welcome to ExTra! 👋</h2>
                            <p class="text-secondary padddingBottom20">Please sign-in to your account and start the adventure</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <Input
                                type='text'
                                fieldName='username'
                                placeholder='Enter Username'
                                state={username}
                                setState={setUserName}
                                errorState={errors}
                                label={true}
                                labelTitle={"USERNAME"}
                            />
                            <div className="formgroup">
                                <div className="grid-col-2-space-between">
                                    <label htmlFor="password" >PASSWORD</label>
                                    <span className="text-deco-color" onClick={() => {
                                        navigate("/forgot-password")
                                    }}
                                        style={{
                                            cursor: "pointer"
                                        }}
                                    >Forgot Password ?</span>
                                </div>
                                <Input
                                    type='text'
                                    fieldName='password'
                                    placeholder='Enter password'
                                    state={password}
                                    setState={setPassword}
                                    errorState={errors}
                                    label={false}
                                />
                            </div>
                            <p className="text-secondary">
                                <span>Remember Me</span>
                            </p>
                            <Submit title={"Sign in"} />
                            <p className="text-secondary center">
                                <span>New on our platform?</span>
                                <span
                                    className="text-secondary text-deco-color"
                                    onClick={() => {
                                        navigate("/signup")
                                    }}
                                    style={{
                                        cursor: "pointer"
                                    }}
                                >
                                    <span style={{ color: "#7367F0" }} >&nbsp;Create an account</span>
                                </span>
                            </p>
                        </form>

                        <div class="flex-align-center gap10">
                            <Facebook />
                            <Twitter />
                            <Gmail />
                            <Github />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SigninForm
