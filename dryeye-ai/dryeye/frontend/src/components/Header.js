import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>DryEye AI</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/prediction">Prediction</Link>
        </nav>
    </header>
);

export default Header;
