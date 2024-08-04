from rest_framework.decorators import api_view
from .ml_models.model import predict

from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

@api_view(['POST'])
@csrf_exempt  # Use with caution, only if you need to exempt this view from CSRF checks
def predict_view(request):
    station_id = request.data.get('station_id')
    if station_id is not None:
        print(station_id)
        features = [station_id]  # Prepare features as needed
        prediction = predict(features)
        return JsonResponse({'prediction': prediction.tolist()})
    else:
        return JsonResponse({'error': 'Invalid station ID'}, status=400)