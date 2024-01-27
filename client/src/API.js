import axios from "axios";

const api = axios.create({
    // baseURL: process.env.API_BASE_URL
    baseURL: 'http://10.3.220.39:8080/api'
})

api.interceptors.request.use(
    (config) =>{
        const token = localStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) =>{
        return Promise.reject(error)
    }
)


// API EndPoints

export const signin = (username,password) =>{
    return api.post('/v1/auth/signin',{username,password})
}

export const signup = (email, username, password) => {
    return api.post('/v1/auth/signup', { email, username, password });
}

export const getUser = () =>{
    return api.get('/user')
}

export const deleteUser = (userId) =>{
    return api.delete(`/user/${userId}`)
}

export const  HOME_URL= () =>{
    return api.get('/v1/home')
}

export const  USER_AUTH_URL= () =>{
    return  api.get('/v1/auth/user-auth')
}

export const  ADMIN_AUTH_URL=  () =>{
    return api.get('/v1/auth/admin-auth')
}

export const  U_USR_URL= () =>{
    return api.get('/v1/user/update')
}

export const  R_USR_URL= () =>{ 
    return api.get('/v1/user/list')
}

export const  R_SINGLE_URL= () =>{
    return api.get('/v1/user/info')
}

export const  C_Exp_TYP_URL= () =>{
    return api.post('/v1/expense-type/create')
}

export const  R_EX_TYP_URL= () =>{
    return api.get('/v1/expense-type/read/all')
}

export const  C_EXP_URL= () =>{
    return api.post('/v1/expense/create')
}

export const  R_EXP_ALL_URL= () =>{
    return api.get('/v1/expense/read/all')
}

export const  R_SINGLE_EXP_URL= () =>{
    return api.get('/v1/expense/read/:id')
}

export const  U_SINGLE_EXP= () =>{
    return api.put('/expense/update/:id')
}


export const  D_SINGLE_EXP= () =>{
    return api.delete('/expense/delete/:id')
}

export const  R_US= () =>{
    return api.get('/user/subscribe')
}

export const  R_US_VER= () =>{
    return api.get('/user/verify')
}

export const  U_UNSUB= () =>{
    return api.get('/user/unsubscribey')
}

export const  ABOUT= () =>{
    return api.get('/about')
}

export const  R_SINGLE_ABOUT= () =>{
    return api.get('/about/:id')
}

export const  TOP_10_EXP_URL= () =>{
    return api.get('/v1/analytics/top-10-expense')
}


export const  DAILY_EXP_URL= () =>{
    return api.get('/v1/analytics/daily-expense')
}

export const  CUR_WEEK_EXP_URL= async () =>{
    return await api.get('/v1/analytics/current-week-expense')
}

export const  CUR_MONTH_EXP_URL= () =>{
    return api.get('/v1/analytics/current-month-expense')
}
export const  CUR_YEAR_EXP_URL= () =>{
    return api.get('/v1/analytics/current-year-expense')
}

export const  CAT_WISE_EXP_URL= () =>{
    return api.get('/v1/analytics/credit-debit-expense')
}

export const  EXP_TYP_WISE_URL= async() =>{
    return  await api.get('/v1/analytics/expense-type-wise')
}


export default api
