
// EXPENSE TYPE
const C_Exp_TYP_URL = 'http://localhost:8081/api/v1/expense-type/create'
const C_EX_TYP = '/expense-type/create'
const R_EX_TYP_URL = 'http://localhost:8081/api/v1/expense-type/read/all'

// EXPENSE 
const C_EXP_URL = 'http://localhost:8081/api/v1/expense/create'
const R_EXP_ALL_URL = 'http://localhost:8081/api/v1/expense/read/all'
const R_SINGLE_EXP = '/expense/read/:id'
const U_SINGLE_EXP = '/expense/update/:id'
const D_SINGLE_EXP = '/expense/delete/:id'

// USER SUBSCRIPTION
const R_US = '/user/subscribe'
const R_US_VER = '/user/verify'
const U_UNSUB = '/user/unsubscribe'


// ABOUT PAGE OF SITE
const ABOUT = '/about'
const R_SINGLE_ABOUT = '/about/:id'


// USER
const C_USR = '/user/create'
const U_USR = '/user/update/:id'

const API = {
    C_Exp_TYP_URL,
    C_EX_TYP,
    R_EX_TYP_URL,

    C_EXP_URL,
    R_EXP_ALL_URL,
    R_SINGLE_EXP,
    U_SINGLE_EXP,
    D_SINGLE_EXP,

    R_US,
    R_US_VER,
    U_UNSUB,

    ABOUT,
    R_SINGLE_ABOUT,

    C_USR,
    U_USR,
}

export default API