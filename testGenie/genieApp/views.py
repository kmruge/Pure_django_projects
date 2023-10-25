from django.shortcuts import render

# Create your views here.
def funTime(request):
    return render(request,'html/page1.html')
