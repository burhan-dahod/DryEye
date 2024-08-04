import React, { useState, useEffect } from "react";
import axios from "axios";
import './AutomaticPrediction.css';

const AutomaticPrediction = () => {
  const [weatherStations, setWeatherStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState("");
  const [dateInput, setDateInput] = useState(""); // State to hold the date input
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherStations = async () => {
      try {
        const stations = [
          { id: 1, name: "Salt Lake City (ID: 423929)" },
          { id: 2, name: "Station 2" },
          { id: 3, name: "Station 3" },
        ];
        setWeatherStations(stations);
      } catch (error) {
        console.error("Error fetching weather stations:", error);
      }
    };

    fetchWeatherStations();
  }, []);

  const handleStationChange = async (event) => {
    const stationId = event.target.value;
    setSelectedStation(stationId);
  };

  const handleDateChange = (event) => {
    setDateInput(event.target.value);
  };

  const fetchPrediction = async () => {
    if (selectedStation && dateInput) {
      try {
        const response = await axios.post("/api/predict/", {
          date_id: dateInput,
        });
        console.log(response.data); // Log full response
        setPrediction(response.data); // Set full response
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching prediction:", error);
        setError("Failed to fetch prediction. Please try again.");
        setPrediction(null); // Clear previous prediction
      }
    } else {
      setError("Please select a station and enter a date.");
    }
  };

  return (
    <div>
      <h1>Select Your Closest Weather Station</h1>
      <select value={selectedStation} onChange={handleStationChange}>
        <option value="">Select a station</option>
        {weatherStations.map((station) => (
          <option key={station.id} value={station.id}>
            {station.name}
          </option>
        ))}
      </select>
      <div>
        <label htmlFor="dateInput">Enter Date (YYYY-MM-DD):</label>
        <input
          type="text"
          id="dateInput"
          value={dateInput}
          onChange={handleDateChange}
          placeholder="YYYY-MM-DD"
        />
        <button onClick={fetchPrediction}>Get Prediction</button>
      </div>
      {prediction && (
        <div>
          <h2>Prediction</h2>
          <p>Drought Status: {prediction.drought_status}</p>
          {prediction.drought_duration && <p>Drought Duration: {prediction.drought_duration}</p>}
        </div>
      )}
      {error && (
        <div style={{ color: "red" }}>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default AutomaticPrediction;