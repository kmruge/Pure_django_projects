from django.shortcuts import render

# Create your views here.
from connect.models import BikeDetail
# Create your tests here.
def data_from_DB(request):
    bike=BikeDetail.objects.get(pk=2)
    return render(request,'index.html',context={'stu':bike})
