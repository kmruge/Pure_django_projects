from django.db import models

# Create your models here.
class Employee(models.Model):
    Name=models.CharField(max_length=50,default='No Name')
    Salary=models.IntegerField(default='300')
    Address=models.CharField(max_length=200,default='kk')
    Image=models.ImageField(default='none')
    #Date=models.DateTimeField(default='30')