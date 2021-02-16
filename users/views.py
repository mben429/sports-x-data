from django.shortcuts import render
from django.contrib.auth import authenticate, login
from .forms import LoginForm
from rest_framework.views import APIView
from rest_framework.response import Response
from json import dumps, loads
from general.models import Team, Season, Game, Stat
from general.retrieval import *


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
            
            if team_user_name in list_of_user_names and team_user_key in list_of_team_keys and list_of_user_names.index(team_user_name) == list_of_team_keys.index(team_user_key):
                #login(request, user)

                # Redirect TeamTestName Login
                if team_user_name == "TeamTestName":
                    team_user_name = "rosmini1stxv"

                # Get Data from DB
                team_table_data = get_team_table_data(team_user_name)
                team_season_data = get_team_season_table_data(team_user_name)
                team_game_data = get_team_game_data(team_user_name)
                team_stat_data = get_team_stat_data(team_user_name)
                team_game_event_data = get_team_game_event_data(team_user_name)
                
                # Dump data into JSON for communication with JS
                data_dict = {
                    'team_user_name' : team_user_name,
                    'organization': "test_obj",
                    'team_table_data': team_table_data,
                    'team_season_data': team_season_data,
                    'team_game_data': team_game_data,
                    'team_stat_data': team_stat_data,
                    'team_game_event_data': team_game_event_data
                }
                dataJSON = dumps(data_dict, default=str)

                return render(request, "registration/login_success.html", {'data' : dataJSON})

                # Simply testing
                #return render(request, "registration/test_new_ac.html", {"team_user_name": team_user_name})
            else:
                return render(request, "registration/login_failure.html")

    return render(request, "registration/login.html", {'form': form})
