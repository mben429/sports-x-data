from django import forms


class LoginForm(forms.Form):
    team_user_name = forms.CharField(widget=forms.TextInput(attrs={"class": "form-field", "placeholder": "Name"}), label="", required=True, max_length=100)
    team_user_key = forms.CharField(widget=forms.TextInput(attrs={"class": "form-field", "placeholder": "TeamKey"}), label="", required=True, max_length=100)


class MatchCentreIDForm(forms.Form):
    placeholder_field = forms.CharField(widget=forms.HiddenInput(), required=False)