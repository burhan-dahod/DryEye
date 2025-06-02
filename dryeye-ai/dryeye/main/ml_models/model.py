import joblib
import numpy as np
import pandas as pd
import json
import os
from datetime import datetime

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

MODEL_PATH_CLASS = os.path.join(BASE_DIR, 'models', 'drought_rf_class_model.joblib')
MODEL_PATH_REG = os.path.join(BASE_DIR, 'models', 'drought_rf_reg_model.joblib')
DATA_PATH = os.path.join(BASE_DIR, 'dra_export_257040.csv')

rf_class = joblib.load(MODEL_PATH_CLASS)
rf_reg = joblib.load(MODEL_PATH_REG)

# Load CSV and parse dates
df = pd.read_csv(DATA_PATH)
df['Date'] = pd.to_datetime(df['Date'], format='%m/%d/%Y %I:%M:%S %p')

def preprocess_date(date_str):
    """Convert the input date string into a pandas datetime object."""
    return pd.to_datetime(date_str, format='%Y-%m-%d')

def prepare_features(date, df):
    """Prepare features for prediction based on the date."""
    spi_values = df[df['Date'] == date]['SPI'].values
    
    if len(spi_values) == 0:
        spi_value = df['SPI'].mean()
    else:
        spi_value = spi_values[0]
    
    return np.array([[spi_value]])

def predict_drought(date_str):
    """Predict drought status and duration."""
    try:
        date = preprocess_date(date_str)
        
        X = prepare_features(date, df)
        
        drought_prediction = rf_class.predict(X)[0]
        drought_status = 'Yes' if drought_prediction == 1 else 'No'
        
        result = {
            "drought_status": drought_status
        }
        
        if drought_status == 'Yes':
            drought_duration = rf_reg.predict(X)[0]
            result["drought_duration"] = f"{drought_duration:.2f} months"
        
        return json.dumps(result)
    
    except Exception as e:
        return json.dumps({"error": str(e)})
