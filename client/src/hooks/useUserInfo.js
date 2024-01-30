// 
import { useEffect, useState } from 'react'

// 
import axios from 'axios'

// api
import { R_SINGLE_URL } from "api/auth";

export const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState()

    const getUserInfo = async () => {
        try {
            const userInfo = await axios.get(R_SINGLE_URL)
            console.log("################## USER INFO DATA ###########################")
            console.log(useUserInfo)
            console.log("################## USER INFO DATA ###########################")
            setUserInfo(userInfo.data.data)
        } catch (error) {
            console.log(`Error While Fetch User Info`)
        }
    }

    useEffect(() => {
        getUserInfo();
    }, [])

    return {userInfo,getUserInfo}
}
