import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import StartPage from './StartPage';
import Home from './Home';
import Prediction from './Prediction';
import Dashboard from './Dashboard';

import './App.css';

function App() {
  const location = useLocation();
  const isStartPage = location.pathname === '/';

  return (
    <div className="App">
      {!isStartPage && <Sidebar />} {/* Conditionally render Sidebar */}
      <div className={`App-body ${isStartPage ? 'StartPage-body' : ''}`}>
        <main className="App-content">
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
