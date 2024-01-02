import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../../../Services/API"
import axios from 'axios';
import { toast } from 'react-toastify';
import './SigninForm.css'
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

    // handle Change
    const handleChange = (e) => {
        const { id, value } = e.target
        switch (id) {
            case 'username':
                setUserName(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default:
                break;
        }
    }

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
                    <div className="left-big-img">
                        <Signinimage />
                    </div>
                </div>
                <div className="right-div">
                    <div className="loginform">
                        <h2 class="card-title">Welcome to Vuexy! 👋</h2>
                        <p class="card-text">Please sign-in to your account and start the adventure</p>
                        <form onSubmit={handleSubmit}>
                            <Input
                                type='text'
                                fieldName='username'
                                placeholder='Enter Username'
                                state={username}
                                setState={setUserName}
                                errorState={errors}
                            />
                            <div className="formgroup">
                                <div className="pass-forgot-pass">
                                    <label htmlFor='password'>Password</label>
                                    <a className="forgot-pass" href="/">Forgot Password ?</a>
                                </div>
                                <input
                                    type='text'
                                    placeholder='Enter password'
                                    value={password}
                                    id='password'
                                    onChange={handleChange}
                                />
                                {errors.map((error) => error.field === 'password' && <div style={{ color: 'red' }} >{error.error}</div>)}
                            </div>
                            <p className="remember-me"><span>Remember Me</span></p>
                            <Submit title={"Sign in"} />
                            <p className="create-account"><span>New on our platform?</span><a className="crt-text" href="auth-register-cover.html"><span>&nbsp;Create an account</span></a></p>
                        </form>

                        <div class="auth-footer-btn">
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