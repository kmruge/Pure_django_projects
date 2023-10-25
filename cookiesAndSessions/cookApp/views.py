from django.shortcuts import render

# Create your views here.
def cookiesAdd(request):
    #This is for cookies but in django we go for sessions
    '''count=request.COOKIES.get('count',0)
    totalcount=int(count)+1
    response=render(request,'html/index.html',context={'cookiesCount':totalcount})
    response.set_cookie('count',totalcount)
    return response'''

    #Sessions
    #Must perform python3 manage.py migrate
    #Since session values store in data base we must inform to data base about whereabouts of session
    count=request.session.get('count',0)
    totalCount=int(count)+1
    request.session['count']=totalCount
    return render(request,'html/index.html',context={'cookiesCount':totalCount})