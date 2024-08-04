from rest_framework.decorators import api_view
from django.http import JsonResponse
from .ml_models.model import predict_drought
from .ml_models.gradient import get_rgb
import json

@api_view(['POST'])
def predict_view(request):
    date_str = str(request.data.get('date_id'))
    print(date_str)
    if date_str:
        print(date_str)
        prediction = predict_drought(date_str)
        print(prediction)
        # Return the prediction as a JSON response
        return JsonResponse(json.loads(prediction), safe=False)
    else:
        return JsonResponse({'error': 'Invalid date'}, status=400)

def save_pin(request):
    if request.method == 'POST':
        pin_data = json.loads(request.body)
        x = pin_data.get('x')
        y = pin_data.get('y')
        
        # Call the gradient.py script
        gradient_val = get_rgb(x,y)

        return JsonResponse({'status': 'success', 'gradient': gradient_val})

    return JsonResponse({'status': 'error'}, status=400)