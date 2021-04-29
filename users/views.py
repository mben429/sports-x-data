from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from .forms import LoginForm
from rest_framework.views import APIView
from rest_framework.response import Response
from json import dumps, loads
from general.models import Team, Season, Game, Stat
from general.retrieval import *
from django.http import JsonResponse, HttpResponse
from django.core import serializers


def matchCentreView(request):

    game_id_str = request.POST.get('game_id_str')
    json_string = dumps(game_id_str)
    print("Now in Views, Game Id is: ", game_id_str)

    return JsonResponse(json_string, status=200, safe=False)


def check_league_enabled(team):
    teams_enabled = ["massey1stxv", "rosmini1stxv"]
    if team in teams_enabled:
        return True
    else:
        return False


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
                print("Current team username is: ", request.user.username)
                
                # Redirect TeamTestName Login
                if team_user_name == "TeamTestName":
                    team_user_name = "rosmini1stxv"

                # Get Data from DB
                team_table_data = get_team_table_data(team_user_name)
                team_season_data = get_team_season_table_data(team_user_name)
                team_game_data = get_team_game_data(team_user_name)
                team_stat_data = get_team_stat_data(team_user_name)
                
                # Dump data into JSON for communication with JS
                data_dict = {
                    'team_user_name' : team_user_name,
                    'organization': "test_obj",
                    'team_table_data': team_table_data,
                    'team_season_data': team_season_data,
                    'team_game_data': team_game_data,
                    'team_stat_data': team_stat_data,
                }
                                
                dataJSON = dumps(data_dict, default=str)
                return redirect("teamCentre")
            else:
                return render(request, "registration/login_failure.html")

    return render(request, "registration/login.html", {'form': form})


def teamCentreView(request):
    team_user_name = request.user.username
    print("Current Team that is already logged in: ", team_user_name)

    # Redirect TeamTestName Login
    if team_user_name == "TeamTestName":
        team_user_name = "rosmini1stxv"

    # Get Data from DB
    team_table_data = get_team_table_data(team_user_name)
    team_season_data = get_team_season_table_data(team_user_name)
    team_game_data = get_team_game_data(team_user_name)
    team_stat_data = get_team_stat_data(team_user_name)
    team_game_event_data = get_team_game_event_data(team_user_name)
    print("Team Game data", team_game_event_data)
    
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
    print(team_game_data)

    dataJSON = dumps(data_dict, default=str)

    return render(request, "registration/ac_home.html", {'data': dataJSON})
    
def logoutView(request):
    logout(request)
    return redirect('login')

