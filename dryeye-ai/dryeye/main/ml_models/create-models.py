import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
from sklearn.metrics import classification_report, mean_absolute_error
import joblib

# Load the data
data_path = './dra_export_257040.csv'
df = pd.read_csv(data_path)

# Convert 'Date' to datetime with format
df['Date'] = pd.to_datetime(df['Date'], format='%m/%d/%Y %I:%M:%S %p')

# Create drought indicator (binary classification)
df['drought'] = (df['SPI'] < -1).astype(int)

# Calculate drought duration
drought_duration = []
current_duration = 0
in_drought = False
for spi in df['SPI']:
    if spi < -1:
        in_drought = True
        current_duration += 1
    elif spi < 0 and in_drought:
        current_duration += 1
    else:
        current_duration = 0
        in_drought = False
    drought_duration.append(current_duration)
df['drought_duration'] = drought_duration

# Define features and targets for classification
X_class = df[['SPI']]  # Ensure features match the ones used during training
y_class = df['drought']

# Split the data into train and test sets for classification
X_train_class, X_test_class, y_train_class, y_test_class = train_test_split(X_class, y_class, test_size=0.2, random_state=42)

# Train a Random Forest model for classification with balanced class weights
rf_class = RandomForestClassifier(n_estimators=100, random_state=42, class_weight='balanced')
rf_class.fit(X_train_class, y_train_class)

# Predict on the test set for classification
y_pred_class = rf_class.predict(X_test_class)

# Evaluate the classification model
print("Classification Report:\n", classification_report(y_test_class, y_pred_class))

# Define features and targets for regression
X_reg = df[['SPI']]  # Ensure features match the ones used during training
y_reg = df['drought_duration']

# Split the data into train and test sets for regression
X_train_reg, X_test_reg, y_train_reg, y_test_reg = train_test_split(X_reg, y_reg, test_size=0.2, random_state=42)

# Train a Random Forest model for regression
rf_reg = RandomForestRegressor(n_estimators=100, random_state=42)
rf_reg.fit(X_train_reg, y_train_reg)

# Predict on the test set for regression
y_pred_reg = rf_reg.predict(X_test_reg)

# Evaluate the regression model
print("Mean Absolute Error (Duration Prediction):", mean_absolute_error(y_test_reg, y_pred_reg))

# Save the models if needed
joblib.dump(rf_class, './models/drought_rf_class_model.joblib')
joblib.dump(rf_reg, './models/drought_rf_reg_model.joblib')

# Load the trained models
rf_class = joblib.load('./models/drought_rf_class_model.joblib')
rf_reg = joblib.load('./models/drought_rf_reg_model.joblib')

# Load the dataset to get SPI values
data_path = './dra_export_257040.csv'
df = pd.read_csv(data_path)
df['Date'] = pd.to_datetime(df['Date'], format='%m/%d/%Y %I:%M:%S %p')

def preprocess_date(date_str):
    """Convert the input date string into a pandas datetime object."""
    return pd.to_datetime(date_str, format='%Y-%m-%d')

def prepare_features(date, df):
    """Prepare features for prediction based on the date."""
    # Ensure the date is within the data range
    if date < df['Date'].min() or date > df['Date'].max():
        raise ValueError("Date is out of the range of the dataset.")
    
    # Find the SPI for the given date
    drought_status = df[df['Date'] == date]['SPI'].values
    if len(drought_status) == 0:
        raise ValueError("Date not found in the dataset.")
    
    # Assuming SPI data is directly used
    drought_status = drought_status[0]
    
    # Determine if it's a drought based on SPI
    is_drought = drought_status < -1
    return np.array([[drought_status]])

def predict_drought(date_str):
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

# Example usage
date_to_test = '2012-11-01'
drought_status, drought_duration = predict_drought(date_to_test)
print(f"Date: {date_to_test}")
print(f"Drought Status: {drought_status}")
if drought_status == 'Yes':
    print(f"Estimated Duration: {drought_duration:.2f} months")
