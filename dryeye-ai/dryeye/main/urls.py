from django.urls import path
from .views import predict_view

urlpatterns = [
    path('api/predict/', predict_view, name='predict'),
    # Other URL patterns
]
