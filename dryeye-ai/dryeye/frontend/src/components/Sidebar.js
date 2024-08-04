import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../components/logo4.png';

const Sidebar = ({ isOpen, toggleSidebar }) => (
    <>
        <button className="Sidebar-toggle" onClick={toggleSidebar}>
            <div className="Sidebar-toggle-lines"></div>
            <div className="Sidebar-toggle-lines"></div>
            <div className="Sidebar-toggle-lines"></div>
        </button>
        <div className={`Sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="Sidebar-header">
                <img src={logo} alt="DryEye AI Logo" className="Sidebar-logo" />
            </div>
            <nav>
                <ul>
                    <li><Link to="/" className="Sidebar-link"><i className="fas fa-home"></i> Home</Link></li>
                    <li><Link to="/home" className="Sidebar-link"><i className="fas fa-th"></i> Overview</Link></li>
                    <li><Link to="/manual" className="Sidebar-link"><i className="fas fa-upload"></i> Manual Prediction</Link></li>
                    <li><Link to="/automatic-prediction" className="Sidebar-link"><i className="fas fa-sync"></i> Automatic Prediction</Link></li>
                </ul>
            </nav>
        </div>
    </>
);

export default Sidebar;
