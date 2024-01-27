
// Home 
// const HOME_URL = 'http://localhost:8081/api/v1/home'
const HOME_URL = 'http://10.3.220.39:8081/api/v1/home'

// AUTH
const SIGNUP_URL = 'http://192.168.0.194:8081/api/v1/auth/signup'

// const SIGNUP_URL = 'http://10.3.220.39:8080/api/v1/auth/signup'


//const SIGNIN_URL = 'http://10.3.220.39:8081/api/v1/auth/signin'
//const SIGNIN_URL = 'http://localhost:8081/api/v1/auth/signin'
const SIGNIN_URL = 'http://192.168.0.194:8081/api/v1/auth/signin'

const USER_AUTH_URL = 'http://localhost:8081/api/v1/auth/user-auth'
// const USER_AUTH_URL = 'http://10.3.220.39:8081/api/v1/auth/user-auth'

//const ADMIN_AUTH_URL = 'http://10.3.220.39:8081/api/v1/auth/admin-auth'
const ADMIN_AUTH_URL = 'http://localhost:8081/api/v1/auth/admin-auth'

// USER
//const U_USR_URL = 'http://10.3.220.39:8081/api/v1/user/update'
const U_USR_URL = 'http://localhost:8081/api/v1/user/update'
const R_USR_URL = 'http://localhost:8081/api/v1/user/list'
//const R_USR_URL = 'http://10.3.220.39:8081/api/v1/user/list'
const R_SINGLE_URL = 'http://localhost:8081/api/v1/user/info'
//const R_SINGLE_URL = 'http://10.3.220.39:8081/api/v1/user/info'

// EXPENSE TYPE
//const C_Exp_TYP_URL = 'http://10.3.220.39:8081/api/v1/expense-type/create'
const C_Exp_TYP_URL = 'http://localhost:8081/api/v1/expense-type/create'
//const R_EX_TYP_URL = 'http://10.3.220.39:8081/api/v1/expense-type/read/all'
const R_EX_TYP_URL = 'http://localhost:8081/api/v1/expense-type/read/all'


// EXPENSE 
const C_EXP_URL = 'http://localhost:8081/api/v1/expense/create'
//const C_EXP_URL = 'http://10.3.220.39:8081/api/v1/expense/create'
const R_EXP_ALL_URL = 'http://localhost:8081/api/v1/expense/read/all'
//const R_EXP_ALL_URL = 'http://10.3.220.39:8081/api/v1/expense/read/all'
const R_SINGLE_EXP_URL = 'http://localhost:8081/api/v1/expense/read/:id'
//const R_SINGLE_EXP_URL = 'http://10.3.220.39:8081/api/v1/expense/read/:id'

const U_SINGLE_EXP = '/expense/update/:id'
const D_SINGLE_EXP = '/expense/delete/:id'


// USER SUBSCRIPTION
const R_US = '/user/subscribe'
const R_US_VER = '/user/verify'
const U_UNSUB = '/user/unsubscribe'


// ABOUT PAGE OF SITE
const ABOUT = '/about'
const R_SINGLE_ABOUT = '/about/:id'


// ANALYTICS
const TOP_10_EXP_URL = 'http://localhost:8081/api/v1/analytics/top-10-expense'
//const TOP_10_EXP_URL = 'http://10.3.220.39:8081/api/v1/analytics/top-10-expense'
const DAILY_EXP_URL = 'http://localhost:8081/api/v1/analytics/daily-expense'
//const DAILY_EXP_URL = 'http://10.3.220.39:8081/api/v1/analytics/daily-expense'
const CUR_WEEK_EXP_URL = 'http://localhost:8081/api/v1/analytics/current-week-expense'
//const CUR_WEEK_EXP_URL = 'http://10.3.220.39:8081/api/v1/analytics/current-week-expense'
const CUR_MONTH_EXP_URL = 'http://localhost:8081/api/v1/analytics/current-month-expense'
//const CUR_MONTH_EXP_URL = 'http://10.3.220.39:8081/api/v1/analytics/current-month-expense'
const CUR_YEAR_EXP_URL = 'http://localhost:8081/api/v1/analytics/current-year-expense'
// const CUR_YEAR_EXP_URL = 'http://10.3.220.39:8081/api/v1/analytics/current-year-expense'
const CAT_WISE_EXP_URL = 'http://localhost:8081/api/v1/analytics/credit-debit-expense'
// const CAT_WISE_EXP_URL = 'http://10.3.220.39:8081/api/v1/analytics/credit-debit-expense'
const EXP_TYP_WISE_URL = 'http://localhost:8081/api/v1/analytics/expense-type-wise'
//const EXP_TYP_WISE_URL = 'http://10.3.220.39:8081/api/v1/analytics/expense-type-wise'



const API = {
    C_Exp_TYP_URL,
    C_EXP_URL,
    R_USR_URL,
    USER_AUTH_URL,
    ADMIN_AUTH_URL,
    SIGNUP_URL,
    SIGNIN_URL,
    R_SINGLE_URL,
    R_EX_TYP_URL,
    R_EXP_ALL_URL,
    R_SINGLE_EXP_URL,
    R_US,
    R_US_VER,
    R_SINGLE_ABOUT,
    U_SINGLE_EXP,
    U_UNSUB,
    U_USR_URL,
    D_SINGLE_EXP,
    ABOUT,
    HOME_URL,
    TOP_10_EXP_URL,
    DAILY_EXP_URL,
    CUR_WEEK_EXP_URL,
    CUR_MONTH_EXP_URL,
    CUR_YEAR_EXP_URL,
    CAT_WISE_EXP_URL,
    EXP_TYP_WISE_URL
}

export default API
