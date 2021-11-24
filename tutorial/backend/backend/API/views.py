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


def get_meetups(reqeust):
    with open("dummy_data.json") as json_file:
        json_object = json.loads(json_file.read())
        print(type(json_object))
    
    response = JsonResponse(json_object, status=200, safe=False)
    response.headers["Access-Control-Allow-Origin"] = "*"

    
    return response
