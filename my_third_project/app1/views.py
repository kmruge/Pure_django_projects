from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def writeOne(request):
    messgae='<h4>hi from app1 one</h4>'
    return HttpResponse(messgae)

def writeTwo(request):
    messgae='<h4>hi from app1 two</h4>'
    return HttpResponse(messgae)
def writeThree(request):
    messgae='<h4>hi from app1n three</h4>'
    return HttpResponse(messgae)
def writeFour(request):
    messgae='<h4>hi from app1 four </h4>'
    return HttpResponse(messgae)