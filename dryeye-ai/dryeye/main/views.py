from django.http import JsonResponse
from rest_framework.decorators import api_view
from .ml_models.auto_pred import predict

@api_view(['POST'])
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