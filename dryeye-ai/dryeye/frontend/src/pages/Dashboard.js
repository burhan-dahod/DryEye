// src/pages/Dashboard.js
import React from 'react';
import './Dashboard.css'; // Ensure this CSS file contains the required styles

const Dashboard = () => (
    <div className="Dashboard">
        <header className="Dashboard-header">
            <h1>DryEye AI Dashboard</h1>
        </header>
        <section className="Dashboard-overview">
            <div className="Dashboard-card">
                <h2>Drought Overview</h2>
                <p>Get insights into current drought conditions and trends.</p>
            </div>
            <div className="Dashboard-card">
                <h2>Recent Predictions</h2>
                <p>Review the latest drought predictions and their accuracy.</p>
            </div>
        </section>
        <section className="Dashboard-tools">
            <h2>Prediction Tools</h2>
            <div className="Dashboard-card">
                <h3>Automatic Prediction</h3>
                <p>Use our AI tool to automatically predict drought conditions based on data.</p>
                <button onClick={() => window.location.href = '/prediction'}>
                    Go to Automatic Predictor
                </button>
            </div>
            <div className="Dashboard-card">
                <h3>Manual Prediction</h3>
                <p>Enter your own data to manually predict drought conditions.</p>
                <button onClick={() => window.location.href = '/manual-prediction'}>
                    Go to Manual Predictor
                </button>
            </div>
        </section>
    </div>
);

export default Dashboard;
