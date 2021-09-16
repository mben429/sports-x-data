# contactForm/forms.py
from django import forms

class RegisterInterestForm(forms.Form):
    user_name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-field", "placeholder": "Name"}), label="", required=True, max_length=100)
    user_email = forms.EmailField(widget=forms.TextInput(attrs={"class": "form-field", "placeholder": "Email"}), required=True, label="", max_length=100)
    user_org = forms.CharField(widget=forms.TextInput(attrs={"class": "form-field", "placeholder": "Team/Organization/Company"}), required=True, label="", max_length=100)
    user_product_of_interest = forms.CharField(widget=forms.TextInput(attrs={"class": "form-field", "placeholder": "Product of Interest"}), required=True, label="", max_length=100)
    user_message = forms.CharField(widget=forms.Textarea(attrs={"class": "form-field", "placeholder": "Other Comments"}), required=False, label="", max_length=500)


class DemoInterestForm(forms.Form):
    user_name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-field", "placeholder": "Name"}), label="", required=True, max_length=100)
    user_email = forms.EmailField(widget=forms.TextInput(attrs={"class": "form-field", "placeholder": "Email"}), required=True, label="", max_length=100)
    user_org = forms.CharField(widget=forms.TextInput(attrs={"class": "form-field", "placeholder": "Team/Organization/Company"}), required=True, label="", max_length=100)
    user_message = forms.CharField(widget=forms.Textarea(attrs={"class": "form-field", "placeholder": "Other Comments"}), required=False, label="", max_length=500) 