import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Home from './Home';
import Prediction from './Prediction';
import Dashboard from './Dashboard';

import './App.css';


function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Sidebar />
        <main className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
