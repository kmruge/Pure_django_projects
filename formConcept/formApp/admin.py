from django.contrib import admin
from formApp import models
# Register your models here.
#admin.site.register(models.EmpDetails)

@admin.register(models.EmpDetails)
class MyModelAdmin(admin.ModelAdmin):
    list_display = ("EmpName",)
    search_fields = ("EmpMobileNum",)
    list_filter = ('EmpAddress',)
