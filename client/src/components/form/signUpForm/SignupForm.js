import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-hot-toast';
import axios from "axios";
import { SIGNUP_URL } from 'api/auth';
import BrandLogo from "components/logos/brandLogo/BrandLogo";
import BrandTitle from "components/brandTitle/BrandTitle";
import SignupImae from "pages/auth/signup/SignupImage";
import Input from "components/Input/Input";
import Facebook from "components/socialIcons/Facebook";
import Twitter from "components/socialIcons/Twitter";
import Gmail from "components/socialIcons/Gmail";
import Github from "components/socialIcons/Github";
import Submit from "components/buttons/Submit";



const SignupForm = () => {
    const [email, setEmail] = useState()
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setCofirmpassword] = useState()
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log('############# sign up####################')
        e.preventDefault()
        if (password !== confirmPassword) {
            setErrors(["Passwords do not match"]);
            return;
        }
        try {
            const res = await axios.post(SIGNUP_URL, {
                email,
                username,
                password,
            })
            if (res.data.errors) {
                setErrors(res.data.errors)
            } else {
                toast.success(res.data && res.data.message);
                navigate('/signin')
            }
        } catch (error) {
            console.log(`Invalid Request : ${error}`)
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
                        <SignupImae />
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
                                labelTitle={"EMAIL"}
                            />
                            <Input
                                type='text'
                                fieldName='username'
                                placeholder='Enter username'
                                state={username}
                                setState={setUserName}
                                errorState={errors}
                                label={true}
                                labelTitle={"USERNAME"}
                            />

                            <div className="grid-column-2" >
                                <Input
                                    type='password'
                                    fieldName='password'
                                    placeholder='Enter password'
                                    state={password}
                                    setState={setPassword}
                                    errorState={errors}
                                    label={true}
                                    labelTitle={"PASSWORD"}
                                />
                                <Input
                                    type='password'
                                    fieldName='confirmPassword'
                                    placeholder='Enter confirm password'
                                    state={confirmPassword}
                                    setState={setCofirmpassword}
                                    errorState={errors}
                                    label={true}
                                    labelTitle={"CONFIRM PASSWORD"}
                                />
                            </div>
                            <p className="text-secondary">
                                <span>
                                    I agree to <span className="text-secondary text-deco-color" style={{ color: "#7367F0" }}>privacy policy & terms</span>
                                </span>
                            </p>
                            <div>
                                <Submit title={"Sign up"} />
                            </div>
                            <p className="text-secondary center">
                                <span>
                                    Already have an account?

                                </span>
                                <span
                                    className="text-secondary text-deco-color"
                                    onClick={() => {
                                        navigate("/signin")
                                    }}
                                    style={{
                                        cursor: "pointer"
                                    }}
                                >
                                    <span style={{ color: "#7367F0" }}>&nbsp;Sign in instead</span>
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
                </div >

            </div >
        </>
    )
}

export default SignupForm