from django.shortcuts import render
from django.contrib.auth import authenticate, login
from .forms import LoginForm
from rest_framework.views import APIView
from rest_framework.response import Response
from json import dumps, loads


def loginView(request):
    
    # Just for testing and display purposes
    list_of_user_names = [
        "TeamTestName", 
        "massey1stxv", 
        "rosmini1stxv",
        "crusadersrugby",
        "canesrugby",
        "toulonrugby",
    ]

    list_of_team_keys = [
        "Testformvp13", 
        "mhs_59234", 
        "rc_55211",
        "cru_44322",
        "canes_99811",
        "tou_76522",
    ]

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

                # Dump data into JSON for communication with JS
                if team_user_name == "TeamTestName":
                    team_user_name = "canesrugby"
                print(team_user_name)
                data_dict = {
                    'team_user_name' : team_user_name,
                    'organization': "test_obj",
                }
                dataJSON = dumps(data_dict)
                print(dataJSON)

                return render(request, "registration/login_success.html", {'data' : dataJSON})

                # Simply testing
                #return render(request, "registration/test_new_ac.html", {"team_user_name": team_user_name})
            else:
                return render(request, "registration/login_failure.html")

    return render(request, "registration/login.html", {'form': form})
