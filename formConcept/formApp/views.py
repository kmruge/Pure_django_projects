from django import forms
from django.shortcuts import render
from FormPage.forms import EmpForm


# Create your views here.
def formView(request):
    formDetails=EmpForm()
    dict={"formDel":formDetails}
    return render(request,'htmlCode/index.html', context=dict)