from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.

@csrf_exempt
def add_meetup(request):
    print(json.loads(request.body))

    response = JsonResponse({
        "status_code": 200,
        "message": "minha mãe me bate as vezes"
    }, status=200)
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response