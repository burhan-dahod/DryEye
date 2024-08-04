import joblib
import numpy as np
import pandas as pd

# Load the model from file
MODEL_PATH_1 = 'models/drought_rf_class_model.joblib'
rf_class = joblib.load(MODEL_PATH_1)
print("Loaded first model")
MODEL_PATH_2 = 'models/drought_rf_reg_model.joblib'
rf_reg = joblib.load(MODEL_PATH_2)




def predict(date_str):
    # Preprocess date
    
    print("TEST_____________")
    # Prepare features
    X = date_str
    
    # Predict drought status
    drought_prediction = rf_class.predict(X)[0]
    drought_status = 'Yes' if drought_prediction == 1 else 'No'
    
    if drought_status == 'Yes':
        # Predict drought duration
        drought_duration = rf_reg.predict(X)[0]
        return drought_status, drought_duration
    else:
        return drought_status, None