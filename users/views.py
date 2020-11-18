from django.shortcuts import render
from django.contrib.auth import authenticate, login
from .forms import LoginForm
from rest_framework.views import APIView
from rest_framework.response import Response


def loginView(request):
    
    # Just for testing and display purposes
    list_of_user_names = ["mben429", "TeamTestName"]
    list_of_team_keys = ["Djangoformvp13", "Testformvp13"]

    if request.method == "GET":
        form = LoginForm()
    else:

        form = LoginForm(request.POST)

        if form.is_valid():
            team_user_name = form.cleaned_data['team_user_name']
            team_user_key = form.cleaned_data['team_user_key']

            '''
            user = authenticate(request, username=team_user_name, password=team_user_key)
            '''
            
            if team_user_name in list_of_user_names and team_user_key in list_of_team_keys:
                #login(request, user)
                return render(request, "registration/login_success.html", {"team_user_name": team_user_name})
            else:
                return render(request, "registration/login_failure.html")

    return render(request, "registration/login.html", {'form': form})



