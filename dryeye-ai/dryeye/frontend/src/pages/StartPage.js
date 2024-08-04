import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StartPage.css';
import logo from '../components/logo3.png';

const StartPage = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/home');
    };

    return (
        <div className="StartPage">
            <div className="StartPage-content">
                <img src={logo} alt="DryEye AI Logo" className="StartPage-logo" />
                <p className="StartPage-tagline">Ammar Hakim, Mohamed Eltaib, Burhanuddin Dahodwala, Karishvan Ragunathan</p>
                <p className="StartPage-description">
                    Welcome to DryEye AI, your tool for accurate drought predictions and climate-smart agriculture.
                    Explore how our technology can help you make informed decisions and prepare for future challenges.
                </p>
                <button onClick={handleNavigate} className="StartPage-button">
                    Explore
                </button>
                <div className="StartPage-features">
                    <h2>Features</h2>
                    <ul>
                        <li>Machine Learning Drought Predictions</li>
                        <li>Computer Vision Drought Analysis </li>
                        <li>Real-time Data Analysis</li>
                        <li>User-Friendly Interface</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StartPage;
