import joblib
import numpy as np

# Load the model from file
MODEL_PATH_1 = 'models/drought_rf_class_model.joblib'
rf_class = joblib.load(MODEL_PATH_1)

MODEL_PATH_2 = 'models/drought_rf_reg_model.joblib'
rf_reg = joblib.load(MODEL_PATH_2)

def preprocess_date(date_str):
    """Convert the input date string into a pandas datetime object."""
    return pd.to_datetime(date_str, format='%Y-%m-%d')

def prepare_features(date, df):
    """Prepare features for prediction based on the date."""
    # Ensure the date is within the data range
    if date < df['Date'].min() or date > df['Date'].max():
        raise ValueError("Date is out of the range of the dataset.")

def predict(date_str):
    # Preprocess date
    date = preprocess_date(date_str)
    
    # Prepare features
    X = prepare_features(date, df)
    
    # Predict drought status
    drought_prediction = rf_class.predict(X)[0]
    drought_status = 'Yes' if drought_prediction == 1 else 'No'
    
    if drought_status == 'Yes':
        # Predict drought duration
        drought_duration = rf_reg.predict(X)[0]
        return drought_status, drought_duration
    else:
        return drought_status, None