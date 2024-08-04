import React, { useState } from 'react';
import axios from 'axios';
import imageCompression from 'browser-image-compression';
import './ManualPage.css';

const ManualPage = () => {
    const [image, setImage] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imageURL, setImageURL] = useState(null);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const options = {
                    maxSizeMB: 9,
                    maxWidthOrHeight: 3000,
                    useWebWorker: true,
                };
                const compressedFile = await imageCompression(file, options);
                setImage(compressedFile);
                setImageURL(URL.createObjectURL(compressedFile));
            } catch (error) {
                console.error('Error compressing image:', error);
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!image) {
            alert('Please upload an image first.');
            return;
        }
        setLoading(true);
        const formData = new FormData();
        formData.append('file', image);

        console.log('Submitting form...');

        try {
            const response = await axios.post(
                'https://classify.roboflow.com/drought-detectiom-utufi/1?api_key=B0Rb5LrPmBpljkaBSucy',
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ARVONcsjz5R6slVVyLDI`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            console.log('Response received:', response.data);
            setResult(response.data);
        } catch (error) {
            console.error('Error making prediction:', error.response ? error.response.data : error.message);
            alert('An error occurred. Please check the console for details.');
        } finally {
            setLoading(false);
            console.log('Request completed');
        }
    };

    const getConfidenceColor = (confidence) => {
        return confidence >= 0.75 ? 'green' : 'red';
    };

    const formatConfidence = (confidence) => {
        return `${(confidence * 100).toFixed(2)}%`;
    };

    return (
        <div className="manual-page">
            <div className="content-container">
                <h2>Manual Prediction</h2>
                <p>Upload an image to classify drought conditions.</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        Upload Image:
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                    </label>
                    <button type="submit" disabled={loading} className="submit-button">
                        {loading ? 'Processing...' : 'Predict'}
                    </button>
                </form>
                {loading && <div className="spinner"></div>}
                {imageURL && (
                    <div className="uploaded-image">
                        <h3>Uploaded Image</h3>
                        <img src={imageURL} alt="Uploaded" />
                    </div>
                )}
                {result && (
                    <div className="result">
                        <h3>Prediction Results</h3>
                        <p>
                            <strong>Top Prediction:</strong> {result.predicted_classes[0]}
                        </p>
                        <p>
                            <strong>Confidence: </strong>
                            <span style={{ color: getConfidenceColor(result.predictions[result.predicted_classes[0]].confidence) }}>
                                {formatConfidence(result.predictions[result.predicted_classes[0]].confidence)}
                            </span>
                        </p>
                        <p><strong>Predictions:</strong></p>
                        <ul>
                            {Object.keys(result.predictions).map((key, index) => (
                                <li key={index}>
                                    <span>{key}:</span>
                                    <span style={{ color: getConfidenceColor(result.predictions[key].confidence) }}>
                                        {formatConfidence(result.predictions[key].confidence)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManualPage;
