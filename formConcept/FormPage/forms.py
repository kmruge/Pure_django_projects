from django import forms

class EmpForm(forms.Form):
    Name=forms.CharField()
    Sal=forms.IntegerField()
    Password=forms.CharField(label='Password-2',widget=forms.PasswordInput(),help_text='Enter password more than 6 letter',disabled=False,validators='niobri')
    file=forms.FileField(disabled=True)
