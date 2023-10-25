from django import forms
from .models import StudentModel
from django.forms import ModelForm
class craeteForm(ModelForm):
    class Meta:
        model=StudentModel
        fields='__all__'
