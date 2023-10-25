import datetime

from django.shortcuts import render

# Create your views here.
def display(request):
    date=datetime.datetime.now()
    message=None
    name="Anusha"
    hour=int(date.strftime('%H'))
    if hour<12:
        message="Good Morning"
    else:
        message="Good Evening"
    dict={"personName":name,"greeting":message,"date":date}
    return render(request,'html1/date_Name.html', context=dict)