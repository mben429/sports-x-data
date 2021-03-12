from django import forms

class UploadFileForm(forms.Form):
    teamFor = forms.CharField(widget=forms.TextInput(attrs={"class": "form-field", "placeholder": "Team"}), label="", required=True, max_length=100)
    teamAgainst = forms.CharField(widget=forms.TextInput(attrs={"class": "form-field", "placeholder": "Team Against"}), label="", required=True, max_length=100)
    file = forms.FileField(widget=forms.ClearableFileInput(attrs={"class": "form-field"}), label="", required=True)

