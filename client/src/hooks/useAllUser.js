import { useEffect, useState } from "react"
import { R_USR_URL } from "API"



export const useAllUser = () => {
    const [userList, setAllUserList] = useState([])
    const getAllUserList = async () => {
        try {
            const ulist = await R_USR_URL
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