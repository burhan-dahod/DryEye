from django.urls import path
from .views import predict_view
from .views import save_pin

urlpatterns = [
    path('api/predict/', predict_view, name='predict'),
    # Other URL patterns
    path('api/save-pin/', save_pin, name='save_pin'),
]
