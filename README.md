# DryEye AI 👁️‍🗨️

## Overview 📝
DryEye AI is an advanced tool designed to predict and detect drought conditions. It leverages a combination of regression and classifier models, alongside a computer vision (CV) classification model integrated with Roboflow. The tool analyzes images to predict the likelihood of future droughts and employs an OpenCV model to track and interpret official heatmaps of weather conditions sourced from NASA.

![DryEye Banner](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/976/146/datas/gallery.jpg)

## Features ⭐
- **Drought Prediction:** Uses Random Forest models to classify and regress drought levels from climate data.
- **Computer Vision Analysis:** Analyzes drought images to detect signs of drought.
- **API and Web Interface:** Built on Django REST framework with CORS support for easy integration.
- **Data Handling:** Utilizes pandas and numpy for data processing.

## Installation ⚙️

1. Clone the repository:
   ```bash
   git clone https://github.com/burhan-dahod/DryEye.git
   cd .\DryEye\dryeye-ai\dryeye\
2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
3. Build the frontend:
   ```bash
   npm run build
4. Run the Django server:
   ```bash
   python manage.py runserver
5. Open the server:
   ```bash
   Open http://127.0.0.1:8000/ and view it in the browser.
## Technologies 🚀

[![Python](https://img.shields.io/badge/Python-3.13-blue?logo=python&logoColor=white&style=for-the-badge)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-5.2.1-092E20?logo=django&logoColor=white&style=for-the-badge)](https://www.djangoproject.com/)
[![scikit-learn](https://img.shields.io/badge/scikit--learn-1.6.1-F7931E?logo=scikitlearn&logoColor=white&style=for-the-badge)](https://scikit-learn.org/)
[![OpenCV](https://img.shields.io/badge/OpenCV-4.11.0-5C3EE8?logo=opencv&logoColor=white&style=for-the-badge)](https://opencv.org/)
[![Pandas](https://img.shields.io/badge/Pandas-2.2.3-150458?logo=pandas&logoColor=white&style=for-the-badge)](https://pandas.pydata.org/)
[![NumPy](https://img.shields.io/badge/NumPy-2.2.6-013243?logo=numpy&logoColor=white&style=for-the-badge)](https://numpy.org/)
[![Matplotlib](https://img.shields.io/badge/Matplotlib-3.10.3-11557C?logo=matplotlib&logoColor=white&style=for-the-badge)](https://matplotlib.org/)
[![Django REST Framework](https://img.shields.io/badge/DRF-3.16.0-1C3D5A?logo=django&logoColor=white&style=for-the-badge)](https://www.django-rest-framework.org/)

## Credits 📄

Thanks to the following contributors:

- [Ammar Hakim](https://github.com/ammxr)
- [Mohamed Eltaib](https://github.com/RyzenStudios) 
- [Karishvan Ragunathan](https://github.com/Karishvan)   
- [Burhanuddin Dahodwala](https://github.com/burhan-dahod) 

