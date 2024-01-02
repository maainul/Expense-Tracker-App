import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../../../Services/API"
import axios from 'axios';
import { toast } from 'react-toastify';
import './SignupForm.css'
import Submit from './../../Buttons/Submit';
import Facebook from "../../SocialIcons/Facebook";
import Gmail from "../../SocialIcons/Gmail";
import Github from "../../SocialIcons/Github";
import Twitter from "../../SocialIcons/Twitter";
import BrandLogo from './../../Logos/BrandLogo/BrandLogo';
import BrandTitle from "../../BrandTitle/BrandTitle";
import SignupImage from './../../SignupImage/SignupImage';

const SignupForm = () => {
    const [email, setEmail] = useState()
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()


    // handle Change 
    const handleChange = (e) => {
        const { id, value } = e.target
        switch (id) {
            case 'username':
                setUserName(value)
                break;
            case 'email':
                setEmail(value)
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
                navigate('/')
                toast.success('Signup Successfull')
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
                        <SignupImage />
                    </div>
                </div>

                <div className="right-div">
                    <div className="loginform">
                        <h2 class="card-title">Adventure starts here 🚀</h2>
                        <p class="card-text">Make your app management easy and fun!</p>
                        <form onSubmit={handleSubmit}>
                            <div className="formgroup">
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='text'
                                    placeholder='Enter email'
                                    value={email}
                                    id='email'
                                    onChange={handleChange}
                                />
                                {errors.map((error) => error.field === 'email' && <div style={{ color: 'red' }} >{error.error}</div>)}
                            </div>
                            <div className="formgroup">
                                <label htmlFor='username'>Username</label>
                                <input
                                    type='text'
                                    placeholder='Enter username'
                                    value={username}
                                    id='username'
                                    onChange={handleChange}
                                />
                                {errors.map((error) => error.field === 'username' && <div style={{ color: 'red' }} >{error.error}</div>)}
                            </div>
                            <div className="grid-column-2" >
                                <div className="formgroup">
                                    <label htmlFor='password'>Password</label>
                                    <input
                                        type='text'
                                        placeholder='Enter password'
                                        value={password}
                                        id='password'
                                        onChange={handleChange}
                                    />
                                    {errors.map((error) => error.field === 'password' && <div style={{ color: 'red' }} >{error.error}</div>)}
                                </div>
                                <div className="formgroup">
                                    <label htmlFor='password'>Confirm Password</label>
                                    <input
                                        type='text'
                                        placeholder='Enter password'
                                        value={password}
                                        id='password'
                                        onChange={handleChange}
                                    />
                                    {errors.map((error) => error.field === 'password' && <div style={{ color: 'red' }} >{error.error}</div>)}
                                </div>
                            </div>
                            <p className="remember-me"><span>I agree to privacy policy & terms</span></p>
                            <div>
                                <Submit title={"Sign up"} />
                            </div>
                            <p className="create-account"><span>Already have an account?</span><a className="crt-text" href="auth-register-cover.html"><span>&nbsp;Sign in instead</span></a></p>
                        </form>

                        <div class="auth-footer-btn">
                            <Facebook />
                            <Twitter />
                            <Gmail />
                            <Github />
                        </div>
                    </div>
                </div >

            </div >
        </>
    )
}

export default SignupForm