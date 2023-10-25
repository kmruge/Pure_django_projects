from django.db import models

# Create your models here.
class BikeDetail(models.Model):
    BikeName=models.CharField(max_length=300)
    BikeNumber=models.IntegerField()
    BikeModel=models.IntegerField()