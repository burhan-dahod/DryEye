import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import StartPage from "./StartPage";
import Home from "./Home";
import AutomaticPrediction from "./AutomaticPrediction";
import ManualPage from './ManualPage';
import MapComponent from "../components/MapComponent";

import "./App.css";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isStartPage = location.pathname === "/";

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      {!isStartPage && (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      <div className={`App-body ${isStartPage ? "StartPage-body" : ""}`}>
        <main className="App-content">
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/manual" element={<ManualPage />} /> {/* Add route for ManualPage */}
            <Route path="/map" element={<MapComponent />} /> {/* Add route for ManualPage */}
            <Route
              path="/automatic-prediction"
              element={<AutomaticPrediction />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
