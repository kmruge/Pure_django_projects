from django import forms

class Correction(forms.Form):
    Enter_ID=forms.IntegerField(label='ID')
    Enter_New_Name=forms.CharField(max_length=200,label='New Name')