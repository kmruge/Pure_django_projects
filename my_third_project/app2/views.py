from django.http import HttpResponse
from django.shortcuts import render
from datetime import datetime
# Create your views here.
def time(request):
    date=datetime.today()
    return HttpResponse('This current time is '+str(date))
def writeOne(request):
    messgae='<h4>hi from app2 one</h4>'
    return HttpResponse(messgae)

def writeTwo(request):
    messgae='<h4>hi from app2 two</h4>'
    return HttpResponse(messgae)
def writeThree(request):
    messgae='<h4>hi from app2 three</h4>'
    return HttpResponse(messgae)
def writeFour(request):
    messgae='<h4>hi from app2 four </h4>'
    return HttpResponse(messgae)