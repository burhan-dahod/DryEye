import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StartPage.css'; // Ensure this CSS file exists and is styled accordingly

const StartPage = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/home'); // Redirect to Home page on button click
    };

    return (
        <div className="StartPage">
            <div className="StartPage-content">
                <h1 className="StartPage-title">DryEye AI</h1>
                <p className="StartPage-description">
                    Welcome to DryEye AI, your tool for accurate drought predictions and climate-smart agriculture.
                </p>
                <button onClick={handleNavigate} className="StartPage-button">
                    Try Now
                </button>
            </div>
        </div>
    );
};

export default StartPage;
