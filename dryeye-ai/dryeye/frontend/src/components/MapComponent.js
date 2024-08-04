// frontend/src/components/MapComponent.js
import React, { useState } from 'react';
import './MapComponent.css'; // For any necessary CSS
import mapTemplate from '../images/b2.png'

const MapComponent = () => {
  const [pinPosition, setPinPosition] = useState(null);
  const [gradientResult, setGradientResult] = useState('');

  const handleMapClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setPinPosition({ x: offsetX, y: offsetY });

    // Send coordinates to backend
    fetch('http://localhost:8000/api/save-pin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ x: offsetX, y: offsetY }),
    })
      .then(response => response.json())
      .then(data => setGradientResult(data.gradient))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="map-container">
      <img
        src={mapTemplate} // Path to your US map image
        alt="US Map"
        onClick={handleMapClick}
        style={{ width: '100%', height: 'auto' }}
      />
      {pinPosition && (
        <div
          className="pin"
          style={{ left: pinPosition.x, top: pinPosition.y }}
        >
          📍
        </div>
      )}
      {gradientResult && <div>Gradient Result: {gradientResult}</div>}
    </div>
  );
};

export default MapComponent;
