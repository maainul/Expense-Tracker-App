import React from 'react'
import { useAuth } from '../../context/auth';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1>Landing Page of App</h1>
            <h1>Welcome to Extra</h1>
            <Link to="/signin">Siginin</Link>
            <h2> You don't have any account then sigin up </h2>
            <Link to="/signup">Siginin</Link>
        </>
    )
}

export default Home