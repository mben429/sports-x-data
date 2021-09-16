# contactForm/forms.py
from django import forms


class ContactForm(forms.Form):
    user_name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-field", "placeholder": "Name"}), label="", required=True, max_length=100)
    user_email = forms.EmailField(widget=forms.TextInput(attrs={"class": "form-field", "placeholder": "Email"}), required=True, label="", max_length=100)
    user_org = forms.CharField(widget=forms.TextInput(attrs={"class": "form-field", "placeholder": "Team/Organization/Company"}), required=True, label="", max_length=100)
    user_message = forms.CharField(widget=forms.Textarea(attrs={"class": "form-field", "placeholder": "Let us know how we can help you"}), required=True, label="", max_length=500)



