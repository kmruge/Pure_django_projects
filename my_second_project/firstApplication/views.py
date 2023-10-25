from django.shortcuts import render
from django.http import HttpResponse
def own(request, pk):
    return render(request,'kphtml.html',context={"value":pk})

# Create your views here.
