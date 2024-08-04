import React, { useState, useEffect } from "react";
import axios from "axios";

const AutomaticPrediction = () => {
  const [weatherStations, setWeatherStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch weather stations from an API or define them here
    const fetchWeatherStations = async () => {
      try {
        const stations = [
          { id: 1, name: "Station 1" },
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

    if (stationId) {
      try {
        const response = await axios.post("/api/predict/", {
          //   station_id: stationId,
          station_id: "2012-11-01",
        });
        setPrediction(response.data.prediction);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching prediction:", error);
        setError("Failed to fetch prediction. Please try again.");
        setPrediction(null); // Clear previous prediction
      }
    } else {
      setPrediction(null); // Clear prediction if no station is selected
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
      {prediction !== null && (
        <div>
          <h2>Prediction</h2>
          <p>{prediction}</p>
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
