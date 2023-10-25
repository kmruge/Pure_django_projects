from django.http import HttpResponse
from django.shortcuts import render ,redirect
from app.models import StudentModel
from app.FormModel import craeteForm
from app.correctionForm import Correction
# Create your views here.
def createView(request):
    data=StudentModel.objects.all()
    return render(request,'viewData.html',context={'dataFromDB':data})

def createdate(request):
    if request.method=='POST':
        form = craeteForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success_url')
    else:
        form=craeteForm()
    return render(request,'createData.html',context={'formTable':form})

def specific_Object(request,pk):
    data = StudentModel.objects.get(id=pk)
    return render(request,'specificData.html',context={'dataPK':data})

def nameCorrection(request):
    if request.method=='POST':
            correctionForm = Correction(request.POST)
            if correctionForm.is_valid():
                id=correctionForm.cleaned_data['Enter_ID']
                name = correctionForm.cleaned_data['Enter_New_Name']
                data = StudentModel.objects.get(id=id)
                data.Name = name
                data.save()
                return redirect('success_url')
    else:
        correctionForm=Correction()
    return render(request,'correctionName.html',context={'correctionForm':correctionForm})

def correctName(request):
    data = StudentModel.objects.get(id=1)
    data.Name='comecome'
    data.save()
    return HttpResponse('<h1>succeed</h1>')