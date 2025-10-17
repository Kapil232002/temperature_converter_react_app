# temp/views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def convert_temperature(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body.decode("utf-8"))
            value = float(data.get("value"))
            from_unit = data.get("fromUnit")
            to_unit = data.get("toUnit")

            result = None
            if from_unit == to_unit:
                result = value
            elif from_unit == "Celsius":
                if to_unit == "Fahrenheit":
                    result = (value * 9/5) + 32
                elif to_unit == "Kelvin":
                    result = value + 273.15
            elif from_unit == "Fahrenheit":
                if to_unit == "Celsius":
                    result = (value - 32) * 5/9
                elif to_unit == "Kelvin":
                    result = (value - 32) * 5/9 + 273.15
            elif from_unit == "Kelvin":
                if to_unit == "Celsius":
                    result = value - 273.15
                elif to_unit == "Fahrenheit":
                    result = (value - 273.15) * 9/5 + 32
            else:
                return JsonResponse({"error": "Invalid units provided"}, status=400)

            return JsonResponse({"result": round(result, 2)})

        except (ValueError, TypeError):
            return JsonResponse({"error": "Invalid temperature value. It must be a number."}, status=400)
        except Exception as e:
            return JsonResponse({"error": f"An unexpected error occurred: {str(e)}"}, status=500)

    return JsonResponse({"error": "Invalid request method. Only POST is allowed."}, status=405)
