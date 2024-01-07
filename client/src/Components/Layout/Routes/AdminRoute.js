import axios from "axios";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from './../../Spinner/Spinner';
import { useAuth } from "../../../context/authContext";
import API from './../../../Services/API';


export default function AdminRoute() {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth();
    useEffect(() => {
        const authCheck = async () => {
            console.log("Private authCheck() Function Excess");
            const res = await axios.get(API.ADMIN_AUTH_URL);
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

    return ok ? <Outlet /> : <Spinner path="" />;
}
