# Create Private Routes 

### Backend Routes : const AUTH_URL = 'http://localhost:8081/api/v1/auth/user-auth'

1. Define Route in App.js

 ```js
import './App.css';
import User from './pages/User/User';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Expense from './pages/Expense/Expense';
import Profile from './pages/Profile/Profile';
import Signup from './pages/Auth/Signup/Signup';
import Signin from './pages/Auth/Signin/Signin';
import { Routes, Route } from 'react-router-dom';
import Analytics from './pages/Analytics/Analytics';
import ExpenseTypes from './pages/ExpeseTypes/ExpenseTypes';
import Dashboard from './pages/User/Dashboard';
import PrivateRoute from './Components/Routes/Private';

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/signin'} element={<Signin />} />

        // This is Private and Nested Route
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>

        <Route path={'/dashboard/profile'} element={<Profile />} />
        <Route path={'/dashboard/about'} element={<About />} />
        <Route path={'/dashboard/expense'} element={<Expense />} />
        <Route path={'/dashboard/expense-type'} element={<ExpenseTypes />} />
        <Route path={'/dashboard/analytics'} element={<Analytics />} />
        <Route path={'/dashboard/user-list'} element={<User />} />

      </Routes>
    </>
  );
}

export default App;

```

2. Private Route Define : Utility Functions for Private Route

```js
import axios from "axios";
import API from "../../Services/API";
import { Outlet } from "react-router-dom";
import Spinner from './../Spinner/Spinner';
import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";


export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();
    console.log(`Authtecation Information Private Routes : ${auth}`)
    useEffect(() => {
        const authCheck = async () => {
            console.log("Private Route Excess")
            const res = await axios.get(API.AUTH_URL);
            console.log(`Respose From Route ${JSON.stringify(res, null, 4)}`)
            if (res.data.ok) {
                console.log(`Set Res Data : ${res.data.ok} Success`)
                setOk(true);
            } else {
                console.log(`Set Res Data : ${res.data.ok} Failed`)
                setOk(false);
            }
        };
        console.log(`Auth Token available Check - ${auth?.token}`)
        if (auth?.token) authCheck();
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner />;
}
```

3. Define Spinner For Redirect : Page 
```js
import axios from "axios";
import API from "../../Services/API";
import { Outlet } from "react-router-dom";
import Spinner from './../Spinner/Spinner';
import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";


export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();
    console.log(`Authtecation Information Private Routes : ${auth}`)
    useEffect(() => {
        const authCheck = async () => {
            console.log("Private Route Excess")
            const res = await axios.get(API.AUTH_URL);
            console.log(`Respose From Route ${JSON.stringify(res, null, 4)}`)
            if (res.data.ok) {
                console.log(`Set Res Data : ${res.data.ok} Success`)
                setOk(true);
            } else {
                console.log(`Set Res Data : ${res.data.ok} Failed`)
                setOk(false);
            }
        };
        console.log(`Auth Token available Check - ${auth?.token}`)
        if (auth?.token) authCheck();
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner />;
}
```

4. Create Backend Route For Handle Request

```js

// PROTECTED ROUTES : (PRIVATE ROUTE CONFIRM)
router.get('/auth/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true })
})

```
You Will Have Dashboard Private Routes. Without Signin it is not possible to access Dashboard