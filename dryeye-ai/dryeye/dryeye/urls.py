from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from main.views import predict_view

urlpatterns = [
    path('admin/', admin.site.urls),
    # Add API URL patterns here if needed
    # path('api/', include('main.urls')),  # Example for including app URLs

    path('api/predict/', predict_view, name='predict'),
    # Serve the React app
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]
