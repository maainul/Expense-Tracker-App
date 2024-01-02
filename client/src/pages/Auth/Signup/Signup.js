import React, { useState } from 'react'
import MainLayout from '../../../Components/Layout/MainLayout/MainLayout'
import API from '../../../Services/API'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import SignupForm from '../../../Components/Form/SignUpForm/SignupForm'

const Signup = () => {





    return (

        <MainLayout>
            <SignupForm />
        </MainLayout>
    )
}

export default Signup