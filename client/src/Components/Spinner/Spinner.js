import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(`Counter Value : ${count}`)
    console.log(`Navigate Information  : ${JSON.stringify(navigate, null, 4)}`)
    console.log(`Location information  : ${JSON.stringify(location, null, 4)}`)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue);
        }, 1000);
        count === 0 &&
            navigate("/signin", {
                state: location.pathname,
            });
        return () => clearInterval(interval);
    }, [count, navigate, location]);
    return (
        <>
            <div style={{ height: "100vh" }} >
                <h1 className="Text-center">redirecting to you in {count} second </h1>
                <div>
                    <span>Loading...</span>
                </div>
            </div>
        </>
    );
};

export default Spinner;