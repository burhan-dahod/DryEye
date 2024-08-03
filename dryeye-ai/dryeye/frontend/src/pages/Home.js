import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="Home">
            <div className="Hero-section">
                <h2>Welcome to DryEye AI</h2>
                <p>
                    Our AI-powered tool provides accurate drought predictions to help
                    governments and communities prepare and respond effectively.
                </p>
                <button onClick={() => handleNavigate('/prediction')} className="Home-button">
                    Get Started
                </button>
            </div>
            <section className="Features-section">
                <h2>Features</h2>
                <ul>
                    <li>Accurate Predictions</li>
                    <li>Real-Time Data</li>
                    <li>User-Friendly Interface</li>
                </ul>
            </section>
        </div>
    );
};

export default Home;
