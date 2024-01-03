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
import BrandLogo from './../../Logos/BrandLogo/BrandLogo';
import BrandTitle from "../../BrandTitle/BrandTitle";
import SignupImage from './../../SignupImage/SignupImage';
import Input from "../../Input/Input";

const SignupForm = () => {
    const [email, setEmail] = useState()
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(API.SIGNUP_URL, {
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
        <>
            <div className="auth-inner">
                <div className="left-div">
                    <div className="brand-logo-text">
                        <BrandLogo />
                        <BrandTitle />
                    </div>
                    <div className="flex-align-center">
                        <SignupImage />
                    </div>
                </div>

                <div className="right-div">
                    <div className="formContainer">
                        <div className="form-header">
                            <h2 class="text-primary">Adventure starts here 🚀</h2>
                            <p class="text-secondary padddingBottom20">Make your app management easy and fun!</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <Input
                                type='text'
                                fieldName='email'
                                placeholder='Enter Email'
                                state={email}
                                setState={setEmail}
                                errorState={errors}
                                label={true}
                            />
                            <Input
                                type='text'
                                fieldName='username'
                                placeholder='Enter username'
                                state={username}
                                setState={setUserName}
                                errorState={errors}
                                label={true}
                            />

                            <div className="grid-column-2" >
                                <Input
                                    type='text'
                                    fieldName='password'
                                    placeholder='Enter password'
                                    state={password}
                                    setState={setPassword}
                                    errorState={errors}
                                    label={true}
                                />
                                <Input
                                    type='text'
                                    fieldName='password'
                                    placeholder='Enter confirm password'
                                    state={password}
                                    setState={setPassword}
                                    errorState={errors}
                                    label={true}
                                />

                            </div>
                            <p className="text-secondary">
                                <span>
                                    I agree to <span className="text-secondary text-deco-color" >privacy policy & terms</span>
                                </span>
                            </p>
                            <div>
                                <Submit title={"Sign up"} />
                            </div>
                            <p className="text-secondary center">
                                <span>
                                    Already have an account?

                                </span>
                                <a
                                    className="text-secondary text-deco-color"
                                    href={"/signin"}>
                                    <span>&nbsp;Sign in instead</span>
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
                </div >

            </div >
        </>
    )
}

export default SignupForm