import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from 'components/spinner/Spinner';
import { useAuth } from "context/authContext";
import axios from "axios";
import { USER_AUTH_URL } from "api/auth";


export default function UserPrivateRoute() {
    const [auth] = useAuth()
    const [ok, setOk] = useState(false);

    useEffect(() => {
        const authCheck = async () => {
            console.log("Private authCheck() Function Start Execution..");
            const res = await axios.get(USER_AUTH_URL);
            console.log(res);
            console.log("...............................................");
            console.log("Data From Server.........");
            if (res.data.ok) {
                console.log(`Response From User Private Route Success : ${JSON.stringify(res.data, null, 4)}`); // Log the response data
                console.log(`Set Res Data: ${res.data.ok} Success`);
                setOk(true);
            } else {
                console.log(`User Private Route Error and Error data: ${res.data.ok} Failed`);
                setOk(false);
            }
        };
        if (auth?.token) authCheck();
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner path="" />;
}
