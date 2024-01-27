import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "context/authContext";
import axios from "axios";
import { ADMIN_AUTH_URL } from "api/auth";
import Spinner from "components/spinner/Spinner";


export default function AdminPrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth();
    useEffect(() => {
        const authCheck = async () => {
            console.log("Private authCheck() Function Excess");
            const res = await axios.get(ADMIN_AUTH_URL);
            console.log(`Response From Route ${JSON.stringify(res.data, null, 4)}`); // Log the response data
            if (res.data.ok) {
                console.log(`Admin Private Route Success Info:  ${res.data.ok} Success`);
                setOk(true);
            } else {
                console.log(`Admin Private Route Error Info: ${res.data.ok} Failed`);
                setOk(false);
            }
        };
        if (auth?.token) authCheck();
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner path="" />;
}
