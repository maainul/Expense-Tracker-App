import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../../../Services/API"
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Submit from './../../Buttons/Submit';
import Facebook from "../../SocialIcons/Facebook";
import Gmail from "../../SocialIcons/Gmail";
import Github from "../../SocialIcons/Github";
import Twitter from "../../SocialIcons/Twitter";
import BrandLogo from "../../Logos/BrandLogo/BrandLogo";
import BrandTitle from "../../BrandTitle/BrandTitle";
import Signinimage from "../../SIgninImage/Signinimage";
import Input from "../../Input/Input";

const SigninForm = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(API.SIGNIN_URL, {
                username,
                password,
            })
            if (res.data.errors) {
                setErrors(res.data.errors)
            } else {
                setErrors([])
                setUserName('')
                setPassword('')
                navigate('/')
                toast.success('Login Successfull')
            }
        } catch (error) {
            console.log(`Invalid Request : ${error}`)
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
                            <h2 class="text-primary">Welcome to Vuexy! 👋</h2>
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
                            />
                            <div className="formgroup">
                                <div className="grid-col-2-space-between">
                                    <label htmlFor="password" >password</label>
                                    <a className="text-deco-color" href="/">Forgot Password ?</a>
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
                                <a
                                    className="text-secondary text-deco-color"
                                    href={"/signup"}
                                >
                                    <span>&nbsp;Create an account</span>
                                </a>
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