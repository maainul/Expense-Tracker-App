import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";


const Spinner = ({ path = "signin" }) => {
    const [count, setCount] = useState(3);

    const navigate = useNavigate();
    const location = useLocation();

    console.log(`Navigate Information  : ${JSON.stringify(navigate, null, 4)}`)
    console.log(`Location information  : ${JSON.stringify(location, null, 4)}`)
    console.log(`Redirect Path : ${path}`)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue);
        }, 1000);
        count === 0 && navigate('/signin', {
            state: location.pathname
        })
        // navigate(`${path}`, {
        // state: location.pathname,
        // });
        return () => clearInterval(interval);
    }, [count, navigate, location, path]);
    return (
        <>
            <div style={{ height: "100vh" }} >
                <h1>Redirecting to you in {count} Second </h1>
                <div>
                    <span>Loading...</span>
                </div>
            </div>
        </>
    );
};

export default Spinner;