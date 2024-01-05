import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        navigate("/signin", { state: location.pathname });
    }, [navigate, location]);

    return (
        <>
            <h1 style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
                Redirecting...
            </h1>
            <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
                <span>Loading...</span>
            </div>
        </>
    );
};

export default Spinner;
