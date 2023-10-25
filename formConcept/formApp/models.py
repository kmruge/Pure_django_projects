from django.db import models

# Create your models here.
class EmpDetails(models.Model):
    EmpName=models.CharField(max_length=200)
    EmpMobileNum=models.IntegerField()
    EmpAddress=models.CharField(max_length=200)