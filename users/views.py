from django.shortcuts import render
from django.contrib.auth import authenticate, login
from .forms import LoginForm
from rest_framework.views import APIView
from rest_framework.response import Response


def loginView(request):

    if request.method == "GET":
        form = LoginForm()
    else:

        form = LoginForm(request.POST)

        if form.is_valid():
            team_user_name = form.cleaned_data['team_user_name']
            team_user_key = form.cleaned_data['team_user_key']

            user = authenticate(request, username=team_user_name, password=team_user_key)

            if user is not None:
                login(request, user)
                return render(request, "registration/login_success.html", {"team_user_name": team_user_name})
            else:
                return render(request, "registration/login_failure.html")

    return render(request, "registration/login.html", {'form': form})



