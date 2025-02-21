import numpy as np
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from keras.models import load_model
from PIL import Image
import requests
from io import BytesIO

def home(request):
    return HttpResponse("<h1>Deepfake Detector is Running</h1>")

model = load_model(r'C:\Users\imran\OneDrive\Desktop\BackendModel\deepfake_detector\detection\model.keras')  # Adjust the path if necessary

class_names = ['fake', 'real']

@api_view(['POST'])
@csrf_exempt
def detect_deepfake(request):
    if request.method == 'POST':
        try:
            data = request.data
            image_url = data.get('image_url')

            if not image_url:
                return JsonResponse({'error': 'No image URL provided'}, status=400)

            response = requests.get(image_url)
            if response.status_code != 200:
                return JsonResponse({'error': 'Failed to fetch image from the URL'}, status=400)

            image = Image.open(BytesIO(response.content))
            image = image.convert('RGB')  # Ensure the image is in RGB mode
            image = image.resize((150, 150))  # Resize to the input size of your model
            image_array = np.array(image) / 255.0  # Normalize the image

            if image_array.shape[-1] != 3:
                return JsonResponse({'error': 'Image must have 3 channels (RGB)'}, status=400)

            image_array = np.expand_dims(image_array, axis=0)  # Shape becomes (1, 150, 150, 3)

            prediction = model.predict(image_array)

            predicted_class = np.argmax(prediction, axis=1)[0]  # Index of the highest probability class

            response_data = {
                'is_deepfake': class_names[predicted_class],  # Get the class name
                'confidence': float(prediction[0][predicted_class])  # Confidence score
            }
            return JsonResponse(response_data)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
