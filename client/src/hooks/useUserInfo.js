// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import API from '../Services/API'

// const useUserInfo = () => {
//     const [userInfo, setUserInfo] = useState()

//     const getUserInfo = async () => {
//         try {
//             const userInfo = await axios.get(API.R_SINGLE_URL)
//             console.log("#############################################")
//             console.log(useUserInfo)
//             console.log("#############################################")
//             setUserInfo(userInfo.data.data)
//         } catch (error) {
//             console.log(`Error While Fetch User Info`)
//         }
//     }

//     useEffect(() => {
//         getUserInfo();
//     }, [])

//     return userInfo
// }

// export default useUserInfo