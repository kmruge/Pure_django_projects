from django.http import HttpResponse

from django.shortcuts import render

# Create your views here.
def write(request):
    message="<h2>This line from second application</h2>"
    return HttpResponse(message)