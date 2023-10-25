from django.db import models

# Create your models here.

class StudentModel(models.Model):
    Name=models.CharField(max_length=200)
    Address=models.CharField(max_length=300)
    MobileNumber=models.IntegerField()