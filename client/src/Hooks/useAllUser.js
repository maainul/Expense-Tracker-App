import axios from "axios"
import { useEffect, useState } from "react"
import API from "../Services/API"

export const useAllUser = () => {
    const [userList, setAllUserList] = useState([])
    const getAllUserList = async () => {
        try {
            const ulist = await axios.get(API.R_USR_URL)
            console.log(ulist.data.data)
            setAllUserList(ulist.data.data)
        } catch (error) {
            console.log('User List Not Found')
        }
    }

    useEffect(() => {
        getAllUserList();
    }, [])
    return { userList }
}