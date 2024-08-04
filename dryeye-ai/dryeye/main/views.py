from rest_framework.decorators import api_view
from django.http import JsonResponse
from .ml_models.model import predict

@api_view(['POST'])
def predict_view(request):
    station_id = request.data.get('station_id')
    if station_id is not None:
        print(station_id)
        features = [station_id]  # Prepare features as needed
        prediction = predict(features)
        return JsonResponse({'prediction': prediction.tolist()})
    else:
        return JsonResponse({'error': 'Invalid station ID'}, status=400)