import axios from "axios";
import API from "../../Services/API";
import { Outlet } from "react-router-dom";
import Spinner from './../Spinner/Spinner';
import { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";


export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();
    useEffect(() => {
        const authCheck = async () => {
            console.log("Private authCheck() Function Excess");
            const res = await axios.get(API.AUTH_URL);
            console.log(`Response From Route ${JSON.stringify(res.data, null, 4)}`); // Log the response data
            if (res.data.ok) {
                console.log(`Set Res Data: ${res.data.ok} Success`);
                setOk(true);
            } else {
                console.log(`Set Res Data: ${res.data.ok} Failed`);
                setOk(false);
            }
        };
        if (auth?.token) authCheck();
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner />;
}
