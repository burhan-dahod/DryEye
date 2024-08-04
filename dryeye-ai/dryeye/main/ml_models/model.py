import joblib
import numpy as np
import pandas as pd
# Load the model from file
MODEL_PATH_1 = 'C:/Users/ammar/OneDrive/Desktop/DryEye AI/DryEye/dryeye-ai/dryeye/main/ml_models/models/drought_rf_reg_model.joblib'
rf_class = joblib.load(MODEL_PATH_1)

MODEL_PATH_2 = 'C:/Users/ammar/OneDrive/Desktop/DryEye AI/DryEye/dryeye-ai/dryeye/main/ml_models/models/drought_rf_reg_model.joblib'
rf_reg = joblib.load(MODEL_PATH_2)

def preprocess_date(date_str):
    """Convert the input date string into a pandas datetime object."""
    return pd.to_datetime(date_str, format='%Y-%m-%d')

def predict(date_str):
    # Prepare features
    X = preprocess_date(date_str)
    
    # Predict drought status
    drought_prediction = rf_class.predict(X)[0]
    drought_status = 'Yes' if drought_prediction == 1 else 'No'
    
    if drought_status == 'Yes':
        # Predict drought duration
        drought_duration = rf_reg.predict(X)[0]
        return drought_status, drought_duration
    else:
        return drought_status, None