from django.http import JsonResponse
from rest_framework.decorators import api_view
from .ml_models.model import predict
from .ml_models.gradient import get_rgb

import json
import subprocess
from django.shortcuts import render

from django.views.decorators.csrf import csrf_exempt

@api_view(['POST'])
@csrf_exempt  # Use with caution, only if you need to exempt this view from CSRF checks
def predict_view(request):
    # Get the data from the request
    station_id = request.data.get('station_id')

    if station_id is not None:
        # Prepare the features based on your model's requirements
        features = [station_id]  # Adjust as needed
        prediction = predict(features)
        return JsonResponse({'prediction': prediction.tolist()})
    else:
        return JsonResponse({'error': 'Invalid station ID'}, status=400)
    

@csrf_exempt
def save_pin(request):
    if request.method == 'POST':
        pin_data = json.loads(request.body)
        x = pin_data.get('x')
        y = pin_data.get('y')
        
        # Call the gradient.py script
        gradient_val = get_rgb(x,y)

        return JsonResponse({'status': 'success', 'gradient': gradient_val})

    return JsonResponse({'status': 'error'}, status=400)