import joblib
import numpy as np
import pandas as pd
import json
from datetime import datetime

# Load the classification and regression models
MODEL_PATH_CLASS = 'C:/Users/ammar/OneDrive/Desktop/DryEye AI/DryEye/dryeye-ai/dryeye/main/ml_models/models/drought_rf_class_model.joblib'
rf_class = joblib.load(MODEL_PATH_CLASS)

MODEL_PATH_REG = 'C:/Users/ammar/OneDrive/Desktop/DryEye AI/DryEye/dryeye-ai/dryeye/main/ml_models/models/drought_rf_reg_model.joblib'
rf_reg = joblib.load(MODEL_PATH_REG)

# Load the dataset to get SPI values (if needed for feature extraction)
DATA_PATH = 'C:/Users/ammar/OneDrive/Desktop/DryEye AI/DryEye/dryeye-ai/dryeye/main/ml_models/dra_export_257040.csv'
df = pd.read_csv(DATA_PATH)
df['Date'] = pd.to_datetime(df['Date'], format='%m/%d/%Y %I:%M:%S %p')

def preprocess_date(date_str):
    """Convert the input date string into a pandas datetime object."""
    return pd.to_datetime(date_str, format='%Y-%m-%d')

def prepare_features(date, df):
    """Prepare features for prediction based on the date."""
    # Find the SPI value for the given date
    spi_values = df[df['Date'] == date]['SPI'].values
    
    # Handle case where SPI value is not available for the date
    if len(spi_values) == 0:
        # For example, use the mean SPI value from the dataset
        spi_value = df['SPI'].mean()
    else:
        spi_value = spi_values[0]
    
    # Create feature array
    return np.array([[spi_value]])

def predict_drought(date_str):
    """Predict drought status and duration."""
    try:
        # Preprocess date
        date = preprocess_date(date_str)
        
        # Prepare features
        X = prepare_features(date, df)
        
        # Predict drought status
        drought_prediction = rf_class.predict(X)[0]
        drought_status = 'Yes' if drought_prediction == 1 else 'No'
        
        result = {
            "drought_status": drought_status
        }
        
        if drought_status == 'Yes':
            # Predict drought duration
            drought_duration = rf_reg.predict(X)[0]
            result["drought_duration"] = f"{drought_duration:.2f} months"
        
        # Convert the result dictionary to a JSON string
        return json.dumps(result)
    
    except Exception as e:
        return json.dumps({"error": str(e)})
