from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from .forms import LoginForm
from rest_framework.views import APIView
from rest_framework.response import Response
from json import dumps, loads
from general.models import Team, Season, Game, Stat
from general.retrieval import *


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
                if check_league_enabled(team_user_name):
                    return render(request, "registration/login_success_league.html", {'data' : dataJSON})
                else:
                    return render(request, "registration/login_success.html", {'data' : dataJSON})
                # Simply testing
                #return render(request, "registration/test_new_ac.html", {"team_user_name": team_user_name})
            else:
                return render(request, "registration/login_failure.html")

    return render(request, "registration/login.html", {'form': form})


def loggedinView(request):
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

    
    if check_league_enabled(team_user_name):
        return render(request, "registration/login_success_league.html", {'data' : dataJSON})
    else:
        return render(request, "registration/login_success.html", {'data' : dataJSON})

    
def logoutView(request):
    logout(request)
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

                if check_league_enabled(team_user_name):
                    return render(request, "registration/login_success_league.html", {'data' : dataJSON})   
                else:
                    return render(request, "registration/login_success.html", {'data' : dataJSON})
                # Simply testing
                #return render(request, "registration/test_new_ac.html", {"team_user_name": team_user_name})
            else:
                return render(request, "registration/login_failure.html")

    return render(request, "registration/login.html", {'form': form})