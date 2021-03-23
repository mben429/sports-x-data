"""


Disable for now, save for later...
from django import forms
from django.forms import ModelForm
from file_upload.models import Footage

class UploadFileForm(ModelForm):

    \"""
    teamFor = forms.CharField(widget=forms.TextInput(attrs={"class": "form-field", "placeholder": "Team"}), label="", required=True, max_length=100)
    teamAgainst = forms.CharField(widget=forms.TextInput(attrs={"class": "form-field", "placeholder": "Team Against"}), label="", required=True, max_length=100)
    file = forms.FileField(widget=forms.ClearableFileInput(attrs={"class": "form-field"}), label="", required=True)
    \"""

    class Meta: 
        model = Footage
        fields = ['teamFor', 'teamAgainst', 'file']

    def __init__(self, *args, **kwargs):
        super(UploadFileForm, self).__init__(*args, **kwargs)
        self.fields['teamFor'].widget.attrs.update({"class": "form-field", "placeholder": "Team"})
        self.fields['teamAgainst'].widget.attrs.update({"class": "form-field", "placeholder": "Team Against"})
        
        self.fields['file'].widget.attrs.update({"class": "form-field"})

"""