from django.shortcuts import render
from django.http import HttpResponse
#from dbApp.models import Employee
# Create your views here.
def dataBase(request):
    '''data=Employee.objects.all()
    dict_data={"data_list":data}
    print(data)'''
    return render(request,'modelDbApp/dbHTML.html') #context=dict_data)