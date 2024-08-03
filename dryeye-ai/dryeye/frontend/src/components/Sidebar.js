import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Make sure this CSS file exists

const Sidebar = () => (
    <div className="Sidebar">
        <h1 className="Sidebar-title">DryEye AI</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/prediction">Prediction</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>


            </ul>
        </nav>
    </div>
);

export default Sidebar;
