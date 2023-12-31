import { useState } from "react"
import { useNavigate } from "react-router-dom"
import API from "../../Services/API"
import axios from 'axios';

const LoginForm = () => {
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

            }
        } catch (error) {
            console.log(`Invalid Request : ${error}`)
        }
    }

    return (
        <>
            <div>Login</div>
            <form onSubmit={handleSubmit}>
                <div>
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
                <div>
                    <label htmlFor='password'>password</label>
                    <input
                        type='text'
                        placeholder='Enter password'
                        value={password}
                        id='password'
                        onChange={handleChange}
                    />
                    {errors.map((error) => error.field === 'password' && <div style={{ color: 'red' }} >{error.error}</div>)}
                </div>
                <button type='submit' >Submit</button>
            </form>
        </>
    )
}

export default LoginForm